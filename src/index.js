import React, { useState } from "react";
import ReactDOM from "react-dom";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";
import "./styles.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleCharDelete = e => {
    const position = e.target.dataset.index;
    const stringToArray = inputValue.split("");
    stringToArray.splice(position, 1);
    setInputValue(stringToArray.join(""));
  };

  return (
    <div className="App">
      <input
        onChange={event => setInputValue(event.target.value)}
        value={inputValue}
      />
      <p>{`Input length: ${inputValue.length}`}</p>
      <ValidationComponent length={inputValue.length} />
      {inputValue.split("").map((item, index) => (
        <CharComponent
          item={item}
          index={index}
          handleClick={handleCharDelete}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
