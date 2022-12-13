import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  function onClickButton(): void {
    setColor("blue");
  }

  return (
    <div>
      <button style={{ backgroundColor: `${color}` }} onClick={onClickButton}>
        Change to {color === "red" ? "blue" : "red"}
      </button>
    </div>
  );
}

export default App;
