import React, { useState } from 'react';
import FilterContents from '../components/FilterContents';
import Content from '../components/Content';

interface ContentFilterViewProps {
  name?: string;
}



const ContentFilterView: React.FC<ContentFilterViewProps> = () => {
  const [selectedFilters,setSelectedFilters]=useState<number[]>([]);

  const handleFilterChange = (selectedIds: number[]) => {
    setSelectedFilters(selectedIds)
  }

  return (
    <div className="flex justify-center">
      <div className="w-[700px] h-[700px] border shadow-lg rounded-md">
        {/* Header */}
        <div className="h-[80px] bg-gray-300 flex justify-center items-center shadow-sm">
          <div className="w-[50%] flex justify-center text-[25px]  text-gray-600">Filter</div>
          <div className="h-full w-[1px] bg-gray-400" />
          <div className="w-[50%] flex justify-center text-[25px] text-gray-600">Text</div>
        </div>

        {/* Body */}
        <div className="flex bg-gray-50 h-[620px]   ">
          {/* Left Section */}
           <FilterContents onFilterChange={handleFilterChange}/>

          {/* Divider */}
          <div className="h-full w-[2px] bg-gray-400" />

          {/* Right Section */}
          
            <Content selectedFilters={selectedFilters}/>
        </div>
      </div>
    </div>
  );
};

export default ContentFilterView;
