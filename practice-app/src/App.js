import { useState } from "react";
import "./App.css";
import User from "./components/Class";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    
      document.body.className = "bg-secondary";
      document.getElementsByTagName("button").className = "btn btn-success";
      document.textContent = "dark"
    } else {
      setMode("light");
      document.body.className = "bg-light";
      document.getElementsByTagName("button").className = "btn btn-outline-success";
      document.textContent = "light"
    }
  };

  return (
    <>
      <Navbar
        mode={mode}
        title="Home"
        onePage="AboutUs"
        secondPage="ContactUs"
        toggleMode={toggleMode}
       
      />
      <div className="container mt-4 "  mode={mode}>
        <TextForm textareaColor={mode} text={mode} heading="Enter Text" dname="vatsal"  mode={mode} />
      </div>
      {/* <User /> */}
    </>
  );
}

export default App;
