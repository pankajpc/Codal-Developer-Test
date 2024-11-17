import React from "react";
import FilterSidebar from "./FilterSidebar";

export default function DesktopSidebar({ filters, onFilterChange }) {
  return (
    <aside className="hidden lg:block w-full lg:w-1/4">
      <FilterSidebar filters={filters} onFilterChange={onFilterChange} />
    </aside>
  );
}
