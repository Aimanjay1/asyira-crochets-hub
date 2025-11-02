import { Card, CardContent } from "./ui/card";

const ExploreMore = () => {
  const items = [
    {
      id: 1,
      title: "Custom Orders",
      description: "Have a special design in mind? We can create custom crochet pieces just for you!",
    },
    {
      id: 2,
      title: "Gift Sets",
      description: "Perfect handmade gifts for your loved ones. Each piece is crafted with care.",
    },
  ];

  return (
    <section id="explore" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 animate-fade-in">Explore More!</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-accent to-pink-medium"></div>
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
