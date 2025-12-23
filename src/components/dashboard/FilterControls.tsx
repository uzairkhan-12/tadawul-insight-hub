import { Globe, MapPin, Filter, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useDashboardFilter, RegionFilter } from "@/contexts/DashboardFilterContext";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const regionOptions: { value: RegionFilter; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Regions", icon: <Globe className="w-4 h-4" /> },
  { value: "gcc", label: "GCC", icon: <MapPin className="w-4 h-4" /> },
  { value: "mena", label: "MENA", icon: <MapPin className="w-4 h-4" /> },
  { value: "global", label: "Global", icon: <Globe className="w-4 h-4" /> },
];

const FilterControls = () => {
  const { regionFilter, setRegionFilter, dateRange, setDateRange } = useDashboardFilter();

  const activeFiltersCount = (regionFilter !== "all" ? 1 : 0) + (dateRange.from ? 1 : 0);

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

      <div className="h-6 w-px bg-border" />

      {/* Date Range Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-8 px-3 text-xs gap-2 border-border/50",
              dateRange.from && "border-primary/50 bg-primary/5"
            )}
          >
            <Calendar className="w-4 h-4" />
            {dateRange.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "MMM d")} - {format(dateRange.to, "MMM d, yyyy")}
                </>
              ) : (
                format(dateRange.from, "MMM d, yyyy")
              )
            ) : (
              "Select Date Range"
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-popover border-border" align="start">
          <CalendarComponent
            initialFocus
            mode="range"
            defaultMonth={dateRange.from}
            selected={{ from: dateRange.from, to: dateRange.to }}
            onSelect={(range) => setDateRange({ from: range?.from, to: range?.to })}
            numberOfMonths={2}
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground"
          onClick={() => {
            setRegionFilter("all");
            setDateRange({ from: undefined, to: undefined });
          }}
        >
          Clear all
        </Button>
      )}
    </div>
  );
};

export default FilterControls;
