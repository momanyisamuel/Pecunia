import React, { useEffect, useState } from "react";
import applicant from "../../api/applicant";
import download from "downloadjs";

const Documents = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await applicant.get(`/api/document/getAllFiles`);
        setErrorMsg("");
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await applicant.get(`/api/document/download/${id}`, {
        responseType: "blob",
      });
      const split = path.split("/");
      const filename = split[split.length - 1];
      setErrorMsg("");
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("Error while downloading file. Try again later");
      }
    }
  };
  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr className="border">
          <th className="px-4 py-2 text-gray-700 font-semibold text-sm">Name</th>
          <th className="px-4 py-2 text-gray-700 font-semibold text-sm">Description</th>
          <th className="px-4 py-2 text-gray-700 font-semibold text-sm">Download</th>
        </tr>
      </thead>
      <tbody>
        {filesList.map((file) => (
          <tr key={file.name} className="bg-white">
            <td className="border px-4 py-2 text-sm text-gray-800">{file.title}</td>
            <td className="border px-4 py-2 text-sm text-gray-800">{file.description}</td>
            <td className="border px-4 py-2 text-sm text-gray-800">
              <a
                href="#/"
                onClick={() => downloadFile(file._id, file.file_path, file.file_mimetype)}
                className="text-blue-600"
              >
                Download
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Documents;
