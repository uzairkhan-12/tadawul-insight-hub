import { TrendingUp, Globe2, BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="glass-card border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center glow-gold">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-success animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">
                SDB Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Competitor Landscape Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50">
              <Globe2 className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted-foreground">GCC • MENA • Global</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-success/10 border border-success/20">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Live Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
