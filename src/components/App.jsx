imimport React, { useState } from "react";

function App() {
  const [inlineText, setInlineText] = useState("Hello");
  const [isMouseOver, setIsMouseOver] = useState(false)
  function submitName() {
    setInlineText("Submitted!");
  }

  function handleMouseOver(){
    setIsMouseOver(true)
  }
  function handleMouseOut(){
    setIsMouseOver(false)
  }

  return (
    <div className="container">
      <h1>{inlineText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMouseOver ? "black":"white"}} type="button"
     onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} onClick={submitName}>
        Submit
      </button>
    </div>
  );
}

export default App;
