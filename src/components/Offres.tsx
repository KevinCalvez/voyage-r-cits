import { useState, useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Offre, getOffres } from "@/lib/offres-storage";

const Offres = () => {
  const [offres, setOffres] = useState<Offre[]>([]);

  useEffect(() => {
    setOffres(getOffres());
  }, []);

  return (
    <section id="offres" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nos offres
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Offres du moment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profitez de nos meilleures offres pour des voyages inoubliables à
            prix exceptionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {offres.map((offre, index) => (
            <Card
              key={offre.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden" style={{ width: '100%', height: '200px' }}>
                <img
                  src={offre.image}
                  alt={offre.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ width: '397px', height: '200px', maxWidth: '100%' }}
                />
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3 text-secondary fill-secondary" />
                  <span className="text-xs font-medium text-foreground">
                    {offre.rating}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-3 w-3" />
                  <span>{offre.name}</span>
                </div>
                <p className="text-foreground font-medium mb-2">
                  {offre.description}
                </p>
                <p className="text-primary font-display text-xl font-semibold">
                  à partir de {offre.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offres;
