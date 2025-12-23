import Header from "@/components/dashboard/Header";
import FilterControls from "@/components/dashboard/FilterControls";
import BusinessUnits from "@/components/dashboard/BusinessUnits";
import CompetitiveArenas from "@/components/dashboard/CompetitiveArenas";
import PeerComparison from "@/components/dashboard/PeerComparison";
import PositioningMap from "@/components/dashboard/PositioningMap";
import CapabilityHeatmap from "@/components/dashboard/CapabilityHeatmap";
import RetailDistribution from "@/components/dashboard/RetailDistribution";
import StrategicImplications from "@/components/dashboard/StrategicImplications";
import { DashboardFilterProvider } from "@/contexts/DashboardFilterContext";

const Index = () => {
  return (
    <DashboardFilterProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-6 py-8 space-y-10">
          <FilterControls />
          <BusinessUnits />
          <CompetitiveArenas />
          <PeerComparison />
          <PositioningMap />
          <CapabilityHeatmap />
          <RetailDistribution />
          <StrategicImplications />
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 mt-16">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>Saudi Tadawul Group Competitor Landscape Dashboard</p>
              <p>Last Updated: December 2025</p>
            </div>
          </div>
        </footer>
      </div>
    </DashboardFilterProvider>
  );
};

export default Index;
