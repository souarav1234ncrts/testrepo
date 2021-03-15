import axios from "axios";
import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { URL } from "../config/url";

function Login() {
  const history = useHistory();
  const [value, setValue] = useState({
    username: "",
    password: "",
    error: false,
  });

  const { username, password, error } = value;
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/signin`, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
          setValue({ ...value, error: true });
        } else {
          sessionStorage.setItem("JWT", response.data.token);
          history.push("/dashboard");
        }
      });
  };

  const form = () => {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Log IN</h1>
        <div
          className="card"
          style={{
            height: "100px",
            width: "300px",
            marginTop: "100px",
            marginLeft: "400px",
          }}
        >
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              id="email"
              value={username}
              onChange={handleChange("username")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="pwd"
              onChange={handleChange("password")}
              value={password}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <h5>
            <Link to="/signup">Dont have an account?</Link>
          </h5>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={clickSubmit}
          >
            Submit
          </button>
        </div>
      </>
    );
  };

  const errorMessage = () => {
    return (
      <>
        {error ? (
          <div class="alert alert-danger" role="alert">
            Invalid username or password
          </div>
        ) : null}
      </>
    );
  };
  return (
    <div>
      {errorMessage()}
      {form()}
    </div>
  );
}

export default Login;
