import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const handleClick = (value)=>{
    setInput(input + value);
  };
  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly/>
      <br/><br/>
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("/")}>/</button>
      <br/>
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("*")}>*</button>
      <br />
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("-")}>-</button>
      <br />
      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={clearInput}>C</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => handleClick("+")}>+</button>
    </div>
  );
}

export default Calculator;