import React, { useState } from 'react';
import axios from 'axios';
import FileList from './FileList';
import { useUser } from '../UserContext';
import "./uploadfile.css"

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const { userId } = useUser();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handleSubmit = async () => {
    if (!userId) {
      alert('Please log in to upload a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post(`http://localhost:9000/upload/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };


  return (
    <>
      <div className='upload_file'>
        <div className='input_file'>
          <h1>Upload Your File Here</h1>
          <input type="file" onChange={handleFileChange} className='file_inputs' />
          <button onClick={handleSubmit} className='upload_button'>Upload File</button>
        </div>
        <div className='list_components'>
          <FileList />
        </div>

      </div>
    </>
  );
};

export default UploadFile;
