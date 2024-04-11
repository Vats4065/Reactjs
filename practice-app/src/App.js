import "./App.css";
import User from "./components/Class";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Home" onePage="AboutUs" secondPage="ContactUs"/>
      <div className="container mt-4">
        <TextForm heading="Enter Text" dname="vatsal"/>
      </div>
      {/* <User /> */}
    </>
  );
}

export default App;
