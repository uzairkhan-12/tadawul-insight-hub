import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Subsidiary } from "@/data/productsData";
import { getProductsBySubsidiary } from "@/data/productsData";
import { Building2, ChevronRight } from "lucide-react";

interface SubsidiaryCardProps {
  subsidiary: Subsidiary;
  onClick: (id: string) => void;
}

const SubsidiaryCard = ({ subsidiary, onClick }: SubsidiaryCardProps) => {
  const products = getProductsBySubsidiary(subsidiary.name);
  const needAction = products.filter(p => p.finalCall === "Need an Action").length;
  const keepAnEye = products.filter(p => p.finalCall === "Keep an Eye").length;

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-all hover:border-primary/30 group"
      onClick={() => onClick(subsidiary.id)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">{subsidiary.name}</h3>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{subsidiary.description}</p>
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <Badge variant="glass" className="text-xs">{subsidiary.productCount} Products</Badge>
              {needAction > 0 && (
                <Badge variant="danger" className="text-xs">{needAction} Need Action</Badge>
              )}
              {keepAnEye > 0 && (
                <Badge variant="warning" className="text-xs">{keepAnEye} Keep an Eye</Badge>
              )}
            </div>
            <div className="flex gap-1 mt-2 flex-wrap">
              {subsidiary.teams.map(team => (
                <span key={team} className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded">
                  {team}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubsidiaryCard;
