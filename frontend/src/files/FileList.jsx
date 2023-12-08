import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import FileDeleteButton from './FileDeleteButton'; // Adjust the import path accordingly
import "./filelist.css"
const FileList = () => {
  const [files, setFiles] = useState([]);
  const { userId } = useUser();

  const handleDelete = (deletedFileId) => {
    // Remove the deleted file from the local state
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== deletedFileId));
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/files/${userId}`);
        setFiles(response.data.files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    if (userId) {
      fetchFiles();
    }
  }, [userId,files]);

  return (
    <div className="list">
      <h2>List of your all files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.file_upload}
            <FileDeleteButton fileId={file.id} onDelete={handleDelete}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
