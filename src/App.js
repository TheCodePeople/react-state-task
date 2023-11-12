import "./App.css";
import MagicBall from "./components/MagicBall";

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
      <h1 className="title">Magic Ball</h1>
      <MagicBall answers={answers} />
    </div>
  );
}

export default App;
