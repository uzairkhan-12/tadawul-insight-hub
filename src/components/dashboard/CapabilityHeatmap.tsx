import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useDashboardFilter } from "@/contexts/DashboardFilterContext";

const capabilities = [
  "IPO Pipeline",
  "Liquidity",
  "ETFs",
  "Derivatives",
  "CCP Services",
  "Settlement",
  "Market Data",
  "API Platform",
  "Retail Apps",
  "Int'l Access",
];

const allCompetitors = [
  { name: "STG", region: "gcc", scores: [9, 6, 6, 5, 9, 8, 7, 8, 7, 7] },
  { name: "ADX", region: "gcc", scores: [7, 7, 5, 4, 6, 7, 6, 5, 6, 7] },
  { name: "DFM", region: "gcc", scores: [5, 5, 4, 3, 5, 6, 5, 4, 5, 6] },
  { name: "QSE", region: "gcc", scores: [4, 5, 3, 3, 5, 6, 4, 4, 4, 5] },
  { name: "EGX", region: "mena", scores: [4, 4, 2, 2, 4, 5, 3, 3, 4, 4] },
  { name: "BIST", region: "mena", scores: [5, 6, 4, 6, 5, 6, 5, 5, 5, 5] },
  { name: "NYSE", region: "global", scores: [10, 10, 10, 10, 10, 10, 10, 10, 8, 10] },
  { name: "LSE", region: "global", scores: [8, 8, 9, 9, 9, 9, 9, 9, 7, 9] },
  { name: "SGX", region: "global", scores: [7, 7, 8, 9, 8, 8, 8, 9, 6, 8] },
];

const getHeatColor = (score: number) => {
  if (score >= 9) return "bg-success";
  if (score >= 7) return "bg-success/60";
  if (score >= 5) return "bg-warning";
  if (score >= 3) return "bg-danger/60";
  return "bg-danger";
};

const getTextColor = (score: number) => {
  if (score >= 7) return "text-success-foreground";
  if (score >= 5) return "text-warning-foreground";
  return "text-danger-foreground";
};

const CapabilityHeatmap = () => {
  const { regionFilter } = useDashboardFilter();

  const filteredCompetitors = allCompetitors.filter((comp) => {
    if (regionFilter === "all") return true;
    // Always show STG regardless of filter
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

      <Card className="glass-card overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <CardTitle className="text-base font-semibold">Cross-Peer Capability Comparison</CardTitle>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-success" />
                <span className="text-muted-foreground">Strong (8-10)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-warning" />
                <span className="text-muted-foreground">Moderate (5-7)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-danger" />
                <span className="text-muted-foreground">Developing (1-4)</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="overflow-x-auto">
            <TooltipProvider>
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider sticky left-0 bg-card z-10">
                      Exchange
                    </th>
                    {capabilities.map((cap) => (
                      <th key={cap} className="text-center py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        <div className="transform -rotate-45 origin-center whitespace-nowrap w-8 h-16 flex items-end justify-center">
                          {cap}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredCompetitors.map((comp) => (
                    <tr 
                      key={comp.name}
                      className={`border-b border-border/50 ${comp.name === "STG" ? "bg-primary/5" : "hover:bg-muted/30"} transition-colors`}
                    >
                      <td className={`py-3 px-3 sticky left-0 z-10 ${comp.name === "STG" ? "bg-primary/5" : "bg-card"}`}>
                        <div className="flex items-center gap-2">
                          {comp.name === "STG" && (
                            <Badge variant="default" className="text-xs">STG</Badge>
                          )}
                          <span className={`font-medium ${comp.name === "STG" ? "text-primary" : "text-foreground"}`}>
                            {comp.name === "STG" ? "" : comp.name}
                          </span>
                        </div>
                      </td>
                      {comp.scores.map((score, colIndex) => (
                        <td key={colIndex} className="py-2 px-1 text-center">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={`w-10 h-10 mx-auto rounded-lg flex items-center justify-center font-mono font-bold text-sm cursor-pointer transition-transform hover:scale-110 ${getHeatColor(score)}`}
                              >
                                <span className={getTextColor(score)}>{score}</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-popover border border-border">
                              <p className="font-medium">{comp.name}</p>
                              <p className="text-muted-foreground">{capabilities[colIndex]}: {score}/10</p>
                            </TooltipContent>
                          </Tooltip>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CapabilityHeatmap;
