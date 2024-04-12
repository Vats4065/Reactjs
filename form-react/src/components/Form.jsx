import React, { useState } from "react";

function Form(props) {
  const [dis, handleDis] = useState();
  const [data, setData] = useState();
  const changetext = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    handleDis(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData(dis);
  };

  return (
    <>
      <section className="w-100 pt-5">
        <form className="container text-center mx-auto py-5 w-50 shadow-light-lg">
          <h1 className="text-center text-dark my-3">Hello {data} </h1>
          <input
            type="text"
            className="form-control w-25 text-center text-light mx-auto bg-secondary"
            onChange={changetext}
            value={dis}
          />
          <button
            className="btn btn-outline-dark mt-3 rounded-pill py-2 px-5"
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
