import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Subsidiary } from "@/data/productsData";
import { getProductsBySubsidiary } from "@/data/productsData";
import { ChevronRight } from "lucide-react";
import logoSaudiExchange from "@/assets/logo-saudi-exchange.png";
import logoEdaa from "@/assets/logo-edaa.png";
import logoWamid from "@/assets/logo-wamid.png";

const subsidiaryLogos: Record<string, string> = {
  "saudi-exchange": logoSaudiExchange,
  "edaa": logoEdaa,
  "wamid": logoWamid,
};

interface SubsidiaryCardProps {
  subsidiary: Subsidiary;
  onClick: (id: string) => void;
}

const SubsidiaryCard = ({ subsidiary, onClick }: SubsidiaryCardProps) => {
  const products = getProductsBySubsidiary(subsidiary.name);
  const needAction = products.filter(p => p.finalCall === "Immediate Opportunity").length;
  const keepAnEye = products.filter(p => p.finalCall === "Close Monitoring").length;
  const logo = subsidiaryLogos[subsidiary.id];

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-all hover:border-primary/30 group"
      onClick={() => onClick(subsidiary.id)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-background border border-border/50 flex items-center justify-center shrink-0 overflow-hidden p-1">
            {logo ? (
              <img src={logo} alt={subsidiary.name} className="w-full h-full object-contain" loading="lazy" />
            ) : (
              <span className="text-xs font-bold text-muted-foreground">{subsidiary.name[0]}</span>
            )}
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
                <Badge variant="warning" className="text-xs">{keepAnEye} Close Monitoring</Badge>
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
