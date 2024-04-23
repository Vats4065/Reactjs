import React, { useReducer } from "react";

const initalState = 0;

const reducer = (state, action) => {
  console.log(state, " ", action);
  if (action.type === "increment") {
    return state + 1;
  } else {
    return state - 1;
  }

};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  console.log(state);

  return (
    <>
      <p>{state}</p>
      <div className="IncDec">
        
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          inc
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          dec
        </button>
      </div>
    </>
  );
};

export default UseReducer;
