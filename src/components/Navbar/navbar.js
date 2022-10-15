import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded fixed-top">
        <Link className="btn btn-link navbar-brand" to="/react-e-store">
          Robert's One Stop Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="btn btn-link nav-link" to="/react-e-store">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-link nav-link"
                to="/react-e-store/category/groceries"
              >
                Groceries
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-link nav-link"
                to="/react-e-store/category/household"
              >
                Household
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-link nav-link"
                to="/react-e-store/category/garden"
              >
                Garden
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-link nav-link"
                to="/react-e-store/checkout"
              >
                Cart
              </Link>
            </li>
          </ul>

          <Link
            className="cart btn btn-outline-success my-2 my-sm-0"
            to="/react-e-store/checkout"
          >
            Cart <span>{props.cartItemsCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
