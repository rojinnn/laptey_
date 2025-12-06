import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { ArrowRight, Leaf, Recycle, Heart } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col pb-12">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=2000&auto=format&fit=crop" 
            alt="Eco Friendly Background" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/80" /> {/* Heavy green overlay */}
        </div>
        
        <div className="relative container px-6 text-center z-10">
           {/* Logo-like element inferred from theme */}
           <div className="mx-auto mb-8 w-16 h-16 border-2 border-primary rounded-tr-3xl rounded-bl-3xl flex items-center justify-center text-primary">
              <Leaf className="w-8 h-8" />
           </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
            About Us
            <span className="block w-24 h-1 bg-primary mx-auto mt-4"></span>
          </h1>
          
          <p className="text-primary font-medium text-lg md:text-xl italic mb-8 max-w-2xl mx-auto">
            "Transforming Cultural Evolution to Environmental Revolution"
          </p>

          <p className="text-foreground/90 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            We produce eco-friendly areca leaf products engaging marginalized communities, promoting
            sustainable alternatives to plastic and styrofoam, and contributing to environmental preservation
            while empowering local artisans with fair economic opportunities.
          </p>

          <div className="mt-12 flex gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="h-12 px-8 text-base rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">100% Natural</h3>
            <p className="text-muted-foreground">Made directly from fallen areca palm leaves. No chemicals, no additives.</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <Recycle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Biodegradable</h3>
            <p className="text-muted-foreground">Compostable and eco-friendly. Returns to the earth naturally.</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community First</h3>
            <p className="text-muted-foreground">Empowering local artisans and marginalized communities with fair trade.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Products
          </h2>
          <span className="block w-16 h-1 bg-primary mx-auto mt-4"></span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              See All Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
