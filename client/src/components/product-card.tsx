import { Link } from "wouter";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col gap-3 bg-card rounded-lg overflow-hidden border border-border/30 hover:border-primary/40 transition-colors">
      <Link href={`/products/${product.id}`} className="aspect-square w-full overflow-hidden bg-muted relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <div>
          <h3 className="text-sm font-bold text-foreground">
            <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
              {product.name}
            </Link>
          </h3>
          {product.size && (
            <p className="text-xs text-muted-foreground mt-0.5">{product.size}</p>
          )}
          <p className="text-sm font-medium text-primary mt-1">${product.price.toFixed(2)}</p>
        </div>
        <Button
          size="sm"
          className="w-full rounded-full text-xs uppercase tracking-wide font-bold"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
