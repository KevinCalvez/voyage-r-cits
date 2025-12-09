import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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