import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResponse, setUploadResponse] = useState(null);

  const handleFileChange = (e) => {
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
      const response = await axios.post('http://10.22.0.3:7070/swagger-ui/index.html#/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      if(response.status===200){
        alert('hlw-------------------------------->')
      }
      setUploadResponse(response.data); // Store the response from the server
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <h3>File Details:</h3>
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </div>
      )}
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload File'}
      </button>
      {uploadResponse && <div>Upload Response: {JSON.stringify(uploadResponse)}</div>}
    </div>
  );
};

export default FileUploader;