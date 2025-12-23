import { AlertTriangle, Target, Lightbulb, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const implications = {
  threats: [
    { text: "Neo-invest platforms capturing retail wallet share and offshore trading", priority: "Critical" },
    { text: "Global data vendors (Bloomberg, Refinitiv) competing in market data space", priority: "High" },
    { text: "ADX aggressive growth in listings and product innovation", priority: "High" },
    { text: "Digital banking platforms bundling investment products", priority: "Medium" },
  ],
  opportunities: [
    { text: "Regional hub for Sukuk and Islamic finance products", priority: "High" },
    { text: "Wamid tech platform partnerships with global fintechs", priority: "High" },
    { text: "MSCI/FTSE weight increases driving sustained foreign flows", priority: "Medium" },
    { text: "Retail engagement platform to capture next-gen investors", priority: "Critical" },
  ],
  priorities: [
    { text: "Accelerate derivatives and ETF product roadmap", category: "Product" },
    { text: "Strategic retail platform acquisition or partnership", category: "Distribution" },
    { text: "Enhance Wamid data monetization capabilities", category: "Technology" },
    { text: "Develop cross-border clearing interoperability", category: "Infrastructure" },
    { text: "Launch integrated retail investor app ecosystem", category: "Digital" },
  ],
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "Critical":
      return <Badge variant="danger" className="animate-pulse">Critical</Badge>;
    case "High":
      return <Badge variant="warning">High</Badge>;
    case "Medium":
      return <Badge variant="info">Medium</Badge>;
    default:
      return <Badge variant="glass">{priority}</Badge>;
  }
};

const StrategicImplications = () => {
  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-gold" />
        <h2 className="text-lg font-semibold text-foreground">Strategic Implications</h2>
        <span className="text-sm text-muted-foreground">Executive Decision Framework</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Threats */}
        <Card className="glass-card border-danger/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-danger/20 text-danger">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold text-danger">Competitive Threats</CardTitle>
                <p className="text-xs text-muted-foreground">Monitor & Mitigate</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {implications.threats.map((threat, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg bg-danger/5 border border-danger/10 hover:border-danger/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    {getPriorityBadge(threat.priority)}
                  </div>
                  <p className="text-sm text-foreground">{threat.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Opportunities */}
        <Card className="glass-card border-success/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-success/20 text-success">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold text-success">Strategic Opportunities</CardTitle>
                <p className="text-xs text-muted-foreground">Capture & Expand</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {implications.opportunities.map((opp, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg bg-success/5 border border-success/10 hover:border-success/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    {getPriorityBadge(opp.priority)}
                  </div>
                  <p className="text-sm text-foreground">{opp.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Priority Plays */}
        <Card className="glass-card border-primary/20 glow-gold">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/20 text-primary">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold text-primary">Priority Strategic Plays</CardTitle>
                <p className="text-xs text-muted-foreground">Execute & Deliver</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {implications.priorities.map((priority, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="glass" className="text-xs">{priority.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-foreground">{priority.text}</p>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strategic Narrative Summary */}
      <Card className="glass-card mt-6 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/20 text-primary flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Strategic Narrative</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Saudi Tadawul Group operates from a position of structural strength as the largest integrated market 
                infrastructure in MENA, with regulatory tailwinds from Vision 2030. However, competitive pressure is 
                intensifying across three fronts: <span className="text-danger font-medium">retail distribution</span> is 
                being captured by agile neo-invest platforms, <span className="text-warning font-medium">product ecosystem</span> depth 
                lags global benchmarks, and <span className="text-info font-medium">data monetization</span> faces global vendor competition. 
                The strategic imperative is to defend the retail gateway while accelerating product innovation and 
                technology platform expansion.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default StrategicImplications;
