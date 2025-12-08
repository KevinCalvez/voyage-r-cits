import { MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonésie",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    price: "1 299€",
    rating: 4.9,
    description: "Plages paradisiaques et temples ancestraux",
  },
  {
    id: 2,
    name: "Santorini, Grèce",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop",
    price: "899€",
    rating: 4.8,
    description: "Villages blancs et couchers de soleil magiques",
  },
  {
    id: 3,
    name: "Tokyo, Japon",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
    price: "1 599€",
    rating: 4.9,
    description: "Tradition et modernité en harmonie",
  },
  {
    id: 4,
    name: "Marrakech, Maroc",
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800&auto=format&fit=crop",
    price: "499€",
    rating: 4.7,
    description: "Souks colorés et palais majestueux",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nos destinations
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Voyages populaires
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos destinations les plus prisées et laissez-vous inspirer
            pour votre prochaine aventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={destination.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3 text-secondary fill-secondary" />
                  <span className="text-xs font-medium text-foreground">
                    {destination.rating}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-3 w-3" />
                  <span>{destination.name}</span>
                </div>
                <p className="text-foreground font-medium mb-2">
                  {destination.description}
                </p>
                <p className="text-primary font-display text-xl font-semibold">
                  à partir de {destination.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;