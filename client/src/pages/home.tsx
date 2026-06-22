import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { heroSlides, products } from "@/lib/products";
import { Leaf, Recycle, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="flex flex-col pb-12">
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Carousel opts={{ loop: true }} setApi={setApi} className="h-full w-full">
          <CarouselContent className="h-[85vh]">
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.src} className="h-[85vh]">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover object-top brightness-[0.7]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-black/50 border-none text-white hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="right-4 bg-black/50 border-none text-white hover:bg-primary hover:text-primary-foreground" />
        </Carousel>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/30 z-10 pointer-events-none">
          <p className="text-primary font-bold text-sm md:text-lg uppercase tracking-[0.2em] mb-6 drop-shadow-lg">
            Sustainable • Environmentally Friendly • Biodegradable
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 max-w-4xl drop-shadow-lg">
            Be part of the pack and create an eco-friendly environment
          </h1>
          <p className="text-foreground/90 max-w-xl text-base md:text-lg mb-10 drop-shadow">
            Every life deserves compassion. Your support will help us advocate for the voiceless.
          </p>
          <Link href="#about" className="pointer-events-auto">
            <Button
              size="lg"
              className="h-12 px-8 text-base rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section id="about" className="py-16 bg-secondary/30">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            About Us
          </h2>
          <span className="block w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-primary font-medium text-lg md:text-xl italic mb-6">
            "Transforming Cultural Evolution to Environmental Revolution"
          </p>
          <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
            We produce eco-friendly areca leaf products engaging marginalized communities, promoting
            sustainable alternatives to plastic and styrofoam, and contributing to environmental preservation
            while empowering local artisans with fair economic opportunities.
          </p>
        </div>
      </section>

      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">100% Natural</h3>
            <p className="text-muted-foreground">
              Made directly from fallen areca palm leaves. No chemicals, no additives.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <Recycle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Biodegradable</h3>
            <p className="text-muted-foreground">
              Compostable and eco-friendly. Returns to the earth naturally.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community First</h3>
            <p className="text-muted-foreground">
              Empowering local artisans and marginalized communities with fair trade.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Products
          </h2>
          <span className="block w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full uppercase tracking-wide font-bold"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
