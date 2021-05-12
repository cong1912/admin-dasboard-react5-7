import axios from "axios";
import Cookies, { set } from "js-cookie";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Menu from "./Menu";
import Nav from "./Nav";
function Layout(props) {
  const [user, setUser] = useState(null);
  let history = useHistory();
  useEffect(async () => {
    const result = await axios
      .get("user")
      .then((result) => {
        setUser(result.data);
      })
      .catch(function (error) {
        history.push("/login");
      });
  }, []);
  return (
    <div>
      <Nav user={user} />
      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="table-responsive">{props.children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
