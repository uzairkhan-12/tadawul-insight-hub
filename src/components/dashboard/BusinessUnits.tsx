import { Card, CardContent } from "@/components/ui/card";
import logoSaudiExchange from "@/assets/logo-saudi-exchange.png";
import logoEdaa from "@/assets/logo-edaa.png";
import logoWamid from "@/assets/logo-wamid.png";

const units = [
  {
    name: "Saudi Exchange",
    description: "Trading venue and listings platform",
    logo: logoSaudiExchange,
  },
  {
    name: "Muqassa",
    description: "Central counterparty clearing",
    logo: null,
  },
  {
    name: "Edaa",
    description: "Central securities depository",
    logo: logoEdaa,
  },
  {
    name: "Wamid",
    description: "Technology, data & innovation",
    logo: logoWamid,
  },
];

const BusinessUnits = () => {
  return (
    <section className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-gold" />
        <h2 className="text-lg font-semibold text-foreground">STG Subsidiaries</h2>
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
                <div className="w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center overflow-hidden p-1">
                  {unit.logo ? (
                    <img src={unit.logo} alt={unit.name} className="w-full h-full object-contain" loading="lazy" />
                  ) : (
                    <span className="text-sm font-bold text-muted-foreground">{unit.name[0]}</span>
                  )}
                </div>
              </div>
              
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {unit.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {unit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BusinessUnits;
