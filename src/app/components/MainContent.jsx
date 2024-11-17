import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import ProductListing from "./ProductListing";

export default function MainContent({ filters, onFilterChange }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <DesktopSidebar filters={filters} onFilterChange={onFilterChange} />
      <section className="w-full lg:flex-grow">
        <ProductListing filters={filters} />
      </section>
    </div>
  );
}
