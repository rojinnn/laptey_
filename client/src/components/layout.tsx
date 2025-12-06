import React from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { CartDrawer } from "./cart-drawer";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="font-heading text-xl font-bold tracking-tighter">
              LUMINA.
            </Link>
            <nav className="hidden md:flex items-center gap-6 ml-6 text-sm font-medium text-muted-foreground">
              <Link href="/products" className={location === '/products' ? 'text-primary' : 'hover:text-primary transition-colors'}>
                Shop All
              </Link>
              <Link href="/products?category=lighting" className="hover:text-primary transition-colors">
                Lighting
              </Link>
              <Link href="/products?category=audio" className="hover:text-primary transition-colors">
                Audio
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
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

      <main className="flex-1 w-full max-w-7xl mx-auto">
        {children}
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <Link href="/products">All Products</Link>
              <Link href="/products?new">New Arrivals</Link>
              <Link href="/products?sale">Sale</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <a href="#">FAQ</a>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="font-bold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">Join our newsletter for exclusive drops.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="container px-4 mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          © 2024 Lumina Store. All rights reserved.
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}
