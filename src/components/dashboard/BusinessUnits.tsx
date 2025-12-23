import { Building2, Shield, Database, Cpu, TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const units = [
  {
    name: "Saudi Exchange",
    description: "Trading venue and listings platform",
    icon: Building2,
    stats: { label: "Market Cap", value: "$2.8T" },
    growth: "+12.4%",
    color: "primary",
  },
  {
    name: "Muqassa",
    description: "Central counterparty clearing",
    icon: Shield,
    stats: { label: "Cleared Volume", value: "$890B" },
    growth: "+8.2%",
    color: "secondary",
  },
  {
    name: "Edaa",
    description: "Central securities depository",
    icon: Database,
    stats: { label: "Securities Held", value: "4.2M" },
    growth: "+15.1%",
    color: "success",
  },
  {
    name: "Wamid",
    description: "Technology, data & innovation",
    icon: Cpu,
    stats: { label: "API Calls/Day", value: "125M" },
    growth: "+23.5%",
    color: "info",
  },
];

const BusinessUnits = () => {
  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-gold" />
        <h2 className="text-lg font-semibold text-foreground">STG Core Components</h2>
        <span className="text-sm text-muted-foreground">Integrated Market Infrastructure</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {units.map((unit, index) => (
          <Card 
            key={unit.name}
            className="glass-card group hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${
                  unit.color === "primary" ? "bg-primary/20 text-primary" :
                  unit.color === "secondary" ? "bg-secondary/20 text-secondary" :
                  unit.color === "success" ? "bg-success/20 text-success" :
                  "bg-info/20 text-info"
                }`}>
                  <unit.icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-success text-sm font-medium">
                  <TrendingUp className="w-3 h-3" />
                  {unit.growth}
                </div>
              </div>
              
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {unit.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {unit.description}
              </p>
              
              <div className="flex items-end justify-between pt-3 border-t border-border/50">
                <div>
                  <p className="text-xs text-muted-foreground">{unit.stats.label}</p>
                  <p className="text-lg font-bold text-foreground font-mono">{unit.stats.value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BusinessUnits;
