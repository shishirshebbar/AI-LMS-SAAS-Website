import React, { useState } from "react";

function Testitem({ test, userselectedoption }) {
  const [selectedoption, setselectedoption] = useState(null);

  if (!test) return null; // Prevent rendering if `test` is undefined

  return (
    <div className="mt-10 p-5">
      <h2 className="font-medium text-2xl text-center">
        {test?.questionText || "No question available"}
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {test?.options?.map((option, index) => (
          <h2
            key={index}
            onClick={() => {
              setselectedoption(option);
              userselectedoption(option); // Pass the full option text to the parent
            }}
            className={`w-full border rounded-full p-3 px-5 bg-gray-300 text-center text-lg hover:bg-gray-500 cursor-pointer ${
              selectedoption === option &&
              "bg-primary text-white hover:bg-primary"
            }`}
          >
            {option}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Testitem;
