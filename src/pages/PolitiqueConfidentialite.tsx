import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Politique de Confidentialité
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Contact : <a href="mailto:dpo@voyageur.fr" className="text-secondary hover:underline">dpo@voyageur.fr</a>
          </p>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Introduction</h2>
              <p>
                Voyageur prend la protection des données personnelles au sérieux et s'engage à gérer les données qu'elle collecte sur vous de façon transparente et loyale, en conformité avec la loi « Informatique et Liberté » du 6 janvier 1978 ainsi que du Règlement UE n°2016/679 du Parlement européen et du Conseil en application le 25 mai 2018, relatif à la protection des données personnelles (ci-après RGPD).
              </p>
              <p className="mt-4">
                Conscient de l'importance d'assurer la confidentialité des données, la société Voyageur prend des engagements forts vis-à-vis de la protection des données à caractère personnel. Nous avons à cœur de protéger et de respecter votre vie privée. Cette politique a pour objectif d'encadrer la conformité des traitements de données à caractère personnel que Voyageur met en œuvre.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Table des matières</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="#objectifs" className="text-secondary hover:underline">Quels sont les objectifs de notre Politique ?</a></li>
                <li><a href="#donnees-collectees" className="text-secondary hover:underline">Quelles sont les données collectées et pour quelles finalités ?</a></li>
                <li><a href="#partage" className="text-secondary hover:underline">Partageons-nous vos données ?</a></li>
                <li><a href="#base-juridique" className="text-secondary hover:underline">Sur quelle base juridique traitons-nous vos données ?</a></li>
                <li><a href="#consentement" className="text-secondary hover:underline">Comment est recueilli votre consentement ?</a></li>
                <li><a href="#cookies" className="text-secondary hover:underline">Quels sont les cookies utilisés ?</a></li>
                <li><a href="#droits" className="text-secondary hover:underline">Quels sont vos droits ?</a></li>
                <li><a href="#securite" className="text-secondary hover:underline">Comment garantissons-nous la sécurité de vos données ?</a></li>
                <li><a href="#transferts" className="text-secondary hover:underline">Transferts Internationaux</a></li>
                <li><a href="#conservation" className="text-secondary hover:underline">Comment sont conservées vos données ?</a></li>
                <li><a href="#mises-a-jour" className="text-secondary hover:underline">Mises à jour du Document</a></li>
              </ul>
            </section>

            <section id="objectifs">
              <h2 className="text-xl font-semibold text-foreground mb-4">Quels sont les objectifs de notre Politique ?</h2>
              <p>
                Cette politique a pour objectif de fournir une information simple, claire et complète aux personnes (ci-après « vous », « vos », « votre ») sur les traitements de données personnelles vous concernant et mis en œuvre par Voyageur en qualité de Responsable de traitement.
              </p>
              <p className="mt-4">Cette Politique couvre les Traitements réalisés dans le cadre de :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>La gestion du site internet voyageur.fr</li>
                <li>L'activité de prospection commerciale effectuée par Voyageur</li>
                <li>Le recrutement des collaborateurs de Voyageur</li>
                <li>La gestion des clients, prestataires et partenaires de Voyageur</li>
              </ul>
              <p className="mt-4">
                Pour l'ensemble de ces Traitements, Voyageur est l'entité qui détermine les moyens et les finalités et agit ainsi en qualité de Responsable de traitement au sens de la réglementation applicable en matière de Données personnelles et notamment du Règlement UE 2016/679 relatif à la protection des personnes physiques à l'égard du Traitement des Données à caractère personnel et à la libre circulation de ces Données (ci-après « RGPD »).
              </p>
            </section>

            <section id="donnees-collectees">
              <h2 className="text-xl font-semibold text-foreground mb-4">Quelles sont les données collectées et pour quelles finalités ?</h2>
              <p>
                Conformément au principe de minimisation, Voyageur s'engage à ne collecter et ne traiter que des données à caractère personnel qui sont adéquates, pertinentes et non excessives au regard des buts pour lesquelles elles sont collectées. Les données personnelles sont des données qui permettent d'identifier directement (par exemple un nom, un prénom) ou indirectement une personne physique (par exemple un identifiant, l'adresse IP).
              </p>
              <p className="mt-4">Nous sommes susceptibles de collecter les données suivantes vous concernant :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-foreground">Données d'identification :</strong> cela comprend toute information qui nous permettrait de vous identifier : nom, prénom, adresse mail, code postal, date de naissance. Ces données sont collectées à des fins de gestion de nos campagnes de marketing et de réservation de voyages.</li>
                <li><strong className="text-foreground">Données de connexion :</strong> votre adresse IP, version du navigateur internet utilisée. Ces données nous permettent d'améliorer votre expérience sur notre site.</li>
                <li><strong className="text-foreground">Données de candidature :</strong> éléments présents sur le CV, la lettre de motivation et tout autre document que vous jugez utile pour appuyer votre candidature.</li>
              </ul>
              <p className="mt-4">Les données collectées selon les finalités initialement prévues ne sont pas utilisées ultérieurement à d'autres fins.</p>
            </section>

            <section id="partage">
              <h2 className="text-xl font-semibold text-foreground mb-4">Partageons-nous vos données ?</h2>
              <p>
                Voyageur peut être amené à partager vos données personnelles avec d'autres entreprises à des fins de prospection commerciale dès lors que vous avez donné votre consentement lors de la collecte des données.
              </p>
              <p className="mt-4">
                Chaque traitement mis en place par Voyageur a des destinataires internes ayant vocation à accéder et traiter les données concernées. Ces destinataires assurent une fiabilité et confidentialité selon nos instructions.
              </p>
              <p className="mt-4">
                Voyageur pourra également être amené à communiquer à des Tiers vos Données lorsqu'une telle communication est requise par la loi, une disposition réglementaire ou une décision judiciaire, ou si cette communication est nécessaire pour assurer la protection et la défense de nos droits.
              </p>
              <p className="mt-4">
                Voyageur veille à ce que ces tiers soient situés sur l'Espace Economique Européen (« EEE »). En cas de tiers qui ne se situe pas sur l'EEE, Voyageur fera en sorte de conclure des contrats de Transfert de Données se conformant a minima aux clauses contractuelles types adoptées par la Commission européenne.
              </p>
            </section>

            <section id="base-juridique">
              <h2 className="text-xl font-semibold text-foreground mb-4">Sur quelle base juridique traitons-nous vos données ?</h2>
              <p>Voyageur ne collecte, utilise et partage vos données personnelles que conformément à ce que la règlementation permet. Nous pouvons traiter vos données soit :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-foreground">Parce que vous avez donné votre consentement.</strong> Nous utilisons vos données dès lors que vous avez autorisé le partage de vos données.</li>
                <li><strong className="text-foreground">Pour exécuter notre contrat avec vous.</strong> Voyageur est amené à traiter des données personnelles dans le cadre de la réservation de voyages et dans l'encadrement de ses relations contractuelles avec ses partenaires, prestataires, fournisseurs.</li>
                <li><strong className="text-foreground">Pour répondre à une obligation légale.</strong> Aux traitements nécessaires en matière de ressources humaines, s'ajoutent les traitements de gestion des demandes de droit conformément à la Législation applicable en matière de protection des données personnelles.</li>
                <li><strong className="text-foreground">Parce que ce traitement est dans notre intérêt légitime.</strong> Dans le cadre d'une demande de contact, Voyageur conserve vos données dans l'intérêt de la bonne gestion de votre requête.</li>
              </ul>
            </section>

            <section id="consentement">
              <h2 className="text-xl font-semibold text-foreground mb-4">Comment est recueilli votre consentement ?</h2>
              <p>
                Voyageur veille au respect de l'obtention d'un consentement valable selon les critères suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-foreground">Un consentement libre :</strong> les personnes doivent avoir un choix réel et continu. La personne peut refuser ou retirer son consentement sans préjudice.</li>
                <li><strong className="text-foreground">Un consentement spécifique :</strong> le responsable de traitement s'engage à décrire l'objectif clairement et précisément de la collecte.</li>
                <li><strong className="text-foreground">Un consentement éclairé :</strong> les personnes qui donnent leur consentement doivent avoir reçu des informations adéquates sur le traitement de leurs données.</li>
                <li><strong className="text-foreground">Un consentement univoque :</strong> la personne concernée par le traitement donne son consentement par un acte affirmatif et clair.</li>
              </ul>
              <p className="mt-4">
                La personne concernée a le droit de retirer son consentement à tout moment sur demande à l'adresse mail <a href="mailto:dpo@voyageur.fr" className="text-secondary hover:underline">dpo@voyageur.fr</a>.
              </p>
            </section>

            <section id="cookies">
              <h2 className="text-xl font-semibold text-foreground mb-4">Quels sont les cookies utilisés ?</h2>
              <p>
                Lors de la consultation de notre site internet, un cookie peut être déposé sur votre ordinateur, votre mobile, ou votre tablette.
              </p>
              <p className="mt-4 font-medium text-foreground">Qu'est-ce qu'un Cookie ?</p>
              <p className="mt-2">
                Les cookies sont des fichiers textes qui sont placés sur votre ordinateur lors de la consultation de notre site. Ils sont largement utilisés pour permettre aux sites web de fonctionner, ou de fonctionner plus efficacement, ainsi que pour fournir des informations aux propriétaires des sites web.
              </p>
              <p className="mt-4">
                Lors de votre navigation sur les pages du site internet de Voyageur, des cookies essentiels au fonctionnement du site peuvent être déposés sur votre appareil.
              </p>
            </section>

            <section id="droits">
              <h2 className="text-xl font-semibold text-foreground mb-4">Quels sont vos droits ?</h2>
              <p>
                Vos données personnelles vous appartiennent, et à ce titre, vous disposez d'un certain nombre de droits. Conformément aux lois et réglementation relatives à la protection des données personnelles en vigueur, vous disposez d'un droit :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-foreground">D'accès :</strong> vous avez le droit de savoir quelles données personnelles nous détenons à votre sujet, de les consulter et d'en obtenir une copie.</li>
                <li><strong className="text-foreground">De rectification :</strong> si vous vous apercevez d'une erreur, vous pouvez à tout moment nous demander de procéder à la rectification des informations incorrectes.</li>
                <li><strong className="text-foreground">De suppression :</strong> sous certaines conditions, vous pouvez nous demander d'effacer vos données personnelles.</li>
                <li><strong className="text-foreground">De limitation du traitement :</strong> sous certaines conditions, vous pouvez nous demander de limiter l'utilisation que nous faisons de vos données personnelles.</li>
                <li><strong className="text-foreground">À la portabilité :</strong> vous avez le droit de nous demander de vous transmettre ou de transmettre à un autre responsable de traitement les données personnelles que vous nous avez fournies dans un format structuré.</li>
                <li><strong className="text-foreground">D'opposition :</strong> dans certains cas, vous pouvez vous opposer à l'utilisation de vos données personnelles pour certains traitements.</li>
              </ul>
              <p className="mt-4">
                Nous disposons d'un délai de 30 jours pour répondre à votre demande à compter de la réception de votre demande. En cas de demande complexe, ce délai peut être étendu à 90 jours.
              </p>
              <p className="mt-4">Vous pouvez exercer vos droits en vous adressant à :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Par courrier : Voyageur - à l'attention du DPO - 123 Avenue des Voyages, 75001 Paris</li>
                <li>Par courriel : <a href="mailto:dpo@voyageur.fr" className="text-secondary hover:underline">dpo@voyageur.fr</a></li>
              </ul>
              <p className="mt-4">
                Vous disposez également du droit de saisir la Commission Nationale de l'Informatique et des Libertés (CNIL), 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07, de toute réclamation se rapportant à la manière dont Voyageur collecte et traite vos données.
              </p>
            </section>

            <section id="securite">
              <h2 className="text-xl font-semibold text-foreground mb-4">Comment garantissons-nous la sécurité de vos données ?</h2>
              <p>
                Voyageur met tout en œuvre afin d'apporter un niveau de protection optimale contre leur perte et leur altération.
              </p>
              <p className="mt-4">
                Des mesures de sécurité physiques, techniques et organisationnelles appropriées sont prévues pour garantir la confidentialité des données et notamment éviter tout accès non autorisé. L'accès aux données à caractère personnel est restreint aux seuls salariés qui ont besoin de les connaitre et qui ont été formés à l'observation en matière de confidentialité et de sécurité.
              </p>
              <p className="mt-4">
                Voyageur exige également de tous ses sous-traitants qu'ils présentent des garanties contractuelles et techniques appropriées pour assurer la sécurité et la confidentialité des données personnelles.
              </p>
            </section>

            <section id="transferts">
              <h2 className="text-xl font-semibold text-foreground mb-4">Transferts Internationaux</h2>
              <p>
                Les données à caractère personnel collectées par Voyageur ne font pas l'objet de transferts vers des pays situés hors de l'Union Européenne sans garanties appropriées.
              </p>
            </section>

            <section id="conservation">
              <h2 className="text-xl font-semibold text-foreground mb-4">Comment sont conservées vos données ?</h2>
              <p>
                Vos données personnelles sont conservées le temps nécessaire à l'accomplissement de la finalité pour laquelle elles ont été collectées ou conformément aux exigences légales.
              </p>
              <p className="mt-4">La durée de conservation varie selon plusieurs facteurs et notamment :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Le temps nécessaire pour répondre à vos demandes, questions, réclamations</li>
                <li>Le temps de la gestion des activités commerciales de Voyageur à savoir trois (3) ans à compter de votre dernière action</li>
                <li>Le temps de la gestion des exercices de vos droits pendant une durée de six (6) ans</li>
                <li>Le temps de l'analyse de votre candidature et au plus deux (2) ans à compter de sa réception</li>
                <li>13 mois pour les cookies fonctionnels déposés sur votre ordinateur</li>
              </ul>
              <p className="mt-4">
                Au-delà de la durée prévue, vos données personnelles seront définitivement supprimées ou anonymisées à des fins d'études statistiques.
              </p>
            </section>

            <section id="mises-a-jour">
              <h2 className="text-xl font-semibold text-foreground mb-4">Mises à jour du Document</h2>
              <p>
                Ce document est susceptible d'être mis à jour régulièrement afin de tenir compte des évolutions dans le contenu des services qui vous sont proposés. Nous vous recommandons de régulièrement consulter cette page afin de vous tenir informés des conditions dans lesquelles nous traitons vos données personnelles.
              </p>
              <p className="mt-4 text-sm italic">
                Mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;