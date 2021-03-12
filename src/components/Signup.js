import axios from "axios";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signUp } from "../api/authApi";
import { URL } from "../config/url";

function Signup() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/signup`, {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        <Redirect to="/" />;
      });
  };
  const signUp = () => {
    return (
      <>
        <div
          style={{
            height: "100px",
            width: "300px",
            paddingTop: "100px",
            marginLeft: "400px",
          }}
        >
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={handleChange("username")}
            />

            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="pwd"
              value={password}
              onChange={handleChange("password")}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <h5>
            <Link to="/">Already have an account</Link>
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
  return <div>{signUp()}</div>;
}

export default Signup;
