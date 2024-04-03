import React from "react";
import { useState } from "react";

function MagicBall({ answers }) {
  const [ballAnswer, setBallAnswer] = useState("Ask, then Click me!");

  const handleBallAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setBallAnswer(answers[randomIndex]);
  };

  return (
    <div>
      <div
        style={{
          height: "450px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "cursive",
              fontWeight: "large",
              fontSize: "50px",
              color: "black",
            }}
          >
            Magic Ball!
          </h2>
        </div>

        <button
          style={{
            backgroundColor: "yellow",
            color: "black",
            width: "25%",
            height: "50%",
            borderRadius: "100%",
            fontSize: "40px",
            fontWeight: "large",
            fontFamily: "cursive",
            border: "white",
          }}
          onClick={handleBallAnswer}
        >
          {ballAnswer}
        </button>
      </div>
    </div>
  );
}
export default MagicBall;
