import React, { useState } from "react";
import "./App.css";
import Cell from "./Cell";
import CounterContext from "./CounterContext";

// Grid component
const Grid = () => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      <div>
        <h1>count: {counter}</h1>
        <div className="grid">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </CounterContext.Provider>
  );
};

export default Grid;
