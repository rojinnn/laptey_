import type { Express, Request } from "express";
import type { Server } from "http";
import { checkoutSchema } from "@shared/schema";
import { ZodError } from "zod";
import { getStripe } from "./stripe";

function handleZodError(err: unknown, res: import("express").Response) {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: "Validation error", errors: err.errors });
  }
  throw err;
}

function getRequestOrigin(req: Request) {
  const protocol = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.headers.host;
  return `${protocol}://${host}`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post("/api/checkout", async (req, res) => {
    try {
      const data = checkoutSchema.parse(req.body);
      const stripe = getStripe();
      const origin = getRequestOrigin(req);

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: data.customerEmail,
        line_items: data.items.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: item.image ? [item.image] : undefined,
              metadata: { productId: item.id },
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity,
        })),
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/checkout/cancel`,
        metadata: {
          customerName: data.customerName ?? "",
          shippingAddress: data.shippingAddress ? JSON.stringify(data.shippingAddress) : "",
        },
      });

      if (!session.url) {
        return res.status(500).json({ message: "Failed to create checkout session" });
      }

      res.json({ url: session.url });
    } catch (err) {
      if (err instanceof ZodError) return handleZodError(err, res);
      if (err instanceof Error && err.message === "STRIPE_SECRET_KEY is not configured") {
        return res.status(500).json({ message: err.message });
      }
      console.error("Stripe checkout error:", err);
      res.status(500).json({ message: "Failed to create checkout session" });
    }
  });

  return httpServer;
}
