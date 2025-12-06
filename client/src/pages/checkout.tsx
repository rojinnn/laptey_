import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { redirectToCheckout } from "@/lib/stripe";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const onSubmit = async (data: any) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase.",
    });
    
    clearCart();
    setLoading(false);
    setLocation('/'); // Or to a success page
  };

  if (items.length === 0) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Button onClick={() => setLocation('/products')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-heading font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...register("email", { required: true })} />
                {errors.email && <span className="text-destructive text-sm">Required</span>}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" {...register("firstName", { required: true })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" {...register("lastName", { required: true })} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" {...register("address", { required: true })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" {...register("city", { required: true })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" {...register("zip", { required: true })} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Payment</h2>
              <div className="bg-muted p-4 rounded-lg border text-sm text-muted-foreground">
                This is a secure 256-bit SSL encrypted payment. (Mock Stripe Integration)
              </div>
              <div className="grid gap-2">
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-lg mt-8" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {loading ? "Processing..." : `Pay $${cartTotal}`}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-muted/30 p-8 rounded-xl h-fit sticky top-24">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded bg-muted overflow-hidden">
                    <img src={item.image} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <p className="text-muted-foreground">Subtotal</p>
              <p>${cartTotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t mt-4">
              <p>Total</p>
              <p>${cartTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
