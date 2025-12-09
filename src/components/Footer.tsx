import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-secondary" />
              <span className="font-display text-xl font-semibold">Voyageur</span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour des voyages exceptionnels depuis
              2010. Découvrez le monde avec nous.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-3">
              {["Accueil", "Destinations", "Blog", "À propos", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Top destinations
            </h3>
            <ul className="space-y-3">
              {["Bali", "Santorini", "Tokyo", "Marrakech", "Paris"].map(
                (dest) => (
                  <li key={dest}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    >
                      {dest}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Avenue des Voyages
                  <br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a
                  href="tel:+33123456789"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a
                  href="mailto:contact@voyageur.fr"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  contact@voyageur.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Voyageur. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link 
              to="/mentions-legales" 
              className="text-primary-foreground/50 hover:text-secondary transition-colors text-sm"
            >
              Mentions légales
            </Link>
            <Link 
              to="/politique-confidentialite" 
              className="text-primary-foreground/50 hover:text-secondary transition-colors text-sm"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;