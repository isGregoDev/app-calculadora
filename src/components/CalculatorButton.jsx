import React from "react";

function CalculatorButton({ value, onClick }) {
  return (
    <button
      className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transform hover:scale-105 transition-transform duration-200 ease-in-out"
      onClick={() => onClick(value)}
      aria-label={`Button ${value}`}
    >
      {value}
    </button>
  );
}

export default CalculatorButton;
