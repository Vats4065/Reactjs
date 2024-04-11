import { React, useState } from "react";
import "./App.css";



function App() {
  const [color, setColor] = useState("#0b5ed7");

  return (
    <>
      <div className="w-100 h-full " style={{ backgroundColor: color }}>
        <div className="fixed-bottom main container d-flex text-center jutify-content-center justify-content-between bg-white badge py-3 mb-5 px-5">
          <button
            onClick={() => setColor("#0b5ed7")}
            className="btn btn-primary badge px-4 py-1 fs-4 shadow-lg "
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#ffc107")}
            className="btn btn-warning badge px-4 py-1 fs-4 shadow-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#6c757d")}
            className="btn btn-secondary badge px-4 py-1 fs-4 shadow-lg"
          >
            Gray
          </button>
          <button
            onClick={() => setColor("#0dcaf0")}
            className="btn btn-info badge px-4 py-1 fs-4 shadow-lg"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#dc3545")}
            className="btn btn-danger badge px-4 py-1 fs-4 shadow-lg"
          >
            Red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
