import "./App.css";
import React from "react";
import MagicBall from "./component/MagicBall";
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
  return (
    <div>
      <MagicBall answers={answers} />
    </div>
  );
}

export default App;
