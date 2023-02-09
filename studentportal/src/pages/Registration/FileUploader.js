import React, { useEffect, useState } from "react";
import applicant from "../../api/applicant";
import FileTable from "./fileTable";

const FileUploader = (props) => {
  const [visible, setVisible] = useState(false);
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
   
    setFormData({
      ...formData,
      user: currentUser.user._id,
      programme: props.programme,
    });
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const currentUser = JSON.parse(localStorage.getItem("user"));


  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    setIsUploading(true);

    // Create a form data object to send to the server
    const form = new FormData();
    form.append("title", formData.title);
    form.append("programme", formData.programme);
    form.append("user", formData.user);
    form.append("description", formData.description);
    files.forEach((file) => form.append("file", file));

    try {
      await applicant.post("/api/document/upload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
    } catch (error) {
      console.error(error);
    } finally {
      props.handleFileData(files)
      setIsUploading(false);
      setFiles([]);
      setVisible(false)
    }
  };

  return (
    <>
      <div className="div">
      <button
        className="text-[#2D5BFF] flex items-center text-sm mb-2"
        onClick={showModal}
        type="button"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </span>
        Add document
      </button>
      <FileTable files={props?.files}/>
      </div>

      {visible && (
        <div className="flex justify-center items-center h-screen">
          <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={handleClose}
              ></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="p-8">
                <div className="w-full mb-4">
                  <div className="w-full">
                    <input
                      className="block border border-gray-300 shadow-inner py-3 px-2 rounded w-full mb-3"
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Name"
                    />
                    <input
                      className="block border border-gray-300 shadow-inner py-3 px-2 rounded w-full mb-3"
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Description"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      className={`block border border-gray-300 shadow-inner py-3 px-2 rounded w-full mb-3 ${
                        isUploading ? "bg-gray-300" : ""
                      }`}
                      type="file"
                      multiple
                      onChange={handleFileChange}
                    />
                    {isUploading && (
                      <div className="spinner mt-2">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <button
                    className="nline-flex flex-row justify-center align-middle bg-[#2D5BFF] text-left text-white shadow-sm rounded-sm px-2 py-1 min-w-[30px] min-h-[30px]"
                    disabled={isUploading || files.length === 0}
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                  <ul className="list-none">
                    {files.map((file) => (
                      <li key={file.name} className="mb-2">
                        <a href="#" className="text-blue-600">
                          {file.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <style jsx>{`
                  .spinner {
                    display: inline- block;
                    position: relative;
                    width: 24px;
                    height: 24px;
                  }
                  .spinner .bounce1,
                  .spinner .bounce2,
                  .spinner .bounce3 {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: #333;
                    opacity: 0.6;
                    position: absolute;
                    top: 0;
                    left: 0;

                    -webkit-animation: bounce 2s infinite ease-in-out;
                    animation: bounce 2s infinite ease-in-out;
                  }

                  .spinner .bounce1 {
                    -webkit-animation-delay: -0.32s;
                    animation-delay: -0.32s;
                  }

                  .spinner .bounce2 {
                    -webkit-animation-delay: -0.16s;
                    animation-delay: -0.16s;
                  }

                  @-webkit-keyframes bounce {
                    0%,
                    100% {
                      transform: scale(0);
                    }
                    50% {
                      transform: scale(1);
                    }
                  }

                  @keyframes bounce {
                    0%,
                    100% {
                      transform: scale(0);
                    }
                    50% {
                      transform: scale(1);
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileUploader;
