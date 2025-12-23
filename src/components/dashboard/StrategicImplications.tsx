import { useState } from "react";
import { AlertTriangle, Target, Lightbulb, ArrowRight, Shield, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
    { 
      text: "Accelerate derivatives and ETF product roadmap", 
      category: "Product",
      details: [
        "Launch equity index futures and options by Q2 2025",
        "Partner with global ETF providers for co-branded products",
        "Develop Sharia-compliant structured products suite",
        "Introduce sector-specific ETFs (energy, banking, real estate)",
      ],
      timeline: "12-18 months",
      impact: "High revenue diversification"
    },
    { 
      text: "Strategic retail platform acquisition or partnership", 
      category: "Distribution",
      details: [
        "Evaluate acquisition targets among Saudi/GCC fintechs",
        "Explore white-label partnership with neo-invest platforms",
        "Develop API-first distribution strategy for brokers",
        "Create retail investor loyalty and rewards program",
      ],
      timeline: "6-12 months",
      impact: "Defend retail wallet share"
    },
    { 
      text: "Enhance Wamid data monetization capabilities", 
      category: "Technology",
      details: [
        "Continue developing DataHub offerings",
        "Develop AI-powered analytics products",
        "Create developer portal with sandbox environment",
        "Establish data partnerships with global vendors",
      ],
      timeline: "12-24 months",
      impact: "New recurring revenue stream"
    },
    { 
      text: "Develop cross-border clearing interoperability", 
      category: "Infrastructure",
      details: [
        "Establish CCP links with key GCC exchanges",
        "Explore collateral optimization services",
        "Implement T+1 settlement roadmap",
        "Develop multi-currency clearing capabilities",
      ],
      timeline: "18-36 months",
      impact: "Regional market integration"
    },
    { 
      text: "Launch integrated retail investor app ecosystem", 
      category: "Digital",
      details: [
        "Integrate educational content and market insights",
        "Encourage social trading and community features",
        "Implement gamification for investor engagement",
      ],
      timeline: "9-15 months",
      impact: "Next-gen investor capture"
    },
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
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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

        {/* Priority Plays - Clickable */}
        <Card className="glass-card border-primary/20 glow-gold">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/20 text-primary">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold text-primary">Priority Strategic Plays</CardTitle>
                <p className="text-xs text-muted-foreground">Click to expand details</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {implications.priorities.map((priority, index) => (
                <Collapsible
                  key={index}
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <CollapsibleTrigger asChild>
                    <div 
                      className="p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="glass" className="text-xs">{priority.category}</Badge>
                        <Badge variant="outline" className="text-xs text-muted-foreground border-border/50">
                          {priority.timeline}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-foreground">{priority.text}</p>
                        <ChevronDown 
                          className={`w-4 h-4 text-muted-foreground group-hover:text-primary transition-all ${
                            openItems.includes(index) ? "rotate-180" : ""
                          }`} 
                        />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="animate-accordion-down">
                    <div className="mt-2 p-3 rounded-lg bg-muted/30 border border-border/30 space-y-3">
                      <div>
                        <p className="text-xs font-medium text-primary mb-2">Key Actions</p>
                        <ul className="space-y-1.5">
                          {priority.details.map((detail, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                              <ArrowRight className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-border/30 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Expected Impact</span>
                        <Badge variant="success" className="text-xs">{priority.impact}</Badge>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
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