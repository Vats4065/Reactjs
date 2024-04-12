import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function GoBack() {
  const history = useHistory();

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
    </>
  );
}

export default GoBack;
