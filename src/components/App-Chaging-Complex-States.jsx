import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleOnChange(event) {
    var value = event.target.value;
    var name = event.target.name;
    console.log(value);
    console.log(name);
    setFullName(function prevValue(pv) {
      console.log(prevValue);

      if (name === "fName") {
        return { fName: value, lName: pv.lName };
      } else if (name === "lName") {
        return { fName: pv.fName, lName: value };
      }
    });

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName}
         {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleOnChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleOnChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default App;
