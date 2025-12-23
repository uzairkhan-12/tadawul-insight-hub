import { Building, Globe, TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const peers = {
  tier1: {
    title: "GCC Direct Peers",
    description: "Competing for regional listings, liquidity, and products",
    items: [
      { name: "ADX", country: "UAE", marketCap: "$780B", trend: "up", strength: "Listings growth", weakness: "Tech infrastructure" },
      { name: "DFM", country: "UAE", marketCap: "$145B", trend: "up", strength: "Real estate focus", weakness: "Product diversity" },
      { name: "QSE", country: "Qatar", marketCap: "$170B", trend: "stable", strength: "Sovereign backing", weakness: "Retail access" },
      { name: "Boursa Kuwait", country: "Kuwait", marketCap: "$140B", trend: "up", strength: "Banking sector", weakness: "Innovation pace" },
      { name: "Bahrain Bourse", country: "Bahrain", marketCap: "$26B", trend: "stable", strength: "Fintech hub", weakness: "Scale" },
      { name: "MSX", country: "Oman", marketCap: "$58B", trend: "down", strength: "Energy listings", weakness: "Liquidity" },
    ],
  },
  tier2: {
    title: "MENA Comparators",
    description: "Markets undergoing reform competing for capital attention",
    items: [
      { name: "EGX", country: "Egypt", marketCap: "$45B", trend: "up", strength: "Privatization wave", weakness: "Currency volatility" },
      { name: "CSE", country: "Morocco", marketCap: "$65B", trend: "stable", strength: "Regional gateway", weakness: "Tech modernization" },
      { name: "BIST", country: "Turkey", marketCap: "$230B", trend: "down", strength: "Derivatives market", weakness: "Macro instability" },
      { name: "TSE", country: "Tunisia", marketCap: "$8B", trend: "down", strength: "Reform agenda", weakness: "Political risk" },
    ],
  },
  tier3: {
    title: "Global Benchmarks",
    description: "Reference models for diversification and global connectivity",
    items: [
      { name: "NYSE", country: "USA", marketCap: "$28T", trend: "up", strength: "Global listings", weakness: "n/a" },
      { name: "LSE", country: "UK", marketCap: "$3.8T", trend: "stable", strength: "Data & tech pivot", weakness: "Brexit impact" },
      { name: "SGX", country: "Singapore", marketCap: "$670B", trend: "up", strength: "Asia gateway", weakness: "Local liquidity" },
      { name: "HKEX", country: "Hong Kong", marketCap: "$4.2T", trend: "stable", strength: "China access", weakness: "Geopolitical risk" },
      { name: "ASX", country: "Australia", marketCap: "$1.8T", trend: "up", strength: "Tech innovation", weakness: "Time zone" },
      { name: "Deutsche Börse", country: "Germany", marketCap: "$2.1T", trend: "up", strength: "Clearing services", weakness: "Fragmentation" },
    ],
  },
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="w-4 h-4 text-success" />;
    case "down":
      return <TrendingDown className="w-4 h-4 text-danger" />;
    default:
      return <Minus className="w-4 h-4 text-muted-foreground" />;
  }
};

const PeerComparison = () => {
  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-gold" />
        <h2 className="text-lg font-semibold text-foreground">Peer Group Tiers</h2>
        <span className="text-sm text-muted-foreground">3-Tier Competitive Analysis</span>
      </div>

      <Tabs defaultValue="tier1" className="w-full">
        <TabsList className="glass-card mb-4 p-1 h-auto flex flex-wrap gap-2">
          <TabsTrigger value="tier1" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2">
            <Badge variant="tier1" className="mr-2">T1</Badge>
            GCC Direct
          </TabsTrigger>
          <TabsTrigger value="tier2" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground px-4 py-2">
            <Badge variant="tier2" className="mr-2">T2</Badge>
            MENA
          </TabsTrigger>
          <TabsTrigger value="tier3" className="data-[state=active]:bg-muted data-[state=active]:text-foreground px-4 py-2">
            <Badge variant="tier3" className="mr-2">T3</Badge>
            Global
          </TabsTrigger>
        </TabsList>

        {Object.entries(peers).map(([tier, data]) => (
          <TabsContent key={tier} value={tier} className="mt-0">
            <Card className="glass-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base font-semibold">{data.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{data.description}</p>
                  </div>
                  <Globe className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Exchange</th>
                        <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Country</th>
                        <th className="text-right py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Market Cap</th>
                        <th className="text-center py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Trend</th>
                        <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Key Strength</th>
                        <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Weakness</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.items.map((peer, index) => (
                        <tr 
                          key={peer.name}
                          className="border-b border-border/50 hover:bg-muted/30 transition-colors group cursor-pointer"
                        >
                          <td className="py-3 px-2">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {peer.name}
                              </span>
                              <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{peer.country}</td>
                          <td className="py-3 px-2 text-right font-mono text-sm text-foreground">{peer.marketCap}</td>
                          <td className="py-3 px-2 text-center">{getTrendIcon(peer.trend)}</td>
                          <td className="py-3 px-2 text-sm text-success">{peer.strength}</td>
                          <td className="py-3 px-2 text-sm text-danger">{peer.weakness}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default PeerComparison;
