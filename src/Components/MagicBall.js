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
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "Bolder",
            fontSize: "10vh",
            marginBottom: "15vh",
          }}
        >
          Magic Ball!
        </h1>
        {/* Button */}
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "25%",
            height: "50%",
            borderRadius: "100%",
            fontSize: "250%",
            fontWeight: "bold",
            boxShadow: `0px 0px 30px 6px rgba(0,0,0,0.75)`,
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
