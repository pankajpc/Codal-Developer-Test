import React from "react";
import { Filter } from "lucide-react";

export default function MobileFilterButton({ isOpen, filterCount, onClick }) {
  return (
    <div className="lg:hidden mb-4">
      <button
        onClick={onClick}
        className="flex items-center justify-center w-full py-2 px-4 bg-[#1F2937] text-white rounded-md hover:bg-[#374151] transition-colors"
        aria-expanded={isOpen}
      >
        <Filter className="w-5 h-5 mr-2" />
        Filters ({filterCount})
      </button>
    </div>
  );
}
