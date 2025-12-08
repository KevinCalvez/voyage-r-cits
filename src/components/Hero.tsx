import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-in">
            <MapPin className="h-4 w-4" />
            Explorez le monde avec nous
          </span>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in [animation-delay:0.2s] opacity-0">
            Découvrez des destinations{" "}
            <span className="text-secondary">extraordinaires</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s] opacity-0">
            Des voyages sur mesure pour des expériences inoubliables. Laissez-nous
            vous guider vers les plus beaux endroits de la planète.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.6s] opacity-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nos offres
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;