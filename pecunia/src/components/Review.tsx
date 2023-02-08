import React, { useState } from "react";

function Review() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, selectedOption);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full inline-flex flex-row justify-center align-middle bg-[#2D5BFF] text-left text-white shadow-sm rounded-sm px-2 py-1 min-w-[30px] min-h-[30px]"
      >
        <span className="block fill-current mr-2"></span>
        <span className="">Review application</span>
      </button>
      {isOpen && (
        <div className="w-full absolute right-0 z-10 bg-white py-4 px-3 rounded shadow">
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount" className="text-sm block mb-2">
              Approved amount
            </label>
            <input
              name="amount"
              type="number"
              className="block px-4 py-1 mb-2 border border-gray-400 rounded"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="mb-2">
              <p className="text-sm text-gray-700 mb-2">Decision</p>
              <input
                type="radio"
                id="option1"
                name="options"
                value="approved"
                checked={selectedOption === "approved"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label htmlFor="option1" className="ml-2 text-sm">
                Approved
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="option2"
                name="options"
                value="denied"
                checked={selectedOption === "denied"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label htmlFor="option2" className="ml-2 text-sm">
                Denied
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm px-2 py-1 shadow-sm rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Review;
