import { Calendar, ArrowRight, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 astuces pour voyager léger",
    excerpt:
      "Découvrez nos meilleurs conseils pour préparer votre valise et voyager sans stress avec le minimum d'affaires.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    author: "Marie Dupont",
    date: "15 Décembre 2024",
    category: "Conseils",
  },
  {
    id: 2,
    title: "Les plus belles plages cachées d'Europe",
    excerpt:
      "Échappez aux foules et découvrez ces joyaux méditerranéens préservés du tourisme de masse.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    author: "Pierre Martin",
    date: "10 Décembre 2024",
    category: "Destinations",
  },
  {
    id: 3,
    title: "Cuisine locale : les incontournables du Japon",
    excerpt:
      "Du ramen au sushi en passant par le tempura, plongez dans la richesse gastronomique nippone.",
    image:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=800&auto=format&fit=crop",
    author: "Sophie Chen",
    date: "5 Décembre 2024",
    category: "Gastronomie",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Notre blog
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Inspirations & Conseils
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Récits de voyage, astuces pratiques et découvertes culturelles pour
              préparer votre prochaine aventure.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-6 md:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Lire la suite
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;