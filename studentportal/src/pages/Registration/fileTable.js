import React from 'react';

const FileTable = (props) => {

  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr className="bg-gray-300">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.files?.map((file) => (
          <tr key={file.name} className="bg-white">
            <td className="border px-4 py-2">{file.name}</td>
            <td className="border px-4 py-2">{file.description}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FileTable;