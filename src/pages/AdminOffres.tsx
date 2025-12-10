import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Offre,
  getOffres,
  addOffre,
  updateOffre,
  deleteOffre,
} from "@/lib/offres-storage";

const AdminOffres = () => {
  const [offres, setOffres] = useState<Offre[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    rating: 4.5,
    description: "",
  });

  useEffect(() => {
    setOffres(getOffres());
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      image: "",
      price: "",
      rating: 4.5,
      description: "",
    });
    setShowAddForm(false);
    setEditingId(null);
  };

  const handleAdd = () => {
    if (!formData.name || !formData.price) {
      toast.error("Veuillez remplir au moins le nom et le prix");
      return;
    }
    const updated = addOffre(formData);
    setOffres(updated);
    resetForm();
    toast.success("Offre ajoutée avec succès");
  };

  const handleUpdate = () => {
    if (editingId === null) return;
    const updated = updateOffre(editingId, formData);
    setOffres(updated);
    resetForm();
    toast.success("Offre modifiée avec succès");
  };

  const handleDelete = (id: number) => {
    const updated = deleteOffre(id);
    setOffres(updated);
    toast.success("Offre supprimée");
  };

  const startEdit = (offre: Offre) => {
    setEditingId(offre.id);
    setFormData({
      name: offre.name,
      image: offre.image,
      price: offre.price,
      rating: offre.rating,
      description: offre.description,
    });
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Gestion des offres
          </h1>
          <Button onClick={() => setShowAddForm(true)} disabled={showAddForm}>
            <Plus className="h-4 w-4 mr-2" />
            Ajouter une offre
          </Button>
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingId !== null) && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {editingId !== null ? "Modifier l'offre" : "Nouvelle offre"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Nom de la destination"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Input
                placeholder="URL de l'image"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
              <Input
                placeholder="Prix (ex: 899€)"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
              <Input
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="Note (0-5)"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: parseFloat(e.target.value) })
                }
              />
              <Input
                placeholder="Description courte"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <div className="flex gap-2">
                <Button onClick={editingId !== null ? handleUpdate : handleAdd}>
                  <Save className="h-4 w-4 mr-2" />
                  {editingId !== null ? "Enregistrer" : "Ajouter"}
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  <X className="h-4 w-4 mr-2" />
                  Annuler
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Offers List */}
        <div className="space-y-4">
          {offres.map((offre) => (
            <Card key={offre.id}>
              <CardContent className="flex items-center gap-4 p-4">
                <img
                  src={offre.image}
                  alt={offre.name}
                  className="w-24 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{offre.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {offre.description}
                  </p>
                  <p className="text-primary font-medium">{offre.price}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => startEdit(offre)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(offre.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {offres.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            Aucune offre pour le moment
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminOffres;
