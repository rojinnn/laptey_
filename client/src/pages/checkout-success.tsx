import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container px-4 py-24 text-center max-w-lg mx-auto">
      <div className="flex justify-center mb-6">
        <CheckCircle2 className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-3xl font-heading font-bold mb-4">Payment Successful</h1>
      <p className="text-muted-foreground mb-8">
        Thank you for your order. You will receive a confirmation email from Stripe shortly.
      </p>
      <Button asChild size="lg" className="rounded-full">
        <Link href="/products">Continue Shopping</Link>
      </Button>
    </div>
  );
}
