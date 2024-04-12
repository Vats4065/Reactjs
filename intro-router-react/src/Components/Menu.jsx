import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <Link to="/">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </>
  );
}

export default Menu;
