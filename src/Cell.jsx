import React, { useContext, useState } from "react";
import "./App.css";
import CounterContext from "./CounterContext";

const Cell = () => {
  const [isOn, setIsOn] = useState(false); // State to track if the cell is turned on or off

  const { counter, setCounter } = useContext(CounterContext);

  const toggleCell = () => {
    setIsOn(!isOn); // Toggle the state when the cell is clicked

    if (!isOn) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div
      className="cell"
      onClick={toggleCell}
      style={{ backgroundColor: isOn ? "black" : "white" }}
    ></div>
  );
};

export default Cell;
