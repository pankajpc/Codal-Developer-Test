/* eslint-disable react/display-name */
'use client';

import { memo } from "react";

const { ChevronUp, ChevronDown } = require("lucide-react");

const FilterSection = memo(
  ({ title, options, selected, onToggle, expanded, onToggleSection }) => (
    <div className="border-t border-gray-700 py-4">
      <button
        onClick={() => onToggleSection(title.toLowerCase())}
        className="flex items-center justify-between w-full text-left font-medium"
        aria-expanded={expanded}
      >
        <span>{title}</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-[#222222]" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#222222]" />
        )}
      </button>
      {expanded && (
        <div className="mt-2 space-y-2">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center text-[#222222] cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => onToggle(option)}
                className="form-checkbox rounded border-gray-600 bg-gray-800 text-blue-500 cursor-pointer"
              />
              <span className="ml-2 text-sm">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
);

export default FilterSection;
