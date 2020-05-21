import React, { useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [heading, setHeading] = useState("");

  function handleOnChange(event) {
    setString(event.target.value);
  }

  function handleOnClick(event) {
    setHeading(string);

    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <form>
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick={handleOnClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
