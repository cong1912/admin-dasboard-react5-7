import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to={"/users"}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <span data-feather="home"></span>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/products"}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <span data-feather="home"></span>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/orders"}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <span data-feather="home"></span>
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
