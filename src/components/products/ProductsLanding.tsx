import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products, subsidiaries } from "@/data/productsData";
import SubsidiaryCard from "./SubsidiaryCard";
import ProductCard from "./ProductCard";
import { Target } from "lucide-react";
import stgLogo from "@/assets/stg-logo.png.asset.json";

interface ProductsLandingProps {
  onSelectSubsidiary: (id: string) => void;
  onSelectProduct: (id: string) => void;
}

const ProductsLanding = ({ onSelectSubsidiary, onSelectProduct }: ProductsLandingProps) => {
  return (
    <div className="space-y-8">
      {/* Title + Logo */}
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          Non-Trading Competitive Landscape
        </h1>
        <img
          src={stgLogo.url}
          alt="Saudi Tadawul Group"
          className="h-14 md:h-16 w-auto object-contain"
        />
      </div>

      {/* Context & Objectives */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Context, Objectives & Scope
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            This dashboard provides a structured benchmarking assessment of key non-trading products across Saudi Tadawul Group (STG) subsidiaries, including Saudi Exchange, Edaa, and Wamid. It compares each product against relevant local and global competitors to understand how they compete in the market—whether through licensing models, data capabilities, platform access, or distribution capabilities.
          </p>
          <p className="text-foreground font-medium">
            The next step is to carry out practical workshops with each subsidiary team for their input and insights.
          </p>
        </CardContent>
      </Card>

      {/* Subsidiaries */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Subsidiaries</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {subsidiaries.map(sub => (
            <SubsidiaryCard key={sub.id} subsidiary={sub} onClick={onSelectSubsidiary} />
          ))}
        </div>
      </div>

      {/* All Products Grid */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">All Products ({products.length})</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onClick={onSelectProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsLanding;
