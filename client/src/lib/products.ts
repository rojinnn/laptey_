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
    name: "Areca Palm Round Plate",
    price: 12.99,
    description: "100% natural, biodegradable round plates made from fallen areca palm leaves. Perfect for eco-friendly dining.",
    category: "Plates",
    image: "https://images.unsplash.com/photo-1627483297929-37f416fec7cd?q=80&w=1000&auto=format&fit=crop",
    features: ["100% Biodegradable", "Chemical Free", "Microwave Safe", "Compostable"]
  },
  {
    id: "2",
    name: "Square Dinner Set",
    price: 24.99,
    description: "Elegant square plates that bring a rustic charm to your dining table. Sturdy and leak-proof.",
    category: "Sets",
    image: "https://images.unsplash.com/photo-1603194539162-4b2a8c3d0e2b?q=80&w=1000&auto=format&fit=crop",
    features: ["Heat Resistant", "Durable", "Sustainable", "Handcrafted"]
  },
  {
    id: "3",
    name: "Areca Leaf Bowls",
    price: 8.50,
    description: "Deep, natural bowls perfect for soups, salads, and curries. An eco-alternative to plastic.",
    category: "Bowls",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop",
    features: ["Leak Proof", "Odorless", "Natural Texture", "Zero Waste"]
  },
  {
    id: "4",
    name: "Eco Serving Platter",
    price: 15.99,
    description: "Large serving platters for parties and gatherings. Impress your guests with sustainability.",
    category: "Platters",
    image: "https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=1000&auto=format&fit=crop",
    features: ["Extra Strong", "Large Size", "Unique Patterns", "Eco-Conscious"]
  },
  {
    id: "5",
    name: "Birchwood Cutlery Set",
    price: 6.99,
    description: "Smooth, splinter-free wooden forks, spoons, and knives to complement your eco-dinnerware.",
    category: "Cutlery",
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a3d996?q=80&w=1000&auto=format&fit=crop",
    features: ["Biodegradable", "Smooth Finish", "FSC Certified", "Compostable"]
  },
  {
    id: "6",
    name: "Palm Leaf Compartment Plate",
    price: 14.50,
    description: "Convenient plates with sections, ideal for thalis, picnics, and buffets.",
    category: "Plates",
    image: "https://images.unsplash.com/photo-1516862523118-a3724eb136d7?q=80&w=1000&auto=format&fit=crop",
    features: ["3 Compartments", "Sturdy", "Kid Friendly", "Natural"]
  }
];
