import { useState } from "react";

const MagicBall = ({ answers }) => {
  const [answer, setAnswer] = useState(null);
  const [isNegative, setIsNegative] = useState(false);

  const handleBallClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);

    // check if an answer is negative.
    switch (randomIndex) {
      case 1:
      case 6:
      case 8:
        setIsNegative(true);
        break;
      default:
        setIsNegative(false);
    }

    setAnswer(answers[randomIndex]);
  };

  return (
    <div className="magic-ball-container">
      <div className="magic-ball">
        <div
          onClick={handleBallClick}
          className={`answer ${isNegative ? "negative" : ""}`}
        >
          {answer ? answer : "Click Me!"}
        </div>
      </div>
    </div>
  );
};

export default MagicBall;
