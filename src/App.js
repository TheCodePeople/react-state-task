import "./App.css";
import { useState } from "react";
const answers = [
  "Yes",
  "No",
  "Maybe",
  "Try again",
  "Ask later",
  "Absolutely",
  "Absolutely not",
  "The stars say yes",
  "Outlook not so good",
  "Definitely",
];

function App() {
  const [data, setData] = useState("Click me plz!");
  const random = () => {
    let rand = Math.floor(Math.random() * answers.length);
    setData(answers[rand]);
  };

  return (
    <div className="flex justify-center items-center flex-col p-20 gap-24">
      <h1 className="text-5xl font-bold">Magic Ball</h1>
      <button
        className="bg-black h-96 w-96 rounded-full text-white text-xl font-bold"
        onClick={random}
      >
        {data}
      </button>
    </div>
  );
}

export default App;
