import React, { useState } from 'react';

interface FilterContentsProps {
  onFilterChange: (selectedIds: number[]) => void;
}

const FilterContents: React.FC<FilterContentsProps> = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);

  const defaultFilterData = [
    { label: 'Clause 1', id: 1 },
    { label: 'Clause 2', id: 2 },
    { label: 'Clause 3', id: 3 },
    { label: 'Clause 4', id: 4 },
    { label: 'Clause 5', id: 5 },
    { label: 'Clause 6', id: 6 },
    { label: 'Clause 7', id: 7 },
    { label: 'Clause 8', id: 8 },
    { label: 'Clause 9', id: 9 },
    { label: 'Clause 10', id: 10 },
    { label: 'Clause 11', id: 11 },
    { label: 'Clause 12', id: 12 },
    { label: 'Clause 13', id: 13 },
    { label: 'Clause 14', id: 14 },
    { label: 'Clause 15', id: 15 },
    { label: 'Clause 16', id: 16 },
    { label: 'Clause 17', id: 17 },
    { label: 'Clause 18', id: 18 },
    { label: 'Clause 19', id: 19 },
    { label: 'Clause 20', id: 20 },
    { label: 'Clause 21', id: 21 },
    { label: 'Clause 22', id: 22 },
    { label: 'Clause 23', id: 23 },
    { label: 'Clause 24', id: 24 },
    { label: 'Clause 25', id: 25 },
  ];

  const handleFilterToggle = (id: number) => {
    const updatedFilters = selectedFilters.includes(id)
      ? selectedFilters.filter((filterId) => filterId !== id)
      : [...selectedFilters, id];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="w-[20%] flex flex-col items-start overflow-y-auto gap-1 scrollbar-hide">
      {defaultFilterData.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-2 cursor-pointer p-3 hover:bg-gray-200 bg-gray-100 w-full"
          onClick={() => handleFilterToggle(item.id)} // Toggle filter on div click
        >
          <div
            className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center border-gray-300 `}
          >
            {selectedFilters.includes(item.id) && (
              <span className=" text-[10px]">✔️</span> // Checkmark when selected
            )}
          </div>
          <label className="cursor-pointer">
            <span>{item.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterContents;
