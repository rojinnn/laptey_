import React from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, Search, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { CartDrawer } from "./cart-drawer";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-border/20 bg-background/95 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
            
            <Link href="/" className="flex items-center gap-2">
               {/* Logo Icon */}
               <div className="w-10 h-10 border-2 border-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center text-primary">
                  <Leaf className="w-5 h-5" />
               </div>
               <div className="flex flex-col">
                 <span className="font-heading text-lg font-bold tracking-wider uppercase leading-none text-primary">Laptey</span>
                 <span className="font-heading text-sm font-medium tracking-widest uppercase leading-none text-foreground/80">Bota</span>
               </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
             <Link href="/">
               <a className={`hover:text-primary transition-colors pb-1 border-b-2 ${location === '/' ? 'border-primary text-primary' : 'border-transparent text-foreground'}`}>
                 About Us
               </a>
             </Link>
             <Link href="/products">
               <a className={`hover:text-primary transition-colors pb-1 border-b-2 ${location.startsWith('/products') ? 'border-primary text-primary' : 'border-transparent text-foreground'}`}>
                 Products
               </a>
             </Link>
             <a href="#" className="hover:text-primary transition-colors pb-1 border-b-2 border-transparent text-foreground">
               Contact
             </a>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/10 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-foreground hover:bg-white/10 hover:text-primary"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full mx-auto">
        {children}
      </main>

      <footer className="border-t border-border/20 py-12 bg-black/20">
        <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 border border-primary rounded-tr-lg rounded-bl-lg flex items-center justify-center text-primary">
                  <Leaf className="w-4 h-4" />
               </div>
               <span className="font-heading font-bold text-lg text-primary">Laptey Bota</span>
            </div>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Sustainable, eco-friendly alternatives to plastic. Made from nature, for nature.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-primary">Quick Links</h3>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <Link href="/products" className="hover:text-foreground transition-colors">Shop All</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Our Story</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-primary">Legal</h3>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
        <div className="container px-6 mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
          © 2024 Laptey Bota. All rights reserved.
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}
