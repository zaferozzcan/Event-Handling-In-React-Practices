import React, { useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [heading, setHeading] = useState("");

  function handleOnChange(event) {
    setString(event.target.value);
  }

  function handleOnClick() {
    setHeading(string);
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleOnClick} type="button">
        Submit
      </button>
    </div>
  );
}

export default App;
