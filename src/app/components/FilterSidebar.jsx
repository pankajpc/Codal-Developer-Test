import { X } from "lucide-react";
import FilterSection from "./FilterSection";
import { useCallback, useState } from "react";

export default function FilterSidebar({
  filters = { brand: [] },
  onFilterChange = () => {},
}) {
  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    viscosity: true,
    size: true,
  });

  // Function to toggle the expanded state of a filter section
  const toggleSection = useCallback((section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  // Function to handle filter changes
  const handleFilterChange = useCallback(
    (type, value) => {
      const updatedFilters = filters[type]?.includes(value)
        ? filters[type].filter((item) => item !== value)
        : [...(filters[type] || []), value];
      onFilterChange({ ...filters, [type]: updatedFilters });
    },
    [filters, onFilterChange]
  );

  // Function to clear all filters
  const clearAllFilters = useCallback(() => {
    onFilterChange({ brand: [] });
  }, [onFilterChange]);

  return (
    <div className="w-full bg-[#ffffff] text-[#222222] h-full px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        {filters.brand.length > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-[#CC3333] hover:text-red-400"
          >
            Clear All
          </button>
        )}
      </div>

      {filters.brand.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium mb-2">Active Filters</h3>
          <div className="flex flex-wrap gap-2">
            {filters.brand.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center bg-[#EBEBEB] text-[#222222] px-3 py-1.5 rounded-md text-sm"
              >
                {brand}
                <button
                  onClick={() => handleFilterChange("brand", brand)}
                  className="ml-2 text-[#222222] hover:text-white"
                  aria-label={`Remove ${brand} filter`}
                >
                  <X className="h-4 w-4" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      <FilterSection
        title="Brand"
        options={["Mobil", "Old World", "Peak"]}
        selected={filters.brand}
        onToggle={(brand) => handleFilterChange("brand", brand)}
        expanded={expandedSections.brand}
        onToggleSection={toggleSection}
      />
      <FilterSection
        title="Viscosity"
        options={["0W-20", "0W-30", "5W-20", "5W-30", "10W-30", "10W-40"]}
        selected={filters.viscosity || []}
        onToggle={(viscosity) => handleFilterChange("viscosity", viscosity)}
        expanded={expandedSections.viscosity}
        onToggleSection={toggleSection}
      />
      <FilterSection
        title="Size"
        options={[
          "1 Quart",
          "5 Quarts",
          "1 Gallon",
          "Bulk 1 Drum",
          "Bulk 1 Tote",
          "Half-Quart",
        ]}
        selected={filters.size || []}
        onToggle={(size) => handleFilterChange("size", size)}
        expanded={expandedSections.size}
        onToggleSection={toggleSection}
      />
    </div>
  );
}
