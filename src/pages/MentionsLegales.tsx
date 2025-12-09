import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            
            {/* Éditeur */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Éditeur du site</h2>
              <p>Le présent site est édité par :</p>
              <ul className="list-none pl-0 space-y-1 mt-2">
                <li><strong className="text-foreground">Raison sociale :</strong> Voyageur SAS</li>
                <li><strong className="text-foreground">Forme juridique :</strong> Société par Actions Simplifiée</li>
                <li><strong className="text-foreground">Capital social :</strong> 10 000 €</li>
                <li><strong className="text-foreground">Siège social :</strong> 123 Avenue des Voyages, 75001 Paris, France</li>
                <li><strong className="text-foreground">SIRET :</strong> XXX XXX XXX XXXXX</li>
                <li><strong className="text-foreground">RCS :</strong> Paris B XXX XXX XXX</li>
                <li><strong className="text-foreground">N° TVA intracommunautaire :</strong> FR XX XXX XXX XXX</li>
                <li><strong className="text-foreground">Téléphone :</strong> +33 1 23 45 67 89</li>
                <li><strong className="text-foreground">Email :</strong> contact@voyageur.fr</li>
              </ul>
              <p className="mt-4">
                <strong className="text-foreground">Directeur de la publication :</strong> [Nom du directeur]
              </p>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <ul className="list-none pl-0 space-y-1 mt-2">
                <li><strong className="text-foreground">Raison sociale :</strong> [Nom de l'hébergeur]</li>
                <li><strong className="text-foreground">Adresse :</strong> [Adresse de l'hébergeur]</li>
                <li><strong className="text-foreground">Téléphone :</strong> [Téléphone de l'hébergeur]</li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                est la propriété exclusive de Voyageur SAS ou de ses partenaires et est protégé par les lois 
                françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf 
                autorisation écrite préalable de Voyageur SAS.
              </p>
            </section>

            {/* CGV */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Conditions Générales de Vente (CGV)</h2>
              
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.1 Objet</h3>
              <p>
                Les présentes conditions générales de vente régissent les relations contractuelles entre 
                Voyageur SAS et ses clients dans le cadre de la vente de prestations de voyage.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.2 Prix</h3>
              <p>
                Les prix affichés sur le site sont indiqués en euros TTC. Voyageur SAS se réserve le droit 
                de modifier ses prix à tout moment, étant entendu que le prix applicable est celui en vigueur 
                au moment de la validation de la commande.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.3 Réservation et paiement</h3>
              <p>
                La réservation devient définitive après confirmation par Voyageur SAS et réception du paiement 
                correspondant. Un acompte de 30% est demandé à la réservation, le solde devant être réglé 
                30 jours avant le départ.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.4 Annulation</h3>
              <p>En cas d'annulation par le client, les frais suivants sont appliqués :</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Plus de 60 jours avant le départ : 10% du prix total</li>
                <li>De 60 à 30 jours : 30% du prix total</li>
                <li>De 29 à 15 jours : 50% du prix total</li>
                <li>De 14 à 7 jours : 75% du prix total</li>
                <li>Moins de 7 jours : 100% du prix total</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.5 Responsabilité</h3>
              <p>
                Voyageur SAS agit en qualité d'intermédiaire entre le client et les prestataires de services 
                (compagnies aériennes, hôtels, etc.). Sa responsabilité ne peut être engagée en cas de 
                défaillance de ces prestataires.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.6 Réclamations</h3>
              <p>
                Toute réclamation doit être adressée par écrit à Voyageur SAS dans un délai de 30 jours 
                suivant la fin du voyage.
              </p>
            </section>

            {/* Médiation */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Médiation</h2>
              <p>
                En cas de litige, le client peut recourir gratuitement au service de médiation du tourisme 
                et du voyage : MTV Médiation Tourisme Voyage - BP 80 303 - 75 823 Paris Cedex 17 - 
                www.mtv.travel
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Droit applicable</h2>
              <p>
                Les présentes mentions légales et conditions générales de vente sont soumises au droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Immatriculation */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Immatriculation tourisme</h2>
              <p>
                Voyageur SAS est immatriculée au registre des opérateurs de voyages et de séjours sous le 
                numéro IM075XXXXXX.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Garantie financière :</strong> [Nom du garant financier]<br />
                <strong className="text-foreground">Assurance RCP :</strong> [Nom de l'assureur] - Contrat n° XXXXXX
              </p>
            </section>

            <section>
              <p className="mt-8 text-sm">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
