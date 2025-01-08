import React, { useState } from 'react';
import FilterContents from '../components/FilterContents';
import Content from '../components/Content';
import HighlightKeywordsExample from '../components/HighlightKeywordsExample';
import axios from 'axios';

interface ContentFilterViewProps {
  name?: string;
}



const ContentFilterView: React.FC<ContentFilterViewProps> = () => {

  const [file, setFile] = useState(null);
  const [selectedFilters,setSelectedFilters]=useState<number[]>([]);

   const [isUploading, setIsUploading] = useState(false);
   const [uploadResponse, setUploadResponse] = useState(null);
 
   const handleFileChange  = (e) => {
     if (e.target.files && e.target.files.length > 0) {
       setFile(e.target.files[0]); // Set the first selected file
     }
   };
 
   const handleUpload = async () => {
     if (!file) {
       alert('Please select a file before uploading.');
       return;
     }
 
     const formData = new FormData();
     formData.append('file', file); // Append the file to FormData
 
     setIsUploading(true);
 
     const token = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9oaWdobGl0ZXMudXMuYXV0aDAuY29tLyJ9..ybC-PAHIgDacFVPX.7hHgn4urMEAPOPmzrCeQr19Xd-g6JtunQQkocHQKyPLkirqqvFd3stVlMshujRMgVrIfWUjLK9WxNxUP8HVpJmGVXF3ObWeUZJxNzuIZGXSwaxL13lVdqIBXIoc1QC4cWIHHVSrMZybcI8a7A4osDLVrHzdHo2H9CAzjocjyxmBhX9ogs2jxVdZKbJXH4a81VM_NhJC8XuJUlWBh3jB9vfEEet2H3U4tfNS6zTpXJDu8ThzIOy9MOdWIpQ_C5d35RF-MqB_IbeAsbDxSvBhYwHI93P4MhqG2sLNRhJjH.fhfG0H56GqH8VHS9gbwJNA";
 
     try {
       const response = await axios.post('https://dev.api.highlites.ai/api/v1/ai/moment', formData, {
         headers: {
           'Content-Type': 'multipart/form-data',
           'Authorization': `Bearer ${token}`,
         },
       });
       setUploadResponse(response.data); // Store the response from the server
       console.log(response.data);
     } catch (error) {
       console.error('Error uploading file:', error);
     } finally {
       setIsUploading(false);
     }
   };



  const handleFilterChange = (selectedIds: number[]) => {
    setSelectedFilters(selectedIds)
  }

  return (
    <>
    <input type="file" onChange={handleFileChange} />
    <button onClick={handleUpload} disabled={isUploading} className='h-[30px] bg-purple-600 w-[200px] text-white border rounded-full'>
        {isUploading ? 'Uploading...' : 'Upload File'}
      </button>
    <div className="flex justify-center px-5 py-3">
      
      <div className="w-[100vw] h-[100vh] border shadow-lg rounded-md">
        {/* Header */}
        <div className="h-[60px] bg-gray-300 flex justify-center items-center shadow-sm">
          <div className="w-[20%] flex justify-center text-[25px]  text-gray-600">Filter</div>
          <div className="h-full w-[1px] bg-gray-400" />
          <div className="w-[20%] flex justify-center text-[25px] text-gray-600">Text</div>
          <div className="h-full w-[1px] bg-gray-400" />
          <div className="w-[60%] flex justify-center text-[25px] text-gray-600">Pdf View</div>
        </div>

        {/* Body */}
        <div className="flex bg-gray-50 h-[620px]   ">
          {/* Left Section */}
           <FilterContents onFilterChange={handleFilterChange}/>

          {/* Divider */}
          <div className="h-full w-[2px] bg-gray-400" />

          {/* Right Section */}
          
            <Content selectedFilters={selectedFilters}/>

            <div className="h-full w-[2px] bg-gray-400" />

            <div style={{ width:"60%" }}>
            <HighlightKeywordsExample fileUrl="/Lease Example 2 111 Rainham Road.pdf" pageNumber={1} content='Notes on the Official Copy' />

            </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default ContentFilterView;
