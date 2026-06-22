import React from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { CartDrawer } from "./cart-drawer";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      {/* Top contact bar */}
      <div className="bg-accent text-accent-foreground text-xs md:text-sm py-2 px-4">
        <div className="container flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <a href="tel:+358445357554" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+358 44 535 7554</span>
            </a>
            <a href="mailto:info@laptebota.fi" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">info@laptebota.fi</span>
            </a>
          </div>
          <a
            href="https://www.instagram.com/lapteybota"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Instagram className="h-3 w-3" />
            <span className="hidden sm:inline">@lapteybota</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border/20 bg-background/95 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>

            <Link href="/" className="flex items-center gap-3">
              <img
                src="https://lapteybota.com/laptey.png"
                alt="Laptebota Logo"
                className="h-12 w-auto"
              />
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
            <Link href="/contact">
              <a className={`hover:text-primary transition-colors pb-1 border-b-2 ${location === '/contact' ? 'border-primary text-primary' : 'border-transparent text-foreground'}`}>
                Contact
              </a>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground hover:bg-white/10 hover:text-primary"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
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
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://lapteybota.com/laptey.png"
                alt="Laptebota Logo"
                className="h-10 w-auto"
              />
              <span className="font-heading font-bold text-lg text-primary">Laptebota</span>
            </div>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Sustainable, eco-friendly alternatives to plastic. Made from nature, for nature.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Quick Links</h3>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <Link href="/products" className="hover:text-foreground transition-colors">Shop All</Link>
              <Link href="/#about" className="hover:text-foreground transition-colors">Our Story</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Contact</h3>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <a href="tel:+358445357554" className="hover:text-foreground transition-colors">+358 44 535 7554</a>
              <a href="mailto:info@laptebota.fi" className="hover:text-foreground transition-colors">info@laptebota.fi</a>
              <a href="https://www.instagram.com/lapteybota" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="container px-6 mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Laptebota. All Rights Reserved.</p>
          <p className="mt-1">
            Powered by{" "}
            <a href="https://finnep.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Finnep
            </a>
          </p>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}
