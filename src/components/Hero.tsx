import { Button } from "./ui/button";

interface HeroProps {
  onShopClick: () => void;
}

const Hero = ({ onShopClick }: HeroProps) => {
  return (
    <section className="pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="h-full bg-background flex items-center justify-center p-12 md:p-16">
            {/* Left side can have an illustration or remain empty */}
          </div>
          <div className="bg-accent p-12 md:p-16 animate-fade-in">
            <p className="text-sm font-medium mb-4 text-muted-foreground">
              CUTIE WHALES
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
              NEW PRODUCT.
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
              NEW STYLE.
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              CHEAPER.
            </h1>
            <p className="text-lg mb-8 text-foreground/80">
              The alternative way to be more elegant.
            </p>
            <Button
              onClick={onShopClick}
              size="lg"
              className="bg-pink-medium hover:bg-pink-medium/90 text-foreground font-medium px-8"
            >
              Shop more!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
