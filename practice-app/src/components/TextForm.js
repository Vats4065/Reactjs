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
      <div class="mb-3">
        <label for="mytext" class="form-label">
          {props.heading}
        </label>

        <textarea
          className="form-control"
          id="mybox"
          rows="3"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-outline-success me-5 mt-2" onClick={setUpper}>
        Convert into upper case
      </button>
      <button className="btn btn-outline-success mt-2" onClick={setLow}>
        Convert into Lower case
      </button>
      <h1 className="mt-3">Your Name is : {data}</h1>

      <h3 className="mt-2">
        {data.split(" ").length} words and {data.length}
      </h3>
    </>
  );
}
