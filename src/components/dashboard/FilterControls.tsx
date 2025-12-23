import { Globe, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDashboardFilter, RegionFilter } from "@/contexts/DashboardFilterContext";
import { cn } from "@/lib/utils";

const regionOptions: { value: RegionFilter; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Regions", icon: <Globe className="w-4 h-4" /> },
  { value: "gcc", label: "GCC", icon: <MapPin className="w-4 h-4" /> },
  { value: "mena", label: "MENA", icon: <MapPin className="w-4 h-4" /> },
  { value: "global", label: "Global", icon: <Globe className="w-4 h-4" /> },
];

const FilterControls = () => {
  const { regionFilter, setRegionFilter } = useDashboardFilter();

  const activeFiltersCount = regionFilter !== "all" ? 1 : 0;

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl glass-card mb-6">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filters</span>
        {activeFiltersCount > 0 && (
          <Badge variant="secondary" className="text-xs">
            {activeFiltersCount} active
          </Badge>
        )}
      </div>

      <div className="h-6 w-px bg-border" />

      {/* Region Filter */}
      <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
        {regionOptions.map((option) => (
          <Button
            key={option.value}
            variant={regionFilter === option.value ? "default" : "ghost"}
            size="sm"
            className={cn(
              "h-8 px-3 text-xs gap-1.5 transition-all",
              regionFilter === option.value 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "hover:bg-muted"
            )}
            onClick={() => setRegionFilter(option.value)}
          >
            {option.icon}
            {option.label}
          </Button>
        ))}
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <>
          <div className="h-6 w-px bg-border" />
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => setRegionFilter("all")}
          >
            Clear all
          </Button>
        </>
      )}
    </div>
  );
};

export default FilterControls;
