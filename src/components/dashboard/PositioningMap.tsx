import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDashboardFilter } from "@/contexts/DashboardFilterContext";

const allCompetitors = [
  { name: "STG", x: 85, y: 68, tier: 1, region: "gcc", size: "large" as const, country: "SA", countryName: "Saudi Arabia" },
  { name: "ADX", x: 70, y: 65, tier: 1, region: "gcc", size: "medium" as const, country: "AE", countryName: "UAE" },
  { name: "DFM", x: 55, y: 50, tier: 1, region: "gcc", size: "small" as const, country: "AE", countryName: "UAE" },
  { name: "QSE", x: 45, y: 60, tier: 1, region: "gcc", size: "small" as const, country: "QA", countryName: "Qatar" },
  { name: "Boursa Kuwait", x: 40, y: 45, tier: 1, region: "gcc", size: "small" as const, country: "KW", countryName: "Kuwait" },
  { name: "NYSE", x: 88, y: 82, tier: 3, region: "global", size: "large" as const, country: "US", countryName: "USA" },
  { name: "LSE", x: 80, y: 85, tier: 3, region: "global", size: "medium" as const, country: "GB", countryName: "UK" },
  { name: "SGX", x: 75, y: 70, tier: 3, region: "global", size: "medium" as const, country: "SG", countryName: "Singapore" },
  { name: "EGX", x: 30, y: 35, tier: 2, region: "mena", size: "small" as const, country: "EG", countryName: "Egypt" },
  { name: "BIST", x: 50, y: 40, tier: 2, region: "mena", size: "medium" as const, country: "TR", countryName: "Turkey" },
];

// Function to get flag URL from country code (using flagcdn for higher resolution)
const getFlagUrl = (countryCode: string) => 
  `https://flagcdn.com/w160/${countryCode.toLowerCase()}.png`;

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
                <div
                  key={comp.name}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 hover:z-10 hover:scale-110`}
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
                        ? "ring-2 ring-success ring-offset-1 ring-offset-background"
                        : "ring-2 ring-info ring-offset-1 ring-offset-background"
                    } ${
                      comp.size === "large" ? "w-12 h-12" : comp.size === "medium" ? "w-10 h-10" : "w-8 h-8"
                    } bg-card`}
                  >
                    <img 
                      src={getFlagUrl(comp.country)} 
                      alt={comp.countryName}
                      className="w-[150%] h-[150%] object-cover"
                    />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded whitespace-nowrap z-20 shadow-lg">
                    {comp.name}
                  </div>
                </div>
              ))}
            </div>
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
