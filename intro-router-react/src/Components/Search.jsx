import React, { useState } from "react";
import Sresult from "./Sresult";

function Search() {
  const [img, setImg] = useState("");
  const inputevent = (e) => {
    const data = e.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <>
      <input
        type="text"
        className="mt-3 ms-3 d-flex border-3 border-info bg-secondary fw-bold font-monospace text-white form-control w-25"
        placeholder="search for anything"
        value={img}
        onChange={inputevent}
      />
      <Sresult name={img}></Sresult>
    </>
  );
}

export default Search;
