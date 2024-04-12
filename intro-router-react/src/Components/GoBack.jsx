import React from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
function GoBack() {
  const history = useHistory();
  const location = useLocation();
  console.log(history);
  console.log(location.pathname);

  return (
    <>
      <button
        className="btn btn-info ms-3 text-white fw-bolder "
        onClick={() => history.goBack()}
      >
        goBack
      </button>
      <button
        className="btn btn-info ms-3 text-white fw-bolder "
        onClick={() => history.goForward()}
      >
        goNext
      </button>

      {location.pathname === `/` ? null : (
        <button
          className="btn btn-info ms-3 text-white fw-bolder "
          onClick={() => history.push("/")}
        >
          goHome
        </button>
      )}
    </>
  );
}

export default GoBack;
