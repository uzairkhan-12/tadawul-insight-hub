import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProductById } from "@/data/productsData";
import { getProductAnalysis, type AnalysisDimension, type RagRating } from "@/data/productAnalysis";
import { competitorBrands, getCompetitorBrandKey } from "@/data/competitorBrands";
import { Separator } from "@/components/ui/separator";
import { Shield, Swords, BarChart3, FileText, ExternalLink, AlertTriangle, CheckCircle2, Eye, TrendingUp, Target, DollarSign, Lock, Users, Gauge } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ProductDetailProps {
  productId: string;
}

const finalCallIcon = (call: string) => {
  switch (call) {
    case "Steady Outlook": return <CheckCircle2 className="w-5 h-5 text-success" />;
    case "Stay Close": return <Eye className="w-5 h-5 text-warning" />;
    case "Needs Action": return <AlertTriangle className="w-5 h-5 text-danger" />;
    default: return null;
  }
};

const finalCallVariant = (call: string) => {
  switch (call) {
    case "Steady Outlook": return "success";
    case "Stay Close": return "warning";
    case "Needs Action": return "danger";
    default: return "outline";
  }
};

const finalCallBg = (call: string) => {
  switch (call) {
    case "Steady Outlook": return "bg-success/5 border-success/20";
    case "Stay Close": return "bg-warning/5 border-warning/20";
    case "Needs Action": return "bg-danger/5 border-danger/20";
    default: return "";
  }
};

const ragVariant = (rating: RagRating) => {
  switch (rating) {
    case "Green": return "success";
    case "Amber": return "warning";
    case "Red": return "danger";
  }
};

const ragLabel = (rating: RagRating) => {
  switch (rating) {
    case "Green": return "Green";
    case "Amber": return "Amber";
    case "Red": return "Red";
  }
};

const dimensionIcon = (dimension: string) => {
  if (dimension.includes("Competition")) return <Swords className="w-4 h-4" />;
  if (dimension.includes("TAM")) return <Target className="w-4 h-4" />;
  if (dimension.includes("Market Share")) return <BarChart3 className="w-4 h-4" />;
  if (dimension.includes("Trend")) return <TrendingUp className="w-4 h-4" />;
  if (dimension.includes("Barriers")) return <Lock className="w-4 h-4" />;
  if (dimension.includes("Price")) return <DollarSign className="w-4 h-4" />;
  if (dimension.includes("Positioning")) return <Gauge className="w-4 h-4" />;
  return <BarChart3 className="w-4 h-4" />;
};

const CompetitorLogo = ({ name, desc }: { name: string; desc: string }) => {
  const brandKey = getCompetitorBrandKey(desc);
  const brand = brandKey ? competitorBrands[brandKey] : null;

  if (!brand) {
    const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    return (
      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
        <span className="text-xs font-bold text-muted-foreground">{initials}</span>
      </div>
    );
  }

  if (brand.logo) {
    return (
      <div className="w-10 h-10 rounded-lg bg-background border border-border/50 flex items-center justify-center shrink-0 overflow-hidden p-1">
        <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
      style={{ backgroundColor: brand.color, color: brand.textColor }}
    >
      <span className="text-xs font-bold">{brand.shortName}</span>
    </div>
  );
};

const AnalysisDimensionRow = ({ dim }: { dim: AnalysisDimension }) => (
  <TableRow>
    <TableCell className="font-medium">
      <div className="flex items-center gap-2">
        {dimensionIcon(dim.dimension)}
        <span className="text-sm">{dim.dimension}</span>
      </div>
    </TableCell>
    <TableCell>
      <Badge variant={ragVariant(dim.rating) as any} className="text-xs">
        {ragLabel(dim.rating)}
      </Badge>
    </TableCell>
    <TableCell className="text-sm text-muted-foreground max-w-md">{dim.description}</TableCell>
    <TableCell className="text-sm text-muted-foreground max-w-xs">{dim.stgPosition || "—"}</TableCell>
  </TableRow>
);

const ProductDetail = ({ productId }: ProductDetailProps) => {
  const product = getProductById(productId);
  const analysis = getProductAnalysis(productId);
  if (!product) return <p className="text-muted-foreground">Product not found.</p>;

  const allCompetitors = [...product.directCompetitors, ...product.indirectCompetitors];

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

      {/* Competitors with Logos */}
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
              <h4 className="text-sm font-semibold text-foreground mb-3">Direct Competitors</h4>
              <div className="space-y-3">
                {product.directCompetitors.map((comp, i) => {
                  const name = comp.split(" – ")[0].split(" — ")[0].trim();
                  const detail = comp.includes(" – ") ? comp.split(" – ").slice(1).join(" – ") : 
                                 comp.includes(" — ") ? comp.split(" — ").slice(1).join(" — ") : "";
                  return (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                      <CompetitorLogo name={name} desc={comp} />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">{name}</p>
                        {detail && <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {product.indirectCompetitors.length > 0 && (
            <>
              <Separator />
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Indirect Competitors</h4>
                <div className="space-y-3">
                  {product.indirectCompetitors.map((comp, i) => {
                    const name = comp.split(" – ")[0].split(" — ")[0].trim();
                    const detail = comp.includes(" – ") ? comp.split(" – ").slice(1).join(" – ") : 
                                   comp.includes(" — ") ? comp.split(" — ").slice(1).join(" — ") : "";
                    return (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                        <CompetitorLogo name={name} desc={comp} />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground">{name}</p>
                          {detail && <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
          {allCompetitors.length === 0 && (
            <p className="text-sm text-muted-foreground">No direct or indirect competitors identified.</p>
          )}
        </CardContent>
      </Card>

      {/* Competition Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary" />
            Competition Analysis
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

      {/* Detailed Analysis (RAG per dimension) */}
      {analysis && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Gauge className="w-4 h-4 text-primary" />
                Detailed Analysis
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Overall:</span>
                <Badge variant={ragVariant(analysis.overallRag) as any} className="text-sm px-3 py-1">
                  {ragLabel(analysis.overallRag)}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Dimension</TableHead>
                    <TableHead className="w-[80px]">RAG</TableHead>
                    <TableHead>Assessment</TableHead>
                    <TableHead className="w-[200px]">STG Positioning</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnalysisDimensionRow dim={analysis.levelOfCompetition} />
                  <AnalysisDimensionRow dim={analysis.tam} />
                  <AnalysisDimensionRow dim={analysis.currentMarketShare} />
                  <AnalysisDimensionRow dim={analysis.productTrend} />
                  <AnalysisDimensionRow dim={analysis.barriersToEntry} />
                  <AnalysisDimensionRow dim={analysis.priceSensitivity} />
                  <AnalysisDimensionRow dim={analysis.positioningVsCompetitors} />
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

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
