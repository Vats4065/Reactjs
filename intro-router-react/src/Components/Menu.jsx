import React from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <>
      <section className="bg-dark">
        <div className="container ">
          <nav className="d-flex justify-content-around py-1 fs-4">
            <NavLink
              exact
              activeClassName="active_class"
              className="text-decoration-none "
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              exact
              activeClassName="active_class"
              className="text-decoration-none "
              to="/user"
            >
              User
            </NavLink>


            <NavLink
              exact
              activeClassName="active_class"
              className="text-decoration-none "
              to="/search"
            >
              Search
            </NavLink>

            <NavLink
              exact
              activeClassName="active_class"
              className="text-decoration-none "
              to="/service"
            >
              Service
            </NavLink>

            <NavLink
              exact
              activeClassName="active_class"
              className="text-decoration-none "
              to="/about"
            >
              About Us
            </NavLink>

            <NavLink
              className="text-decoration-none "
              exact
              activeClassName="active_class"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Menu;
