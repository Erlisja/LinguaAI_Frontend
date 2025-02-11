import React from "react";

const Progress = ({ value, max = 100 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-500 h-4 rounded-full transition-all"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};

export default Progress;
