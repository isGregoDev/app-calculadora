import { useState } from "react";
import CalculatorButton from "./components/CalculatorButton";
import Footer from "./components/Footer";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttonValues = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-4xl font-bold text-white mb-4">App Calculadora</h1>
      <div className="bg-gray-900 p-4 rounded shadow-lg w-80 mt-4">
        <div className="mb-4 text-right text-2xl font-mono h-12 text-orange-400 transition-all duration-300 ease-in-out">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttonValues.map((item) => (
            <CalculatorButton
              key={item}
              value={item}
              onClick={item === "=" ? handleCalculate : handleClick}
              aria-label={`Botón ${item}`}
            />
          ))}
          <button
            className="col-span-4 bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transform hover:scale-105 transition-transform duration-200 ease-in-out"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
