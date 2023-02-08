import React, { useState } from 'react';

const CountSvg = ({ count, increasedBy }:any) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const handleChange = (e) => {
      setFile(e.target.files[0]);
      setLoading(true);
    };
  
    const handleUpload = async () => {
      // perform file upload logic here
      // ...
      
      setLoading(false);
      setSuccess(true);
    };
  
    return (
      <div className="flex items-center justify-center h-64">
        {success ? (
          <div className="flex items-center text-green-500">
            <i className="fas fa-check-circle fa-2x mr-2 animate-bounce"></i>
            <span className="text-xl font-medium animate-bounce">
              File Uploaded Successfully!
            </span>
          </div>
        ) : loading ? (
          <div className="flex items-center text-gray-500">
            <i className="fas fa-spinner fa-pulse fa-2x mr-2"></i>
            <span className="text-xl font-medium">Loading...</span>
          </div>
        ) : (
          <div>
            <label className="bg-gray-300 px-5 py-3 rounded-lg text-gray-700 hover:bg-gray-400 hover:text-white cursor-pointer">
              <i className="fas fa-upload fa-2x mr-2"></i>
              <span className="text-xl font-medium">Select a file to upload</span>
              <input
                type="file"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </div>
        )}
      </div>
    );
};

export default CountSvg;
