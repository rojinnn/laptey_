import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative container h-full flex flex-col justify-center items-start px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase mb-6 border border-white/20">
            New Collection 2024
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-[0.9]">
            Designed for <br />
            Modern Living.
          </h1>
          <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed">
            Discover a curated collection of minimalist essentials that elevate your everyday experience. Crafted with intention.
          </p>
          <Link href="/products">
            <Button size="lg" className="h-14 px-8 text-base rounded-full">
              Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold">Featured Arrivals</h2>
          <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4 flex items-center">
            View All <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
          <div className="relative group overflow-hidden rounded-2xl h-full">
            <img 
              src="https://images.unsplash.com/photo-1540932296774-3ed69c3a2f73?q=80&w=1000&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-bold text-white mb-2">Living</h3>
              <Link href="/products?category=lighting">
                <Button variant="secondary" className="rounded-full">Explore</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
             <div className="relative group overflow-hidden rounded-2xl h-full">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white mb-2">Audio</h3>
                <Link href="/products?category=audio">
                  <Button variant="secondary" size="sm" className="rounded-full">Explore</Button>
                </Link>
              </div>
            </div>
             <div className="relative group overflow-hidden rounded-2xl h-full">
              <img 
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white mb-2">Accessories</h3>
                <Link href="/products?category=accessories">
                  <Button variant="secondary" size="sm" className="rounded-full">Explore</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
