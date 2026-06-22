import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export default function CheckoutCancel() {
  return (
    <div className="container px-4 py-24 text-center max-w-lg mx-auto">
      <div className="flex justify-center mb-6">
        <XCircle className="h-16 w-16 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-heading font-bold mb-4">Payment Cancelled</h1>
      <p className="text-muted-foreground mb-8">
        Your payment was not completed. Your cart items are still saved.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" className="rounded-full">
          <Link href="/checkout">Return to Checkout</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
