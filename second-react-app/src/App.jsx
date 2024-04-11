import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import data from "./data";
import Heading from "./Heading";

function App() {
  return function ncard(val) {
    return (
      <Card
        key={val.id}
        imgclick={val.imgclick}
        imgsrc={val.imgsrc}
        title={val.title}
        sn={val.sn}
        link={val.link}
      />
    );
  };
}

export default App;
