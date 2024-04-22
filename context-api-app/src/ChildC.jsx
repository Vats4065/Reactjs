import React from "react";
import { data, data1 } from "./App";
import { useContext } from "react";

function ChildC() {
  const name = useContext(data);
  const age = useContext(data1);
  return (
    <>
      <h1>
        {name}, {age}
      </h1>
    </>
  );
}

export default ChildC;

{
  /* <data.Consumer>
  {(name) => {
    return (
      <data1.Consumer>
        {(age) => {
          return (
            <h1>
              {name}, {age}
            </h1>
          );
        }}
      </data1.Consumer>
    );
  }}
</data.Consumer> */
}
