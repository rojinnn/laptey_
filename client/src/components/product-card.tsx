import { Link } from "wouter";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col gap-3">
      <Link href={`/products/${product.id}`} className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-muted relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-foreground">
            <Link href={`/products/${product.id}`} className="hover:underline decoration-1 underline-offset-4">
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">${product.price}</p>
        </div>
        <Button 
          size="icon" 
          variant="secondary" 
          className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>
    </div>
  );
}
