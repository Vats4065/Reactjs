import React from "react";
import propTypes from "prop-types";

function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg px-5 navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.onePage}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.secondPage}
                </a>
              </li>
            </ul>
            <div className=" navbar-brand form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  onePage: propTypes.string.isRequired,
  secondPage: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Enter Title",
  onePage: "Enter One Page",
  secondPage: "Enter Second Page",
};

export default Navbar;
