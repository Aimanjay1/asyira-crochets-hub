import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import whaleKeychain from "@/assets/whale-keychain.jpg";
import bunnyCalculator from "@/assets/bunny-calculator.jpg";

const BestSellers = () => {
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = [
    { id: "general", label: "🌸 General" },
    { id: "whales", label: "🐋 Whales" },
    { id: "case", label: "📱 Case" },
  ];

  const products = [
    {
      id: 1,
      image: whaleKeychain,
      title: "Mini Whale Keychain",
      description: "Cute design, can attach at anywhere.",
      price: "RM X.XX",
      category: "whales",
    },
    {
      id: 2,
      image: bunnyCalculator,
      title: "Bunny Calculator Case",
      description: "Suitable for any calculator size. Flexible an easy to be carried.",
      price: "RM X.XX",
      category: "case",
    },
  ];

  const filteredProducts =
    activeCategory === "general"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="best-sellers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in">Best Sellers</h2>
        
        <div className="flex gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-accent text-foreground hover:bg-accent/90"
                  : "border-border hover:bg-accent/50"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
