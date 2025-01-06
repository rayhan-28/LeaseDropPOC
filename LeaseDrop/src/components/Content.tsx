import React from 'react';

interface ContentProps {
   // Define your props here
   selectedFilters:number[]
}

const Content: React.FC<ContentProps> = ({ selectedFilters }) => {
  const defaultFilterData = [
    { label: 'Cluse 1', id: 1, description: 'Description for Cluse 1: This is a detailed explanation about Cluse 1. It covers its basic functionalities, usage, and application in various scenarios.', pageNo: 1 },
    { label: 'Cluse 2', id: 2, description: 'Description for Cluse 2: This section provides insight into Cluse 2 and its features, including its compatibility with other modules and integration options.', pageNo: 1 },
    { label: 'Cluse 3', id: 3, description: 'Description for Cluse 3: An extended look at Cluse 3, detailing its benefits, real-world applications, and any special considerations when using it.', pageNo: 2 },
    { label: 'Cluse 4', id: 4, description: 'Description for Cluse 4: Cluse 4 is highly versatile and can be used in a wide range of projects. This description dives deeper into its technical specifications and best practices.', pageNo: 2 },
    { label: 'Cluse 5', id: 5, description: 'Description for Cluse 5: With a focus on user experience, Cluse 5 brings innovative features and simplifies complex workflows, making it an indispensable tool in any development process.', pageNo: 3 },
    { label: 'Cluse 6', id: 6, description: 'Description for Cluse 6: The features of Cluse 6 are explained in detail, with examples that demonstrate its ease of use and how it enhances productivity.', pageNo: 3 },
    { label: 'Cluse 7', id: 7, description: 'Description for Cluse 7: A comprehensive guide to the features and functionalities of Cluse 7, including advanced settings and customization options.', pageNo: 4 },
    { label: 'Cluse 8', id: 8, description: 'Description for Cluse 8: In-depth look into the applications and use cases of Cluse 8. It explains its technical aspects and provides insight into optimizing its performance.', pageNo: 4 },
    { label: 'Cluse 9', id: 9, description: 'Description for Cluse 9: This section highlights the enhancements in Cluse 9 and its impact on the development environment, making it a top choice for developers.', pageNo: 5 },
    { label: 'Cluse 10', id: 10, description: 'Description for Cluse 10: Cluse 10 brings improvements in speed and reliability, and this description explores how these changes can benefit your workflow.', pageNo: 5 },
    { label: 'Cluse 11', id: 11, description: 'Description for Cluse 11: This section provides insights into the features that make Cluse 11 a valuable addition to any project, particularly in terms of ease of integration.', pageNo: 6 },
    { label: 'Cluse 12', id: 12, description: 'Description for Cluse 12: Learn about the unique capabilities of Cluse 12, including its compatibility with third-party tools and its potential to streamline development processes.', pageNo: 6 },
    { label: 'Cluse 13', id: 13, description: 'Description for Cluse 13: With a focus on performance, Cluse 13 delivers outstanding results. This description breaks down its key features and how they contribute to its efficiency.', pageNo: 7 },
    { label: 'Cluse 14', id: 14, description: 'Description for Cluse 14: Cluse 14 offers a range of features that make it a robust solution for complex projects. This description goes into detail about its customization options.', pageNo: 7 },
    { label: 'Cluse 15', id: 15, description: 'Description for Cluse 15: An advanced guide to using Cluse 15, focusing on how it can optimize processes and enhance collaboration in team environments.', pageNo: 8 },
    { label: 'Cluse 16', id: 16, description: 'Description for Cluse 16: Learn how Cluse 16 brings together the best of both worlds: power and simplicity. This description covers its core capabilities and advanced features.', pageNo: 8 },
    { label: 'Cluse 17', id: 17, description: 'Description for Cluse 17: A look at the breakthrough features in Cluse 17, highlighting its innovative approach to solving common challenges in development.', pageNo: 9 },
    { label: 'Cluse 18', id: 18, description: 'Description for Cluse 18: This description focuses on the enhancements in Cluse 18, particularly its improvements in stability and its ability to handle large-scale applications.', pageNo: 9 },
    { label: 'Cluse 19', id: 19, description: 'Description for Cluse 19: With powerful tools for automation, Cluse 19 brings increased efficiency to your workflow. This description explains its functionality and use cases.', pageNo: 10 },
    { label: 'Cluse 20', id: 20, description: 'Description for Cluse 20: Cluse 20 is optimized for both speed and flexibility. This description provides detailed examples on how to take full advantage of its powerful capabilities.', pageNo: 10 },
    { label: 'Cluse 21', id: 21, description: 'Description for Cluse 21: This section elaborates on the features of Cluse 21, focusing on its advanced features and integration options with external tools and platforms.', pageNo: 11 },
    { label: 'Cluse 22', id: 22, description: 'Description for Cluse 22: Cluse 22 offers a variety of customization options. This description explores how users can configure the tool to fit their specific needs.', pageNo: 11 },
    { label: 'Cluse 23', id: 23, description: 'Description for Cluse 23: A deep dive into Cluse 23, looking at its key features, best practices for use, and how it can streamline your development process.', pageNo: 12 },
    { label: 'Cluse 24', id: 24, description: 'Description for Cluse 24: Discover how Cluse 24 improves upon its predecessors, offering faster speeds and greater flexibility in complex scenarios.', pageNo: 12 },
    { label: 'Cluse 25', id: 25, description: 'Description for Cluse 25: This section discusses the future potential of Cluse 25 and its role in advancing development processes, including new features and integration possibilities.', pageNo: 13 },
];

  
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  const filteredData = selectedFilters.length>0?defaultFilterData.filter((item)=>selectedFilters.includes(item.id)):defaultFilterData

  return (
    <div className="w-[50%] flex flex-col items-start overflow-y-auto gap-1 scrollbar-hide">

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