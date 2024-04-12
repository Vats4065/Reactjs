import { useState } from "react";
import "./App.css";
// import User from "./components/Class";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.className = "bg-secondary";
      document.getElementsByTagName("button").className = "btn btn-success";
      document.textContent = "dark";
      handleAlert("DrakMode has been switched", "success");
    } else {
      setMode("light");
      document.body.className = "bg-light";
      document.getElementsByTagName("button").className =
        "btn btn-outline-success";
      document.textContent = "light";
      handleAlert("lightMode has been switched", "success");
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

      <Alert alert={alert}></Alert>

      <div className="container mt-4 " mode={mode}>
        <TextForm
          textareaColor={mode}
          text={mode}
          heading="Enter Text"
          dname="vatsal"
          mode={mode}
          handleAlert={handleAlert}
        />
      </div>
      {/* <User /> */}
    </>
  );
}

export default App;
