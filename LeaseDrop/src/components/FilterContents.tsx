import React, { useState } from 'react';

interface FilterContentsProps {
  onFilterChange: (selectedIds: number[]) => void;
}

const FilterContents: React.FC<FilterContentsProps> = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);

  const defaultFilterData = [
    { label: 'Cluse 1', id: 1 },
    { label: 'Cluse 2', id: 2 },
    { label: 'Cluse 3', id: 3 },
    { label: 'Cluse 4', id: 4 },
    { label: 'Cluse 5', id: 5 },
    { label: 'Cluse 6', id: 6 },
    { label: 'Cluse 7', id: 7 },
    { label: 'Cluse 8', id: 8 },
    { label: 'Cluse 9', id: 9 },
    { label: 'Cluse 10', id: 10 },
    { label: 'Cluse 11', id: 11 },
    { label: 'Cluse 12', id: 12 },
    { label: 'Cluse 13', id: 13 },
    { label: 'Cluse 14', id: 14 },
    { label: 'Cluse 15', id: 15 },
    { label: 'Cluse 16', id: 16 },
    { label: 'Cluse 17', id: 17 },
    { label: 'Cluse 18', id: 18 },
    { label: 'Cluse 19', id: 19 },
    { label: 'Cluse 20', id: 20 },
    { label: 'Cluse 21', id: 21 },
    { label: 'Cluse 22', id: 22 },
    { label: 'Cluse 23', id: 23 },
    { label: 'Cluse 24', id: 24 },
    { label: 'Cluse 25', id: 25 },
  ];

  const handleFilterToggle = (id: number) => {
    const updatedFilters = selectedFilters.includes(id)
      ? selectedFilters.filter((filterId) => filterId !== id)
      : [...selectedFilters, id];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="w-[50%] flex flex-col items-start overflow-y-auto gap-1 scrollbar-hide">
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
