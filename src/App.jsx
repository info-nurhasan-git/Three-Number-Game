import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);

  const arr = [22, 66, 88];

  const generateNumbers = () => {
    const randomNumbers = [
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
    ];

    setNumbers(randomNumbers);
  };

  const isWin =
    arr.length === numbers.length &&
    arr.every((num, index) => num === numbers[index]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center animate-pulse">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          🎲 Lucky Number Game
        </h1>

        <div className="mb-4">
          <p className="text-gray-500 text-sm">Target Numbers</p>
          <h2 className="text-2xl font-bold text-indigo-600">
            {arr.join(", ")}
          </h2>
        </div>

        <div className="mb-6">
          <p className="text-gray-500 text-sm">Generated Numbers</p>
          <h2 className="text-2xl font-bold text-pink-600 transition-all duration-500">
            {numbers.length ? numbers.join(", ") : "Click Generate"}
          </h2>
        </div>

        {numbers.length > 0 && (
          <div
            className={`mb-6 text-2xl font-bold animate-bounce ${
              isWin ? "text-green-500" : "text-red-500"
            }`}
          >
            {isWin ? "🎉 You Win!" : "😢 You Lose!"}
          </div>
        )}

        <button
          onClick={generateNumbers}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
          Generate Numbers
        </button>
      </div>
    </div>
  );
}

export default App;