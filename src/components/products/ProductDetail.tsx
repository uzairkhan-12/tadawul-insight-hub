import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProductById } from "@/data/productsData";
import { Separator } from "@/components/ui/separator";
import { Shield, Swords, BarChart3, FileText, ExternalLink, AlertTriangle, CheckCircle2, Eye } from "lucide-react";

interface ProductDetailProps {
  productId: string;
}

const finalCallIcon = (call: string) => {
  switch (call) {
    case "Not Required": return <CheckCircle2 className="w-5 h-5 text-success" />;
    case "Keep an Eye": return <Eye className="w-5 h-5 text-warning" />;
    case "Need an Action": return <AlertTriangle className="w-5 h-5 text-danger" />;
    default: return null;
  }
};

const finalCallVariant = (call: string) => {
  switch (call) {
    case "Not Required": return "success";
    case "Keep an Eye": return "warning";
    case "Need an Action": return "danger";
    default: return "outline";
  }
};

const finalCallBg = (call: string) => {
  switch (call) {
    case "Not Required": return "bg-success/5 border-success/20";
    case "Keep an Eye": return "bg-warning/5 border-warning/20";
    case "Need an Action": return "bg-danger/5 border-danger/20";
    default: return "";
  }
};

const ProductDetail = ({ productId }: ProductDetailProps) => {
  const product = getProductById(productId);
  if (!product) return <p className="text-muted-foreground">Product not found.</p>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">{product.subsidiary} • {product.relatedTeam}</p>
              <CardTitle className="text-xl mt-1">{product.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-medium text-foreground">Client:</span> {product.client}
              </p>
            </div>
            <Badge variant={finalCallVariant(product.finalCall) as any} className="text-sm px-3 py-1 shrink-0">
              {product.finalCall}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Product Description */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            Product Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.overview}</p>
          {product.keyFeatures.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Key Features & Benefits</h4>
              <ul className="space-y-1.5">
                {product.keyFeatures.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Competitors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Swords className="w-4 h-4 text-primary" />
            Key Competitors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {product.directCompetitors.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Direct Competitors</h4>
              <ul className="space-y-1.5">
                {product.directCompetitors.map((comp, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-danger mt-1.5 shrink-0" />
                    {comp}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {product.indirectCompetitors.length > 0 && (
            <>
              <Separator />
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Indirect Competitors</h4>
                <ul className="space-y-1.5">
                  {product.indirectCompetitors.map((comp, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
          {product.directCompetitors.length === 0 && product.indirectCompetitors.length === 0 && (
            <p className="text-sm text-muted-foreground">No direct or indirect competitors identified.</p>
          )}
        </CardContent>
      </Card>

      {/* Competition Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary" />
            Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Main Competition Component</h4>
            <Badge variant="glass" className="mb-2">{product.mainCompetitionComponent}</Badge>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.competitionDetails}</p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Summary</h4>
            <p className="text-sm text-muted-foreground">{product.summary}</p>
          </div>
        </CardContent>
      </Card>

      {/* Final Call */}
      <Card className={`border ${finalCallBg(product.finalCall)}`}>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Final Call
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3">
            {finalCallIcon(product.finalCall)}
            <div>
              <Badge variant={finalCallVariant(product.finalCall) as any} className="mb-2">
                {product.finalCall}
              </Badge>
              <p className="text-sm text-muted-foreground">{product.finalCallDetails}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sources */}
      {product.sources.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-primary" />
              Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {product.sources.map((source, i) => (
                <li key={i}>
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline break-all"
                  >
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductDetail;
