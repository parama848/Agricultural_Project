import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="w-full flex justify-center px-4 mt-9 mb-3">
      <p className="text-center text-gray-600 text-xl sm:text-2xl">
        {text1}{" "}
        <span className="text-green-500 font-semibold text-xl sm:text-2xl">
          {text2}
        </span>
      </p>
    </div>
  );
};

export default Title;
