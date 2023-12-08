import React from 'react';
import axios from 'axios';
import "./filedeletebutton.css"

const FileDeleteButton = ({ fileId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9000/files/${fileId}`);
      onDelete(fileId); // Callback to update the parent component's state after deletion
      alert('File deleted successfully');
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Error deleting file. Please try again.');
    }
  };

  return (
    <button onClick={handleDelete} className='delete_button'>
      Delete
    </button>
  );
};

export default FileDeleteButton;
