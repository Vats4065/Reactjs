import React from "react";
import { useParams, useLocation } from "react-router-dom";


function User() {
  const { fname, lname } = useParams();
  const location = useLocation();
  
  return (
    <>
      <h1>
        Hello {fname} {lname}
      </h1>
      <p className="fs-3"> Your in : {location.pathname}</p>

      <div className="d-flex">
        {location.pathname === `/user/vatsal/lakhani` ? (
          <button
            className="btn btn-primary"
            onClick={() => alert(`good morning ${fname} ${lname}`)}
          >
            Click Me
          </button>
        ) : null}
        
      </div>
    </>
  );
}

export default User;
