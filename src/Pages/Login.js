import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";
import cookie from "js-cookie";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("login", {
        email: email,
        password: password,
        withCredentials: true,
      })
      .then(
        function (response) {
          console.log(response);
          cookie.set("token", response.data.token, { expires: 365 });
          cookie.set("user", response.data, { expires: 365 });
          history.push("/");
        },
        { withCredentials: true }
      )
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <main className="form-signin ">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" onClick={handleSubmit}>
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  );
}

export default Login;
