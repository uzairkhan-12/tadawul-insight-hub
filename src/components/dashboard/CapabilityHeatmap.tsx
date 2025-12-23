import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useDashboardFilter } from "@/contexts/DashboardFilterContext";

const capabilities = [
  { short: "IPO", full: "IPO Pipeline" },
  { short: "LIQ", full: "Liquidity" },
  { short: "ETF", full: "ETFs" },
  { short: "DER", full: "Derivatives" },
  { short: "CCP", full: "CCP Services" },
  { short: "SET", full: "Settlement" },
  { short: "DATA", full: "Market Data" },
  { short: "APP", full: "Retail Apps" },
  { short: "INT'L", full: "Int'l Access" },
];

const allCompetitors = [
  { name: "STG", region: "gcc", scores: [9, 6, 6, 5, 6, 8, 7, 7, 7] },
  { name: "ADX", region: "gcc", scores: [7, 7, 5, 4, 6, 7, 6, 6, 7] },
  { name: "DFM", region: "gcc", scores: [5, 5, 4, 3, 5, 6, 5, 5, 6] },
  { name: "QSE", region: "gcc", scores: [4, 5, 3, 3, 5, 6, 4, 4, 5] },
  { name: "EGX", region: "mena", scores: [4, 4, 2, 2, 4, 5, 3, 4, 4] },
  { name: "BIST", region: "mena", scores: [5, 6, 4, 6, 5, 6, 5, 5, 5] },
  { name: "NYSE", region: "global", scores: [8, 10, 9, 10, 9, 9, 10, 7, 10] },
  { name: "LSE", region: "global", scores: [3, 8, 9, 9, 9, 9, 9, 7, 9] },
  { name: "SGX", region: "global", scores: [7, 7, 8, 9, 8, 8, 8, 6, 8] },
];

const getHeatColor = (score: number) => {
  if (score >= 9) return "from-success to-success/80";
  if (score >= 7) return "from-success/70 to-success/50";
  if (score >= 5) return "from-warning to-warning/80";
  if (score >= 3) return "from-danger/70 to-danger/50";
  return "from-danger to-danger/80";
};

const getGlowColor = (score: number) => {
  if (score >= 9) return "shadow-[0_0_12px_hsla(142,76%,36%,0.4)]";
  if (score >= 7) return "shadow-[0_0_8px_hsla(142,76%,36%,0.25)]";
  if (score >= 5) return "shadow-[0_0_8px_hsla(38,92%,50%,0.25)]";
  return "shadow-[0_0_8px_hsla(0,84%,60%,0.25)]";
};

const CapabilityHeatmap = () => {
  const { regionFilter } = useDashboardFilter();

  const filteredCompetitors = allCompetitors.filter((comp) => {
    if (regionFilter === "all") return true;
    if (comp.name === "STG") return true;
    return comp.region === regionFilter;
  });

  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-gold" />
        <h2 className="text-lg font-semibold text-foreground">Capability Heatmap</h2>
        <span className="text-sm text-muted-foreground">Comparative Strength Analysis</span>
        {regionFilter !== "all" && (
          <Badge variant="secondary" className="ml-2">
            Filtered: {regionFilter.toUpperCase()}
          </Badge>
        )}
      </div>

      <Card className="glass-card overflow-hidden border-border/30">
        <CardHeader className="pb-4 border-b border-border/30">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <CardTitle className="text-base font-semibold">Cross-Peer Capability Comparison</CardTitle>
            <div className="flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-success to-success/80 shadow-[0_0_8px_hsla(142,76%,36%,0.3)]" />
                <span className="text-muted-foreground font-medium">Strong (8-10)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-warning to-warning/80 shadow-[0_0_8px_hsla(38,92%,50%,0.3)]" />
                <span className="text-muted-foreground font-medium">Moderate (5-7)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-danger to-danger/80 shadow-[0_0_8px_hsla(0,84%,60%,0.3)]" />
                <span className="text-muted-foreground font-medium">Developing (1-4)</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 px-0">
          <div className="overflow-x-auto">
            <TooltipProvider>
              <div className="min-w-[700px]">
                {/* Header row */}
                <div className="grid grid-cols-[120px_repeat(9,1fr)] gap-1 px-4 py-3 bg-muted/20 border-b border-border/20">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pl-2">
                    Exchange
                  </div>
                  {capabilities.map((cap) => (
                    <Tooltip key={cap.short}>
                      <TooltipTrigger asChild>
                        <div className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-help">
                          {cap.short}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{cap.full}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>

                {/* Data rows */}
                <div className="divide-y divide-border/10">
                  {filteredCompetitors.map((comp, rowIndex) => (
                    <div
                      key={comp.name}
                      className={`grid grid-cols-[120px_repeat(9,1fr)] gap-1 px-4 py-2 transition-all duration-200 ${
                        comp.name === "STG"
                          ? "bg-primary/8 hover:bg-primary/12"
                          : rowIndex % 2 === 0
                          ? "bg-transparent hover:bg-muted/20"
                          : "bg-muted/5 hover:bg-muted/20"
                      }`}
                    >
                      {/* Exchange name */}
                      <div className="flex items-center gap-2 pl-2">
                        {comp.name === "STG" ? (
                          <Badge variant="default" className="text-xs font-bold px-3 py-1 glow-gold">
                            STG
                          </Badge>
                        ) : (
                          <span className="font-medium text-sm text-foreground/90">{comp.name}</span>
                        )}
                      </div>

                      {/* Score cells */}
                      {comp.scores.map((score, colIndex) => (
                        <div key={colIndex} className="flex items-center justify-center">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={`
                                  w-9 h-9 rounded-lg flex items-center justify-center 
                                  font-mono font-bold text-sm cursor-pointer 
                                  transition-all duration-200 hover:scale-110 hover:z-10
                                  bg-gradient-to-br ${getHeatColor(score)} ${getGlowColor(score)}
                                  ${comp.name === "STG" ? "ring-1 ring-primary/30" : ""}
                                `}
                              >
                                <span className="text-white drop-shadow-sm">{score}</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-popover/95 backdrop-blur-sm border border-border/50">
                              <div className="text-center">
                                <p className="font-semibold text-foreground">{comp.name}</p>
                                <p className="text-muted-foreground text-xs mt-0.5">
                                  {capabilities[colIndex].full}
                                </p>
                                <p className="text-lg font-bold text-primary mt-1">{score}/10</p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CapabilityHeatmap;