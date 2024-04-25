import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Menu() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <>
      <section className="bg-light py-1 fs-3 ">
        <div className=" bg-light container-fluid  mb-3 py-1 d-flex justify-content-between align-items-center">
          <nav className="   ">
            <NavLink exact className="text-decoration-none text-dark " to="/">
              Home
            </NavLink>

            <NavLink
              exact
              className="text-decoration-none text-dark  ms-5"
              to="/product"
            >
              Product
            </NavLink>
          </nav>
          <div>
            <NavLink
              exact
              className="text-decoration-none text-dark fs-4"
              to="/cart"
            >
              My bag {cartProducts.length}
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
