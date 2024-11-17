import React from "react";
import { X } from "lucide-react";
import FilterSidebar from "./FilterSidebar";

export default function MobileDrawer({ isOpen, filters, onFilterChange, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#111827] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#374151]">
          <h2 className="text-xl font-semibold text-white">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            aria-label="Close filter drawer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto h-full pb-20">
          <FilterSidebar filters={filters} onFilterChange={onFilterChange} />
        </div>
      </div>
    </>
  );
}
