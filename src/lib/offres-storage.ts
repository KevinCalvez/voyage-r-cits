export interface Offre {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  description: string;
}

const STORAGE_KEY = "voyage-offres";

const defaultOffres: Offre[] = [
  {
    id: 1,
    name: "Bali, Indonésie",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    price: "1 299€",
    rating: 4.9,
    description: "Plages paradisiaques et temples ancestraux",
  },
  {
    id: 2,
    name: "Santorini, Grèce",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop",
    price: "899€",
    rating: 4.8,
    description: "Villages blancs et couchers de soleil magiques",
  },
  {
    id: 3,
    name: "Tokyo, Japon",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
    price: "1 599€",
    rating: 4.9,
    description: "Tradition et modernité en harmonie",
  },
  {
    id: 4,
    name: "Marrakech, Maroc",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800&auto=format&fit=crop",
    price: "499€",
    rating: 4.7,
    description: "Souks colorés et palais majestueux",
  },
];

export const getOffres = (): Offre[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return defaultOffres;
};

export const saveOffres = (offres: Offre[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(offres));
};

export const addOffre = (offre: Omit<Offre, "id">): Offre[] => {
  const offres = getOffres();
  const newId = Math.max(...offres.map((o) => o.id), 0) + 1;
  const newOffre = { ...offre, id: newId };
  const updated = [...offres, newOffre];
  saveOffres(updated);
  return updated;
};

export const updateOffre = (id: number, offre: Partial<Offre>): Offre[] => {
  const offres = getOffres();
  const updated = offres.map((o) => (o.id === id ? { ...o, ...offre } : o));
  saveOffres(updated);
  return updated;
};

export const deleteOffre = (id: number): Offre[] => {
  const offres = getOffres();
  const updated = offres.filter((o) => o.id !== id);
  saveOffres(updated);
  return updated;
};
