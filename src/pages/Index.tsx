import { useState, useEffect } from "react";
import Header from "@/components/dashboard/Header";
import FilterControls from "@/components/dashboard/FilterControls";
import BusinessUnits from "@/components/dashboard/BusinessUnits";
import ClientValueChain from "@/components/dashboard/ClientValueChain";
import CompetitiveArenas from "@/components/dashboard/CompetitiveArenas";
import PeerComparison from "@/components/dashboard/PeerComparison";
import PositioningMap from "@/components/dashboard/PositioningMap";
import CapabilityHeatmap from "@/components/dashboard/CapabilityHeatmap";
import RetailDistribution from "@/components/dashboard/RetailDistribution";
import StrategicImplications from "@/components/dashboard/StrategicImplications";
import PasscodeScreen from "@/components/dashboard/PasscodeScreen";
import ProductsTab from "@/components/products/ProductsTab";
import { DashboardFilterProvider } from "@/contexts/DashboardFilterContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticated = sessionStorage.getItem("dashboard_authenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <PasscodeScreen onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <DashboardFilterProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-6 py-8">
          <Tabs defaultValue="landscape" className="w-full">
            <TabsList className="mb-8 w-full max-w-md">
              <TabsTrigger value="landscape" className="flex-1">Competitor Landscape</TabsTrigger>
              <TabsTrigger value="products" className="flex-1">Products Review</TabsTrigger>
            </TabsList>

            <TabsContent value="landscape">
              <div className="space-y-10">
                <FilterControls />
                <BusinessUnits />
                <ClientValueChain />
                <CompetitiveArenas />
                <PeerComparison />
                <PositioningMap />
                <CapabilityHeatmap />
                <RetailDistribution />
                <StrategicImplications />
              </div>
            </TabsContent>

            <TabsContent value="products">
              <ProductsTab />
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t border-border/50 mt-16">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>STG Landscape Dashboard</p>
              <p>Last Updated: April 2026</p>
            </div>
          </div>
        </footer>
      </div>
    </DashboardFilterProvider>
  );
};

export default Index;
