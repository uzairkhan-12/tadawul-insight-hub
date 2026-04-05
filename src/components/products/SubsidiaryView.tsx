import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSubsidiaryById, getProductsBySubsidiary } from "@/data/productsData";
import ProductCard from "./ProductCard";
import { Users } from "lucide-react";
import logoSaudiExchange from "@/assets/logo-saudi-exchange.png";
import logoEdaa from "@/assets/logo-edaa.png";
import logoWamid from "@/assets/logo-wamid.png";

const subsidiaryLogos: Record<string, string> = {
  "saudi-exchange": logoSaudiExchange,
  "edaa": logoEdaa,
  "wamid": logoWamid,
};

interface SubsidiaryViewProps {
  subsidiaryId: string;
  onSelectProduct: (id: string) => void;
}

const SubsidiaryView = ({ subsidiaryId, onSelectProduct }: SubsidiaryViewProps) => {
  const subsidiary = getSubsidiaryById(subsidiaryId);
  if (!subsidiary) return <p className="text-muted-foreground">Subsidiary not found.</p>;

  const products = getProductsBySubsidiary(subsidiary.name);
  const notRequired = products.filter(p => p.finalCall === "Not Required").length;
  const keepAnEye = products.filter(p => p.finalCall === "Keep an Eye").length;
  const needAction = products.filter(p => p.finalCall === "Need an Action").length;

  return (
    <div className="space-y-6">
      {/* Subsidiary Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-background border border-border/50 flex items-center justify-center overflow-hidden p-1">
              {subsidiaryLogos[subsidiaryId] ? (
                <img src={subsidiaryLogos[subsidiaryId]} alt={subsidiary.name} className="w-full h-full object-contain" />
              ) : (
                <span className="text-lg font-bold text-muted-foreground">{subsidiary.name[0]}</span>
              )}
            </div>
            <div>
              <CardTitle className="text-xl">{subsidiary.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{subsidiary.description}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Teams:</span>
              {subsidiary.teams.map(team => (
                <Badge key={team} variant="glass" className="text-xs">{team}</Badge>
              ))}
            </div>
            <div className="flex items-center gap-2 ml-auto">
              {notRequired > 0 && <Badge variant="success">{notRequired} Not Required</Badge>}
              {keepAnEye > 0 && <Badge variant="warning">{keepAnEye} Keep an Eye</Badge>}
              {needAction > 0 && <Badge variant="danger">{needAction} Need Action</Badge>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product List */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Products ({products.length})
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onClick={onSelectProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubsidiaryView;
