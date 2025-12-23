import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useDashboardFilter } from "@/contexts/DashboardFilterContext";

// Positions based on credible market data (2024):
// Sources: World Federation of Exchanges, S&P Global, ATFX market research, WIPO Global Innovation Index 2024
const allCompetitors = [
  { 
    name: "STG", x: 72, y: 62, tier: 1, region: "gcc", size: "large" as const, country: "SA", countryName: "Saudi Arabia",
    marketCap: "$2.7T", techScore: "72/100",
    marketNotes: "Largest in MENA, 463% growth over 10 years (S&P 2024)",
    techNotes: "Modernizing with Vision 2030, integrated infrastructure"
  },
  { 
    name: "ADX", x: 65, y: 48, tier: 1, region: "gcc", size: "medium" as const, country: "AE", countryName: "UAE",
    marketCap: "$800B", techScore: "65/100",
    marketNotes: "Second largest GCC exchange",
    techNotes: "Strong digital trading platform, growing derivatives"
  },
  { 
    name: "DFM", x: 55, y: 38, tier: 1, region: "gcc", size: "small" as const, country: "AE", countryName: "UAE",
    marketCap: "$200B", techScore: "55/100",
    marketNotes: "Focused on real estate and financial services",
    techNotes: "Basic digital infrastructure, developing API ecosystem"
  },
  { 
    name: "QSE", x: 52, y: 36, tier: 1, region: "gcc", size: "small" as const, country: "QA", countryName: "Qatar",
    marketCap: "$170B", techScore: "52/100",
    marketNotes: "Premium listings, sovereign wealth support",
    techNotes: "Modernizing post-FIFA 2022 infrastructure investments"
  },
  { 
    name: "Boursa Kuwait", x: 45, y: 34, tier: 1, region: "gcc", size: "small" as const, country: "KW", countryName: "Kuwait",
    marketCap: "$150B", techScore: "45/100",
    marketNotes: "Traditional market, banking sector heavy",
    techNotes: "Upgrading systems, MSCI upgrade catalyst"
  },
  { 
    name: "NYSE", x: 88, y: 85, tier: 3, region: "global", size: "large" as const, country: "US", countryName: "USA",
    marketCap: "$28T", techScore: "88/100",
    marketNotes: "World's largest by market cap (WFE 2024)",
    techNotes: "Leading trading technology, extensive API ecosystem"
  },
  { 
    name: "LSE", x: 82, y: 72, tier: 3, region: "global", size: "medium" as const, country: "GB", countryName: "UK",
    marketCap: "$3.5T", techScore: "82/100",
    marketNotes: "Europe's largest, global benchmark (ATFX 2024)",
    techNotes: "Strong data services, LSEG technology arm"
  },
  { 
    name: "SGX", x: 88, y: 46, tier: 3, region: "global", size: "medium" as const, country: "SG", countryName: "Singapore",
    marketCap: "$700B", techScore: "88/100",
    marketNotes: "Asia-Pacific hub, derivatives focus",
    techNotes: "Singapore ranked 4th Global Innovation Index (WIPO 2024)"
  },
  { 
    name: "EGX", x: 35, y: 25, tier: 2, region: "mena", size: "small" as const, country: "EG", countryName: "Egypt",
    marketCap: "$70B", techScore: "35/100",
    marketNotes: "Largest in North Africa, privatization pipeline",
    techNotes: "Legacy systems, gradual digital transformation"
  },
  { 
    name: "BIST", x: 58, y: 42, tier: 2, region: "mena", size: "medium" as const, country: "TR", countryName: "Turkey",
    marketCap: "$400B", techScore: "58/100",
    marketNotes: "Dynamic retail participation, volatility",
    techNotes: "Modern trading platform, strong local tech ecosystem"
  },
];

// Function to get flag URL from country code (SVG for crisp rendering)
const getFlagUrl = (countryCode: string) =>
  `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;

const PositioningMap = () => {
  const { regionFilter } = useDashboardFilter();

  const filteredCompetitors = allCompetitors.filter((comp) => {
    if (regionFilter === "all") return true;
    // Always show STG regardless of filter
    if (comp.name === "STG") return true;
    return comp.region === regionFilter;
  });

  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-teal" />
        <h2 className="text-lg font-semibold text-foreground">Strategic Positioning Map</h2>
        <span className="text-sm text-muted-foreground">Market Scale vs. Innovation Capability</span>
        {regionFilter !== "all" && (
          <Badge variant="secondary" className="ml-2">
            Filtered: {regionFilter.toUpperCase()}
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="glass-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Scale vs. Technology</CardTitle>
              <div className="flex gap-2">
                <Badge variant="tier1" className="text-xs">GCC</Badge>
                <Badge variant="tier2" className="text-xs">MENA</Badge>
                <Badge variant="tier3" className="text-xs">Global</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="relative w-full aspect-square bg-muted/30 rounded-lg border border-border overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="border border-border/30" />
                  ))}
                </div>
                
                {/* Axis labels */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                  Technology & Innovation →
                </div>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
                  Market Scale →
                </div>
                
                {/* Quadrant labels */}
                <div className="absolute top-3 left-3 text-xs text-muted-foreground/60">Low Scale / Low Tech</div>
                <div className="absolute top-3 right-3 text-xs text-muted-foreground/60 text-right">Low Scale / High Tech</div>
                <div className="absolute bottom-8 left-3 text-xs text-muted-foreground/60">High Scale / Low Tech</div>
                <div className="absolute bottom-8 right-3 text-xs text-muted-foreground/60 text-right">High Scale / High Tech</div>

                {/* Competitors */}
                {filteredCompetitors.map((comp) => (
                  <Tooltip key={comp.name}>
                    <TooltipTrigger asChild>
                      <div
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:z-10 hover:scale-110`}
                        style={{
                          left: `${comp.x}%`,
                          bottom: `${comp.y}%`,
                        }}
                      >
                        <div
                          className={`rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg ${
                            comp.name === "STG"
                              ? "ring-3 ring-primary ring-offset-2 ring-offset-background glow-gold"
                              : comp.tier === 1
                              ? "ring-2 ring-primary/60 ring-offset-1 ring-offset-background"
                              : comp.tier === 2
                              ? "ring-2 ring-secondary ring-offset-1 ring-offset-background"
                              : "ring-2 ring-muted-foreground/50 ring-offset-1 ring-offset-background"
                          } ${
                            comp.size === "large" ? "w-12 h-12" : comp.size === "medium" ? "w-10 h-10" : "w-8 h-8"
                          } bg-card`}
                        >
                          <img 
                            src={getFlagUrl(comp.country)} 
                            alt={comp.countryName}
                            className="w-full h-full object-contain p-1"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="max-w-xs bg-popover/95 backdrop-blur-sm border border-border p-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                          <span className="font-bold text-foreground">{comp.name}</span>
                          <span className="text-xs text-muted-foreground">({comp.countryName})</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                          <div>
                            <p className="text-muted-foreground">Market Cap</p>
                            <p className="font-semibold text-primary">{comp.marketCap}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Tech Score</p>
                            <p className="font-semibold text-secondary">{comp.techScore}</p>
                          </div>
                        </div>
                        <div className="space-y-1 pt-1 border-t border-border/50 text-xs">
                          <p className="text-muted-foreground">
                            <span className="text-primary">Scale:</span> {comp.marketNotes}
                          </p>
                          <p className="text-muted-foreground">
                            <span className="text-secondary">Tech:</span> {comp.techNotes}
                          </p>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Key Strategic Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success" />
                Structural Advantages
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Largest equity market in MENA region by market cap</li>
                <li>• Integrated infrastructure (Exchange + CCP + CSD + Tech)</li>
                <li>• Vision 2030 regulatory support and privatization pipeline</li>
                <li>• Strong sovereign and institutional investor base</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warning" />
                Pressure Points
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Retail wallet share contested by neo-invest apps</li>
                <li>• Product ecosystem (ETFs, derivatives) less developed</li>
                <li>• Global data & tech players entering market data space</li>
                <li>• Cross-border interoperability still maturing</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-info/10 border border-info/20">
              <h4 className="font-semibold text-info mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-info" />
                Strategic Opportunities
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• East-West connector for capital flows</li>
                <li>• Non-ADTV and data footprint expansion</li>
                <li>• Product diversification</li>
                <li>• MSCI/FTSE weight increases driving foreign flows</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PositioningMap;
