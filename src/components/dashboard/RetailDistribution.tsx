import { Smartphone, Landmark, CreditCard, Building2, Users, Clock, Sparkles, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const platforms = [
  {
    category: "Other Investment Offerings",
    description: "Alternative assets competing for retail investment capital",
    icon: Building2,
    color: "secondary",
    players: [
      { name: "Real Estate Funds", type: "REITs & Property", threat: "High", rating: 4.5 },
      { name: "Cryptocurrency", type: "Digital Assets", threat: "High", rating: 4.2 },
      { name: "Gold & Commodities", type: "Physical Assets", threat: "Medium", rating: 4.0 },
      { name: "Private Equity Access", type: "Alternative Investments", threat: "Medium", rating: 3.8 },
    ],
  },
  {
    category: "Digital Native Platforms",
    description: "Saudi & GCC fintechs disrupting traditional investment access",
    icon: Landmark,
    color: "info",
    players: [
      { name: "Tarmeez", type: "KSA Investment Platform", threat: "High", rating: 4.4 },
      { name: "Lendo", type: "KSA P2P Lending", threat: "Medium", rating: 4.2 },
      { name: "Baraka", type: "UAE Neo-Invest", threat: "High", rating: 4.7 },
      { name: "Sarwa", type: "UAE Robo-Advisor", threat: "High", rating: 4.5 },
    ],
  },
  {
    category: "Global Trading Apps",
    description: "International apps targeting KSA retail investors",
    icon: Smartphone,
    color: "danger",
    players: [
      { name: "Robinhood Model Clones", type: "Commission-Free", threat: "High", rating: 4.0 },
      { name: "Webull", type: "US Platform", threat: "Medium", rating: 4.2 },
      { name: "Trading 212", type: "UK Platform", threat: "Medium", rating: 4.1 },
    ],
  },
];

const competitiveFactors = [
  { name: "Onboarding & KYC Speed", icon: Clock, stg: 75, best: 95, leader: "Baraka" },
  { name: "Funding Rails", icon: CreditCard, stg: 85, best: 90, leader: "Sarwa" },
  { name: "Product Packaging", icon: Sparkles, stg: 60, best: 85, leader: "Baraka" },
  { name: "Engagement Features", icon: Users, stg: 55, best: 90, leader: "eToro" },
  { name: "Shariah Compliance", icon: Shield, stg: 95, best: 95, leader: "STG (via partners)" },
];

const RetailDistribution = () => {
  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-teal" />
        <h2 className="text-lg font-semibold text-foreground">Retail Distribution Layer</h2>
        <span className="text-sm text-muted-foreground">Competing for Wallet Share</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
        {platforms.map((platform, index) => (
          <Card key={platform.category} className="glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-lg ${
                  platform.color === "secondary" ? "bg-secondary/20 text-secondary" :
                  platform.color === "info" ? "bg-info/20 text-info" :
                  "bg-danger/20 text-danger"
                }`}>
                  <platform.icon className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold">{platform.category}</CardTitle>
                  <p className="text-xs text-muted-foreground">{platform.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {platform.players.map((player) => (
                  <div key={player.name} className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div>
                      <p className="font-medium text-foreground text-sm">{player.name}</p>
                      <p className="text-xs text-muted-foreground">{player.type}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={player.threat === "High" ? "danger" : player.threat === "Medium" ? "warning" : "success"} className="text-xs">
                        {player.threat} Threat
                      </Badge>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < Math.floor(player.rating) ? "bg-primary" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base font-semibold">Retail Competitive Factors</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">STG Position vs. Best-in-Class</p>
            </div>
            <Badge variant="warning">Key Battleground</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {competitiveFactors.map((factor) => (
              <div key={factor.name} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <factor.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{factor.name}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-primary font-medium">STG</span>
                    <span className="font-mono">{factor.stg}%</span>
                  </div>
                  <Progress value={factor.stg} className="h-2 bg-muted" />
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-success font-medium">Best</span>
                    <span className="font-mono">{factor.best}%</span>
                  </div>
                  <Progress value={factor.best} className="h-2 bg-muted [&>div]:bg-success" />
                  <p className="text-xs text-muted-foreground mt-2">Leader: {factor.leader}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RetailDistribution;
