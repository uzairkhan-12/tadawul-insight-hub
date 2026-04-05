import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products, subsidiaries, getRagStats } from "@/data/productsData";
import SubsidiaryCard from "./SubsidiaryCard";
import ProductCard from "./ProductCard";
import { AlertTriangle, Eye, CheckCircle2, Package, Building2, Target } from "lucide-react";

interface ProductsLandingProps {
  onSelectSubsidiary: (id: string) => void;
  onSelectProduct: (id: string) => void;
}

const ProductsLanding = ({ onSelectSubsidiary, onSelectProduct }: ProductsLandingProps) => {
  const stats = getRagStats();
  const actionItems = products.filter(p => p.finalCall === "Need an Action");
  const watchItems = products.filter(p => p.finalCall === "Keep an Eye");

  return (
    <div className="space-y-8">
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
          <p>The goal is to clearly identify where STG stands today:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Where it is already competitive</li>
            <li>Where it should monitor the market</li>
            <li>And where action may be needed</li>
          </ul>
          <p className="text-foreground font-medium">
            Overall, most products are competitive or aligned with the market, with only a few areas requiring closer attention or improvement.
          </p>
        </CardContent>
      </Card>

      {/* Quick Snapshot */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Package className="w-8 h-8 mx-auto text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.total}</p>
            <p className="text-xs text-muted-foreground">Total Products</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Building2 className="w-8 h-8 mx-auto text-secondary mb-2" />
            <p className="text-2xl font-bold text-foreground">{subsidiaries.length}</p>
            <p className="text-xs text-muted-foreground">Subsidiaries</p>
          </CardContent>
        </Card>
        <Card className="border-success/30">
          <CardContent className="p-4 text-center">
            <CheckCircle2 className="w-8 h-8 mx-auto text-success mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.notRequired}</p>
            <p className="text-xs text-muted-foreground">Not Required</p>
          </CardContent>
        </Card>
        <Card className="border-warning/30">
          <CardContent className="p-4 text-center">
            <Eye className="w-8 h-8 mx-auto text-warning mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.keepAnEye}</p>
            <p className="text-xs text-muted-foreground">Keep an Eye</p>
          </CardContent>
        </Card>
      </div>

      {/* Key Opportunities */}
      <Card className="border-danger/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-danger" />
            Key Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {actionItems.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-danger mb-2 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-danger" /> Need an Action ({actionItems.length})
              </h4>
              {actionItems.map(p => (
                <div
                  key={p.id}
                  className="p-3 rounded-lg bg-danger/5 border border-danger/20 cursor-pointer hover:bg-danger/10 transition-colors"
                  onClick={() => onSelectProduct(p.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-sm text-foreground">{p.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">({p.subsidiary})</span>
                    </div>
                    <Badge variant="danger">Need an Action</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{p.finalCallDetails}</p>
                </div>
              ))}
            </div>
          )}
          <div>
            <h4 className="text-sm font-semibold text-warning mb-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-warning" /> Keep an Eye ({watchItems.length})
            </h4>
            <div className="grid gap-2">
              {watchItems.map(p => (
                <div
                  key={p.id}
                  className="p-3 rounded-lg bg-warning/5 border border-warning/20 cursor-pointer hover:bg-warning/10 transition-colors"
                  onClick={() => onSelectProduct(p.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-sm text-foreground">{p.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">({p.subsidiary})</span>
                    </div>
                    <Badge variant="warning">Keep an Eye</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{p.finalCallDetails}</p>
                </div>
              ))}
            </div>
          </div>
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
