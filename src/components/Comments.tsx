import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const Comments = () => {
  const testimonials = [
    {
      id: 1,
      quote: "A terrific piece of praise",
      name: "Sarah M.",
      description: "Verified Buyer",
    },
    {
      id: 2,
      quote: "A fantastic bit of feedback",
      name: "Emma L.",
      description: "Happy Customer",
    },
    {
      id: 3,
      quote: "A genuinely glowing review",
      name: "Lisa K.",
      description: "Regular Customer",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 animate-fade-in">Comments</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-border/50 hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg font-medium mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
