import { useState } from "react";
import { useRoute } from "wouter";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import NotFound from "@/pages/not-found";
import { Check, Truck, Shield, Minus, Plus, ShoppingCart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!match) return <NotFound />;

  const product = products.find((p) => p.id === params.id);
  if (!product) return <NotFound />;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div className="aspect-square bg-muted rounded-2xl overflow-hidden sticky top-24">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col h-full justify-center">
          <div className="mb-6">
            <h2 className="text-sm text-muted-foreground font-medium mb-2 uppercase tracking-wide">
              {product.category}
              {product.size && ` · ${product.size}`}
            </h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-primary">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center border rounded-full w-fit">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3 hover:bg-muted transition-colors rounded-l-full"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 font-medium min-w-[2.5rem] text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="p-3 hover:bg-muted transition-colors rounded-r-full"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button
              size="lg"
              className="h-14 text-base rounded-full flex-1 sm:flex-none px-10 uppercase tracking-wide font-bold"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {`Add to Cart — $${(product.price * quantity).toFixed(2)}`}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border/50">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <Truck className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <Check className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium">In Stock</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium">100% Natural</span>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="features">
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                Free shipping on all orders over $100. Returns accepted within 30 days of delivery.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
