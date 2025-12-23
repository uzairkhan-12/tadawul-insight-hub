import { Landmark, Cog, Wifi, PieChart, Smartphone, ChevronRight, CheckCircle2, AlertCircle, MinusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const arenas = [
  {
    id: 1,
    name: "Venues & Listings",
    icon: Landmark,
    description: "IPOs, secondary listings, ETFs, debt instruments, and liquidity",
    metrics: [
      { name: "IPO Pipeline", score: 85, status: "strong" },
      { name: "Liquidity Depth", score: 78, status: "strong" },
      { name: "Product Breadth", score: 65, status: "moderate" },
      { name: "Int'l Investor Access", score: 72, status: "moderate" },
    ],
    position: "Leader",
    threat: "Medium",
  },
  {
    id: 2,
    name: "Post-Trade Infrastructure",
    icon: Cog,
    description: "Clearing, settlement, custody, and risk management",
    metrics: [
      { name: "CCP Sophistication", score: 88, status: "strong" },
      { name: "Settlement Efficiency", score: 82, status: "strong" },
      { name: "Cross-border Readiness", score: 58, status: "developing" },
      { name: "Investor Services", score: 70, status: "moderate" },
    ],
    position: "Leader",
    threat: "Low",
  },
  {
    id: 3,
    name: "Data & Technology",
    icon: Wifi,
    description: "Market data, indices, APIs, co-location platforms",
    metrics: [
      { name: "Data Product Depth", score: 72, status: "moderate" },
      { name: "Connectivity Offering", score: 68, status: "moderate" },
      { name: "Tech Partnerships", score: 75, status: "moderate" },
      { name: "Platform Strategy", score: 80, status: "strong" },
    ],
    position: "Challenger",
    threat: "High",
  },
  {
    id: 4,
    name: "Product & Index Ecosystem",
    icon: PieChart,
    description: "ETFs, derivatives, structured products, index distribution",
    metrics: [
      { name: "ETF Range", score: 62, status: "developing" },
      { name: "Derivatives Suite", score: 55, status: "developing" },
      { name: "Index Products", score: 70, status: "moderate" },
      { name: "Structured Products", score: 48, status: "developing" },
    ],
    position: "Developing",
    threat: "High",
  },
  {
    id: 5,
    name: "Retail Distribution",
    icon: Smartphone,
    description: "Brokers, neo-platforms, digital apps controlling retail access",
    metrics: [
      { name: "Onboarding Speed", score: 75, status: "moderate" },
      { name: "Product Packaging", score: 68, status: "moderate" },
      { name: "Engagement Features", score: 60, status: "developing" },
      { name: "Regulatory Readiness", score: 85, status: "strong" },
    ],
    position: "Contested",
    threat: "Very High",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "strong":
      return <CheckCircle2 className="w-3.5 h-3.5 text-success" />;
    case "moderate":
      return <MinusCircle className="w-3.5 h-3.5 text-warning" />;
    case "developing":
      return <AlertCircle className="w-3.5 h-3.5 text-info" />;
    default:
      return null;
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return "bg-success";
  if (score >= 65) return "bg-warning";
  return "bg-info";
};

const getThreatBadge = (threat: string) => {
  switch (threat) {
    case "Low":
      return <Badge variant="success">Low Threat</Badge>;
    case "Medium":
      return <Badge variant="warning">Medium Threat</Badge>;
    case "High":
      return <Badge variant="danger">High Threat</Badge>;
    case "Very High":
      return <Badge variant="danger" className="animate-pulse">Very High Threat</Badge>;
    default:
      return null;
  }
};

const CompetitiveArenas = () => {
  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 rounded-full bg-gradient-teal" />
          <h2 className="text-lg font-semibold text-foreground">Competitive Arenas</h2>
          <span className="text-sm text-muted-foreground">5 Strategic Battlefields</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {arenas.map((arena, index) => (
          <Card 
            key={arena.id}
            className="glass-card hover:border-secondary/30 transition-all duration-300 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-secondary/20 text-secondary">
                    <arena.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {arena.name}
                    </CardTitle>
                    <Badge variant="glass" className="mt-1 text-xs">
                      {arena.position}
                    </Badge>
                  </div>
                </div>
                {getThreatBadge(arena.threat)}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{arena.description}</p>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-3">
                {arena.metrics.map((metric) => (
                  <div key={metric.name} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(metric.status)}
                        <span className="text-sm text-muted-foreground">{metric.name}</span>
                      </div>
                      <span className="text-sm font-mono font-medium text-foreground">{metric.score}</span>
                    </div>
                    <Progress 
                      value={metric.score} 
                      className="h-1.5 bg-muted"
                    />
                  </div>
                ))}
              </div>
              
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary mt-4 transition-colors group/btn">
                View detailed analysis
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveArenas;
