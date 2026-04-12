import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/data/productsData";
import { ChevronRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

const finalCallVariant = (call: string) => {
  switch (call) {
    case "Steady Outlook": return "success";
    case "Close Monitoring": return "warning";
    case "Needs Action": return "danger";
    default: return "outline";
  }
};

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-all hover:border-primary/30 group"
      onClick={() => onClick(product.id)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-1">{product.subsidiary}</p>
            <h4 className="font-semibold text-sm text-foreground truncate">{product.name}</h4>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{product.client}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge variant={finalCallVariant(product.finalCall) as any} className="text-[10px] whitespace-nowrap">
              {product.finalCall}
            </Badge>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
