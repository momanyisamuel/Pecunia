import React, { useState } from "react";
import applicant from "../../api/applicant";

export default function AddProgramme() {
  const [visible, setVisible] = useState(false);
  const [programmeData, setProgrammeData] = useState({
    programName: "",
    description: "",
    value: "",
    startDate: "",
    endDate: "",
  });

  const showModal = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleChange = (event: any) => {
    setProgrammeData({
      ...programmeData,
      [event.target.name]: event.target.value,
    });
  };

  const submitProgramme = () => {
    applicant
      .post("api/programme", programmeData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    setProgrammeData({
      programName: "",
      description: "",
      value: "",
      startDate: "",
      endDate: "",
    });

    setVisible(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="inline-flex flex-row justify-center align-middle bg-[#2D5BFF] text-left text-white shadow-sm rounded-sm px-2 py-1 min-w-[30px] min-h-[30px]"
      >
        <span className="block fill-current mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </span>
        <span className="">Create Programme</span>
      </button>
      {visible && (
        <div className="flex justify-center items-center h-screen">
          <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <form className="px-4 py-5 sm:p-6" onSubmit={submitProgramme}>
                <div>
                  <label
                    htmlFor="programme-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Programme Name
                  </label>
                  <input
                    id="programme-name"
                    className="w-full mt-2 form-input"
                    type="text"
                    placeholder="Programme Name"
                    name="programName"
                    value={programmeData.programName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="w-full mt-2 form-textarea"
                    placeholder="Description"
                    name="description"
                    value={programmeData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="value"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Value
                  </label>
                  <input
                    id="value"
                    className="w-full mt-2 form-input"
                    type="number"
                    placeholder="Value"
                    name="value"
                    value={programmeData.value}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="start-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    id="start-date"
                    className="w-full mt-2 form-input"
                    type="date"
                    name="startDate"
                    value={programmeData.startDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="end-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    id="end-date"
                    className="w-full mt-2 form-input"
                    type="date"
                    name="endDate"
                    value={programmeData.endDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 flex it">
                  <button className="" onClick={handleClose}>
                    close
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
