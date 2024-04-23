import React from 'react'
import { decrement, increment } from "./actions/index";
import { useSelector,useDispatch } from "react-redux";


function App() {
  const mystate = useSelector((state)=>state.changenumber)
  const dispatch = useDispatch()
  return (
    <>
     <input type="text" name="" id="" value={mystate}/>
      <div className="IncDec">
        <button className="btn btn-primary" onClick={()=>dispatch(increment())}> inc</button>
        <button className="btn btn-primary" onClick={()=>dispatch(decrement())}>dec</button>
      </div>
    </>
  );
}

export default App;
