import React, { createContext, useContext, useState, ReactNode } from "react";

export type RegionFilter = "all" | "gcc" | "mena" | "global";

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DashboardFilterContextType {
  regionFilter: RegionFilter;
  setRegionFilter: (region: RegionFilter) => void;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  selectedArena: string | null;
  setSelectedArena: (arena: string | null) => void;
}

const DashboardFilterContext = createContext<DashboardFilterContextType | undefined>(undefined);

export const DashboardFilterProvider = ({ children }: { children: ReactNode }) => {
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("all");
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [selectedArena, setSelectedArena] = useState<string | null>(null);

  return (
    <DashboardFilterContext.Provider
      value={{
        regionFilter,
        setRegionFilter,
        dateRange,
        setDateRange,
        selectedArena,
        setSelectedArena,
      }}
    >
      {children}
    </DashboardFilterContext.Provider>
  );
};

export const useDashboardFilter = () => {
  const context = useContext(DashboardFilterContext);
  if (context === undefined) {
    throw new Error("useDashboardFilter must be used within a DashboardFilterProvider");
  }
  return context;
};
