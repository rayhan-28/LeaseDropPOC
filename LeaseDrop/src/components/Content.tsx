import React from 'react';

interface ContentProps {
   // Define your props here
   selectedFilters:number[]
}

const Content: React.FC<ContentProps> = ({ selectedFilters }) => {
  const defaultFilterData = [
    { label: 'Clause 1', id: 1, description: 'Description for Clause 1: This is a detailed explanation about Clause 1. It covers its basic functionalities, usage, and application in various scenarios.', pageNo: 1 },
    { label: 'Clause 2', id: 2, description: 'Description for Clause 2: This section provides insight into Clause 2 and its features, including its compatibility with other modules and integration options.', pageNo: 1 },
    { label: 'Clause 3', id: 3, description: 'Description for Clause 3: An extended look at Clause 3, detailing its benefits, real-world applications, and any special considerations when using it.', pageNo: 2 },
    { label: 'Clause 4', id: 4, description: 'Description for Clause 4: Clause 4 is highly versatile and can be used in a wide range of projects. This description dives deeper into its technical specifications and best practices.', pageNo: 2 },
    { label: 'Clause 5', id: 5, description: 'Description for Clause 5: With a focus on user experience, Clause 5 brings innovative features and simplifies complex workflows, making it an indispensable tool in any development process.', pageNo: 3 },
    { label: 'Clause 6', id: 6, description: 'Description for Clause 6: The features of Clause 6 are explained in detail, with examples that demonstrate its ease of use and how it enhances productivity.', pageNo: 3 },
    { label: 'Clause 7', id: 7, description: 'Description for Clause 7: A comprehensive guide to the features and functionalities of Clause 7, including advanced settings and customization options.', pageNo: 4 },
    { label: 'Clause 8', id: 8, description: 'Description for Clause 8: In-depth look into the applications and use cases of Clause 8. It explains its technical aspects and provides insight into optimizing its performance.', pageNo: 4 },
    { label: 'Clause 9', id: 9, description: 'Description for Clause 9: This section highlights the enhancements in Clause 9 and its impact on the development environment, making it a top choice for developers.', pageNo: 5 },
    { label: 'Clause 10', id: 10, description: 'Description for Clause 10: Clause 10 brings improvements in speed and reliability, and this description explores how these changes can benefit your workflow.', pageNo: 5 },
    { label: 'Clause 11', id: 11, description: 'Description for Clause 11: This section provides insights into the features that make Clause 11 a valuable addition to any project, particularly in terms of ease of integration.', pageNo: 6 },
    { label: 'Clause 12', id: 12, description: 'Description for Clause 12: Learn about the unique capabilities of Clause 12, including its compatibility with third-party tools and its potential to streamline development processes.', pageNo: 6 },
    { label: 'Clause 13', id: 13, description: 'Description for Clause 13: With a focus on performance, Clause 13 delivers outstanding results. This description breaks down its key features and how they contribute to its efficiency.', pageNo: 7 },
    { label: 'Clause 14', id: 14, description: 'Description for Clause 14: Clause 14 offers a range of features that make it a robust solution for complex projects. This description goes into detail about its customization options.', pageNo: 7 },
    { label: 'Clause 15', id: 15, description: 'Description for Clause 15: An advanced guide to using Clause 15, focusing on how it can optimize processes and enhance collaboration in team environments.', pageNo: 8 },
    { label: 'Clause 16', id: 16, description: 'Description for Clause 16: Learn how Clause 16 brings together the best of both worlds: power and simplicity. This description covers its core capabilities and advanced features.', pageNo: 8 },
    { label: 'Clause 17', id: 17, description: 'Description for Clause 17: A look at the breakthrough features in Clause 17, highlighting its innovative approach to solving common challenges in development.', pageNo: 9 },
    { label: 'Clause 18', id: 18, description: 'Description for Clause 18: This description focuses on the enhancements in Clause 18, particularly its improvements in stability and its ability to handle large-scale applications.', pageNo: 9 },
    { label: 'Clause 19', id: 19, description: 'Description for Clause 19: With powerful tools for automation, Clause 19 brings increased efficiency to your workflow. This description explains its functionality and use cases.', pageNo: 10 },
    { label: 'Clause 20', id: 20, description: 'Description for Clause 20: Clause 20 is optimized for both speed and flexibility. This description provides detailed examples on how to take full advantage of its powerful capabilities.', pageNo: 10 },
    { label: 'Clause 21', id: 21, description: 'Description for Clause 21: This section elaborates on the features of Clause 21, focusing on its advanced features and integration options with external tools and platforms.', pageNo: 11 },
    { label: 'Clause 22', id: 22, description: 'Description for Clause 22: Clause 22 offers a variety of customization options. This description explores how users can configure the tool to fit their specific needs.', pageNo: 11 },
    { label: 'Clause 23', id: 23, description: 'Description for Clause 23: A deep dive into Clause 23, looking at its key features, best practices for use, and how it can streamline your development process.', pageNo: 12 },
    { label: 'Clause 24', id: 24, description: 'Description for Clause 24: Discover how Clause 24 improves upon its predecessors, offering faster speeds and greater flexibility in complex scenarios.', pageNo: 12 },
    { label: 'Clause 25', id: 25, description: 'Description for Clause 25: This section discusses the future potential of Clause 25 and its role in advancing development processes, including new features and integration possibilities.', pageNo: 13 },
];

  
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  const filteredData = selectedFilters.length>0?defaultFilterData.filter((item)=>selectedFilters.includes(item.id)):defaultFilterData

  return (
    <div className="w-[20%] flex flex-col items-start overflow-y-auto gap-1 scrollbar-hide">

    {filteredData.map((item,index)=>(
      <div key={index} className="flex-col text-left  gap-2 cursor-pointer p-3 hover:bg-gray-200 bg-gray-100 w-full">
      <p className='text-[20px] text-gray-800'>{item.label}</p>
      <p className='pl-4 py-1 text-gray-600 text-[13px] text-justify'>- {truncateText(item.description, 90)}</p>
      <p className='text-gray-600 text-sm float-end'>P{item.pageNo}</p>
    </div>
    ))}

    
   
  </div>
  
  );
};

export default Content;