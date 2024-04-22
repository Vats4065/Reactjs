import { createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext();
function App() {
  const name = "vatsal lakhani";
  const age = 21;
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
