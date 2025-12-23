import { Building, Briefcase, Users, TrendingUp, Globe, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const personas = [
  {
    name: "Issuers",
    icon: Building,
    color: "primary",
    description: "Companies seeking capital and market presence",
    priorities: [
      "Capital access & fundraising efficiency",
      "Speed to market for IPO/listings",
      "Valuation optimization",
      "Regulatory simplicity",
      "Investor visibility & coverage",
    ],
  },
  {
    name: "Institutional Investors",
    icon: Briefcase,
    color: "secondary",
    description: "Asset managers, pension funds, sovereign wealth",
    priorities: [
      "Market liquidity & depth",
      "Transparent price discovery",
      "Robust settlement & custody",
      "Index inclusion & benchmark tracking",
      "Cross-border access",
    ],
  },
  {
    name: "Retail Investors",
    icon: Users,
    color: "success",
    description: "Individual investors and traders",
    priorities: [
      "Easy account opening & onboarding",
      "Low transaction costs",
      "Mobile-first trading experience",
      "Education & market insights",
      "Portfolio diversification options",
    ],
  },
  {
    name: "Brokers & Intermediaries",
    icon: TrendingUp,
    color: "info",
    description: "Market makers, brokers, custodians",
    priorities: [
      "Competitive fee structures",
      "Technology & API access",
      "Product range & innovation",
      "Clearing & settlement efficiency",
      "Regulatory compliance support",
    ],
  },
  {
    name: "Foreign Investors",
    icon: Globe,
    color: "warning",
    description: "QFIs and international market participants",
    priorities: [
      "Market accessibility & QFI frameworks",
      "Currency & FX solutions",
      "Global custody integration",
      "Index weighting increases",
      "Regulatory clarity & stability",
    ],
  },
  {
    name: "Data Consumers",
    icon: Wallet,
    color: "danger",
    description: "Fintechs, analytics firms, media",
    priorities: [
      "Real-time data feeds",
      "Historical data access",
      "API reliability & latency",
      "Competitive pricing",
      "Custom data products",
    ],
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    primary: { bg: "bg-primary/15", text: "text-primary", border: "border-primary/30", badge: "bg-primary/20 text-primary" },
    secondary: { bg: "bg-secondary/15", text: "text-secondary", border: "border-secondary/30", badge: "bg-secondary/20 text-secondary" },
    success: { bg: "bg-success/15", text: "text-success", border: "border-success/30", badge: "bg-success/20 text-success" },
    info: { bg: "bg-info/15", text: "text-info", border: "border-info/30", badge: "bg-info/20 text-info" },
    warning: { bg: "bg-warning/15", text: "text-warning", border: "border-warning/30", badge: "bg-warning/20 text-warning" },
    danger: { bg: "bg-danger/15", text: "text-danger", border: "border-danger/30", badge: "bg-danger/20 text-danger" },
  };
  return colorMap[color] || colorMap.primary;
};

const ClientValueChain = () => {
  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.15s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-teal" />
        <h2 className="text-lg font-semibold text-foreground">Client Value Chain</h2>
        <span className="text-sm text-muted-foreground">Key Personas & Their Priorities</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personas.map((persona, index) => {
          const colors = getColorClasses(persona.color);
          return (
            <Card
              key={persona.name}
              className="glass-card group hover:border-primary/30 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-5">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${colors.bg} ${colors.text}`}>
                    <persona.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {persona.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {persona.description}
                    </p>
                  </div>
                </div>

                {/* Priorities */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Key Priorities
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {persona.priorities.slice(0, 3).map((priority, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={`text-xs font-normal border-border/50 bg-muted/30 hover:${colors.bg} transition-colors`}
                      >
                        {priority}
                      </Badge>
                    ))}
                  </div>
                  {persona.priorities.length > 3 && (
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {persona.priorities.slice(3).map((priority, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs font-normal border-border/30 text-muted-foreground bg-transparent"
                        >
                          {priority}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ClientValueChain;