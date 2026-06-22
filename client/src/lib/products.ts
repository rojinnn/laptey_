export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  features: string[];
  size?: string;
}

export const heroSlides = [
  {
    src: "https://leafplus.com.np/static/images/slider/02.jpg",
    alt: "Eco-friendly products",
  },
  {
    src: "https://leafplus.com.np/static/images/slider/03.jpg",
    alt: "Sustainable tableware",
  },
  {
    src: "https://leafplus.com.np/static/images/slider/07.jpg",
    alt: "Biodegradable plates",
  },
  {
    src: "https://leafplus.com.np/static/images/slider/04.jpg",
    alt: "Environmental solutions",
  },
];

export const products: Product[] = [
  {
    id: "deep-circular-bowl",
    name: "Deep Circular Bowl",
    price: 9.99,
    size: "16 cm",
    description: "Versatile deep circular bowl made from fallen areca palm leaves. Ideal for soups, curries, salads, and main courses.",
    category: "Bowls",
    image: "https://leafplus.com.np/media/products/Deep_Circular_Bowl_16_Cm_2_NloiLZ5.jpg",
    features: ["100% Biodegradable", "Chemical Free", "Microwave Safe", "Compostable"],
  },
  {
    id: "deep-sauce-bowl",
    name: "Deep Sauce Bowl",
    price: 6.99,
    size: "9.5 cm",
    description: "Compact deep sauce bowl perfect for dips, chutneys, and condiments.",
    category: "Bowls",
    image: "https://leafplus.com.np/media/products/Deep_Sause_Bowl_9.5_Cm_1_YEBpg31.jpg",
    features: ["Leak Proof", "Odorless", "Natural Texture", "Zero Waste"],
  },
  {
    id: "deep-square-bowl",
    name: "Deep Square Bowl",
    price: 10.99,
    size: "17.5 cm",
    description: "Elegant square bowl with a rustic charm. Sturdy and leak-proof for everyday dining and catering.",
    category: "Bowls",
    image: "https://leafplus.com.np/media/product/main/Deep_Square_Bowl_17.5_Cm_1_KSgiLAk.jpg",
    features: ["Heat Resistant", "Durable", "Sustainable", "Handcrafted"],
  },
  {
    id: "french-fry-bowl",
    name: "French Fry Bowl",
    price: 11.99,
    size: "20 cm",
    description: "Wide bowl designed for fries, snacks, and finger foods.",
    category: "Bowls",
    image: "https://leafplus.com.np/media/product/main/French_Fry_Bowl_20_Cm_1_geG8nfL.jpg",
    features: ["Extra Strong", "Large Size", "Unique Patterns", "Eco-Conscious"],
  },
  {
    id: "heart-plate",
    name: "Heart Plate",
    price: 8.99,
    size: "16 cm",
    description: "Charming heart-shaped plate for desserts, appetizers, and special occasions.",
    category: "Plates",
    image: "https://leafplus.com.np/media/product/main/Heart_Plate_16_Cm_1_VOuVXWQ.jpg",
    features: ["Biodegradable", "Kid Friendly", "Compostable", "Natural"],
  },
  {
    id: "partition-plate",
    name: "Partition Plate",
    price: 12.99,
    size: "28 cm",
    description: "Multi-compartment plate ideal for thalis, picnics, and buffets.",
    category: "Plates",
    image: "https://leafplus.com.np/media/product/main/Partition_Plate_28_CM_1_osDatmA.jpg",
    features: ["3 Compartments", "Sturdy", "Kid Friendly", "Natural"],
  },
  {
    id: "shallow-round-plate-20",
    name: "Shallow Round Plate",
    price: 7.99,
    size: "20 cm",
    description: "Classic shallow round plate for everyday meals.",
    category: "Plates",
    image: "https://leafplus.com.np/media/product/main/Shallow_Round_Plate_20_Cm_1_1ULQTVZ.jpg",
    features: ["100% Biodegradable", "Smooth Finish", "Compostable", "Microwave Safe"],
  },
  {
    id: "shallow-round-plate-25",
    name: "Shallow Round Plate",
    price: 9.49,
    size: "25 cm",
    description: "Larger shallow round plate for generous servings.",
    category: "Plates",
    image: "https://leafplus.com.np/media/product/main/Shallow_Round_Plate_25_Cm_1_IwHjBmk.jpg",
    features: ["100% Biodegradable", "Smooth Finish", "Compostable", "Microwave Safe"],
  },
];
