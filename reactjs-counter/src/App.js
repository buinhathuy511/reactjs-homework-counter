import "./App.css";
import React, { useState } from "react";
import ComponentA from "./components/ComponentA";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <h1>ReactJS Homework</h1>
      <ComponentA count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
