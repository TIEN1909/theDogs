import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="header-container">
        <Link>
          <img src="../logo-dog.png" />
        </Link>
        <div className="header">
          <ul className="header-list">
            <li>
              {" "}
              <Link className="header-item" to="/">
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="header-item" to="dogs">
                {" "}
                Dogs
              </Link>
            </li>
            <li>
              {" "}
              <Link className="header-item" to="checkout">
                Cart
              </Link>
            </li>
            <li>
              {" "}
              <Link className="header-item" to="favorite">
                Favorite
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
