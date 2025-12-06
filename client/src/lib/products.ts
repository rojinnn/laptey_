export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lumina Horizon",
    price: 299,
    description: "The ultimate minimalist smart lamp. Adjusts to your circadian rhythm.",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473888900-52e1adad5474?q=80&w=1000&auto=format&fit=crop",
    features: ["Auto-dimming", "App control", "Warm/Cool tones"]
  },
  {
    id: "2",
    name: "Echo Bass Pro",
    price: 199,
    description: "High-fidelity wireless headphones with active noise cancellation.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    features: ["40h Battery", "ANC", "Spatial Audio"]
  },
  {
    id: "3",
    name: "Nomad Totepack",
    price: 129,
    description: "Versatile carry-all for the modern creative. Waterproof canvas.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop",
    features: ["Waterproof", "Laptop sleeve", "Convertible"]
  },
  {
    id: "4",
    name: "Apex Mechanical",
    price: 149,
    description: "Compact mechanical keyboard with satisfying tactile switches.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91a91e?q=80&w=1000&auto=format&fit=crop",
    features: ["Hot-swappable", "RGB Backlight", "Wireless"]
  },
  {
    id: "5",
    name: "Ceramic Pour-Over",
    price: 45,
    description: "Handcrafted ceramic coffee dripper for the perfect brew.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1521424159246-e4a66f267e4b?q=80&w=1000&auto=format&fit=crop",
    features: ["Handmade", "Heat retaining", "Minimalist"]
  },
  {
    id: "6",
    name: "Analog Watch X",
    price: 249,
    description: "Timeless design meets modern durability. Sapphire crystal glass.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
    features: ["Sapphire Glass", "Swiss Movement", "Leather Strap"]
  }
];
