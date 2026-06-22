import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export default function ProductList() {
  const searchParams = new URLSearchParams(window.location.search);
  const categoryFilter = searchParams.get("category");

  const filteredProducts = categoryFilter
    ? products.filter((p) => p.category.toLowerCase() === categoryFilter.toLowerCase())
    : products;

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="container px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold mb-2">
            {categoryFilter ? categoryFilter : "All Products"}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} items found
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
          <Button
            variant={!categoryFilter ? "default" : "outline"}
            size="sm"
            asChild
            className="rounded-full"
          >
            <a href="/products">All</a>
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={categoryFilter?.toLowerCase() === cat.toLowerCase() ? "default" : "outline"}
              size="sm"
              asChild
              className="rounded-full"
            >
              <a href={`/products?category=${cat.toLowerCase()}`}>{cat}</a>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
