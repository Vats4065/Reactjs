import { useState } from "react";
import "./App.css";

const date = new Date();
console.log(date);

function App() {
  const state = useState();
  console.log(state);

  let [count, setCount] = useState(date.toLocaleTimeString());

  const IncNum = () => {
    let newdate = new Date().toLocaleTimeString();
    setCount(newdate);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click ME</button>
    </>
  );
}

export default App;
