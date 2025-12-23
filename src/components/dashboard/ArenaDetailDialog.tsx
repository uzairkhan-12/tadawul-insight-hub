import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Target, Shield, Zap, Users } from "lucide-react";

interface ArenaMetric {
  name: string;
  score: number;
  status: string;
  trend?: "up" | "down" | "stable";
  details?: string;
}

interface ArenaData {
  id: number;
  name: string;
  description: string;
  position: string;
  threat: string;
  metrics: ArenaMetric[];
}

interface ArenaDetailDialogProps {
  arena: ArenaData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const competitorInsights: Record<number, { competitors: { name: string; position: string; threat: string }[]; opportunities: string[]; risks: string[] }> = {
  1: {
    competitors: [
      { name: "ADX", position: "Growing challenger", threat: "Medium" },
      { name: "DFM", position: "Niche player", threat: "Low" },
      { name: "NYSE/LSE", position: "Global benchmarks", threat: "Low" },
    ],
    opportunities: [
      "Leverage Vision 2030 privatization pipeline for exclusive listings",
      "Develop sukuk and Islamic finance listing capabilities",
      "Attract international dual-listings through regulatory partnerships",
    ],
    risks: [
      "Regional exchanges competing for same GCC mega-IPOs",
      "Global exchanges offering direct access to KSA investors",
      "Regulatory fragmentation across GCC markets",
    ],
  },
  2: {
    competitors: [
      { name: "LCH/Eurex", position: "Global CCP leaders", threat: "Medium" },
      { name: "ADX/DFM", position: "Regional peers", threat: "Low" },
    ],
    opportunities: [
      "Expand cross-border clearing partnerships",
      "Develop OTC derivatives clearing capabilities",
      "Offer collateral optimization services",
    ],
    risks: [
      "Global CCPs entering regional markets",
      "Regulatory pressure for interoperability",
      "Technology obsolescence risk",
    ],
  },
  3: {
    competitors: [
      { name: "Bloomberg/Refinitiv", position: "Data giants", threat: "High" },
      { name: "ICE/Nasdaq", position: "Tech-enabled exchanges", threat: "High" },
    ],
    opportunities: [
      "Develop proprietary indices for regional investors",
      "Partner with fintechs for data distribution",
      "Build API marketplace for market data",
    ],
    risks: [
      "Global data vendors bypassing local exchanges",
      "Cloud providers enabling direct data access",
      "Commoditization of basic market data",
    ],
  },
  4: {
    competitors: [
      { name: "BlackRock/Vanguard", position: "ETF leaders", threat: "Medium" },
      { name: "Regional asset managers", position: "Emerging", threat: "Low" },
    ],
    opportunities: [
      "Launch sharia-compliant ETF suite",
      "Develop Saudi equity derivatives",
      "Create structured products platform",
    ],
    risks: [
      "Global ETF providers dominating flows",
      "Slow regulatory approval for new products",
      "Limited market maker participation",
    ],
  },
  5: {
    competitors: [
      { name: "SNB Capital/Riyad Capital", position: "Incumbent brokers", threat: "Medium" },
      { name: "Robinhood/eToro models", position: "Neo-invest threat", threat: "Very High" },
      { name: "Digital banks", position: "Emerging", threat: "High" },
    ],
    opportunities: [
      "Partner with neo-platforms for distribution",
      "Develop retail engagement features",
      "Create educational content platform",
    ],
    risks: [
      "Neo-invest apps capturing retail wallet share",
      "Digital banks bundling investment products",
      "Generational shift in trading preferences",
    ],
  },
};

const ArenaDetailDialog = ({ arena, open, onOpenChange }: ArenaDetailDialogProps) => {
  if (!arena) return null;

  const insights = competitorInsights[arena.id] || { competitors: [], opportunities: [], risks: [] };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl font-semibold text-foreground flex items-center gap-3">
                {arena.name}
                <Badge variant={arena.position === "Leader" ? "success" : arena.position === "Challenger" ? "warning" : "info"}>
                  {arena.position}
                </Badge>
              </DialogTitle>
              <DialogDescription className="mt-1 text-muted-foreground">
                {arena.description}
              </DialogDescription>
            </div>
            <Badge 
              variant={arena.threat === "Very High" || arena.threat === "High" ? "danger" : arena.threat === "Medium" ? "warning" : "success"}
              className="text-sm"
            >
              {arena.threat} Threat
            </Badge>
          </div>
        </DialogHeader>

        <Tabs defaultValue="metrics" className="w-full">
          <TabsList className="glass-card mb-4 p-1">
            <TabsTrigger value="metrics" className="gap-2">
              <Target className="w-4 h-4" />
              Metrics
            </TabsTrigger>
            <TabsTrigger value="competitors" className="gap-2">
              <Users className="w-4 h-4" />
              Competitors
            </TabsTrigger>
            <TabsTrigger value="strategy" className="gap-2">
              <Zap className="w-4 h-4" />
              Strategy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="metrics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {arena.metrics.map((metric) => (
                <Card key={metric.name} className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-foreground">{metric.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold font-mono text-foreground">{metric.score}</span>
                        {metric.score >= 80 ? (
                          <TrendingUp className="w-4 h-4 text-success" />
                        ) : metric.score < 60 ? (
                          <TrendingDown className="w-4 h-4 text-danger" />
                        ) : null}
                      </div>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      Status: <span className="capitalize">{metric.status}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <Card className="glass-card">
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Key Competitors in this Arena
                </h4>
                <div className="space-y-3">
                  {insights.competitors.map((comp) => (
                    <div key={comp.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div>
                        <span className="font-medium text-foreground">{comp.name}</span>
                        <p className="text-sm text-muted-foreground">{comp.position}</p>
                      </div>
                      <Badge variant={comp.threat === "Very High" || comp.threat === "High" ? "danger" : comp.threat === "Medium" ? "warning" : "success"}>
                        {comp.threat}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="glass-card border-success/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Opportunities
                  </h4>
                  <ul className="space-y-2">
                    {insights.opportunities.map((opp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-success">•</span>
                        {opp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-danger/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-danger mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Risks
                  </h4>
                  <ul className="space-y-2">
                    {insights.risks.map((risk, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-danger">•</span>
                        {risk}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ArenaDetailDialog;
