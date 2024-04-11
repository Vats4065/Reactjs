import { useState } from "react";

export default function TextForm(props) {
  const [data, setData] = useState(props.dname);

  function setUpper() {
    let newName = data.toUpperCase();
    setData(newName);
  }

  function setLow() {
    let newCname = data.toLowerCase();
    setData(newCname);
  }

  return (
    <>
      <div className="mb-3 ">
        <label
          htmlFor="mytext"
          className={`form-label text-${props.text === "light" ? "dark" : "white"}
        `}
        >
          {props.heading}
        </label>

        <textarea
          className={`form-control bg-${props.textareaColor}  opacity-${props.text === "light" ? "100" : "50"} text-${
            props.text === "light" ? "dark " : "white"
          }`}
          id="mybox"
          rows="3"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      </div>
      <button
        className={`btn ${
          props.mode === "dark" ? "btn-success" : "btn-outline-success"
        } me-5 mt-2`}
        onClick={setUpper}
      >
        Convert into upper case
      </button>
      <button
        className={`btn ${
          props.mode === "dark" ? "btn-success" : "btn-outline-success"
        } mt-2`}
        onClick={setLow}
      >
        Convert into Lower case
      </button>
      <h1 className={`mt-3 text-${props.text === "light" ? "dark" : "white"}`}>
        Your Name is : {data}
      </h1>

      <h3 className={`mt-2 text-${props.text === "light" ? "dark" : "white"}`}>
        {data.split(" ").length} words and {data.length}
      </h3>
    </>
  );
}
