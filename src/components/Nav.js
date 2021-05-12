import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";

function Nav({ user }) {
  let history = useHistory();
  const logout = async () => {
    await axios.post("/logout").then((response) => {
      console.log(response);
    });
    history.push("/login");
  };
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Company name
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap d-flex ">
          <a className="nav-link p-2" href="/profile">
            {user?.first_name} {user?.last_name}
          </a>
          <a className="nav-link" onClick={logout}>
            Sign out
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
