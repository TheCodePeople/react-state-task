import { useState } from "react";
export default function MagicAnswer({ answers }) {
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const randomIndex = () => {
    const random = Math.floor(Math.random() * answers.length);
    setAnswer(answers[random]);
    setIsLoading(true);
  };
  return (
    <div className="magic-ball-container">
      <div className="magic-ball">
        <div
          className="cursor-pointer bg-slate-400 w-96 h-56 flex justify-center items-center rounded-3xl text-4xl"
          onClick={randomIndex}
        >
          {isLoading ? answer : "Click Me!"}
        </div>
      </div>
    </div>
  );
}
