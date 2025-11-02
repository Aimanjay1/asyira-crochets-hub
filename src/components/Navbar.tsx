import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Navbar = ({ onNavigate, currentSection }: NavbarProps) => {
  const navItems = [
    { id: "home", label: "Best Sellers" },
    { id: "explore", label: "Explore More!" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentSection === item.id
                  ? "text-primary"
                  : "text-foreground/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
