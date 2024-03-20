import "./App.css";
import MagicAnswer from "./components/MagicAnswer";

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
    <div className="flex flex-col items-center h-screen justify-center gap-12">
      <h1 className="text-7xl bg-gray-700 rounded-3xl h-80 flex justify-center items-center w-96 text-white ">
        Magic Ball
      </h1>

      <MagicAnswer answers={answers} />
    </div>
  );
}

export default App;
