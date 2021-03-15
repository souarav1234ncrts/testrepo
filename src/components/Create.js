import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";
import { URL } from "../config/url";

function Create() {
  const [value, setValue] = useState({
    productName: "",
    productId: "",
    productPrice: 0,
    productQuantity: 0,
  });
  const { productName, productId, productPrice, productQuantity } = value;
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/createproduct`, {
        productName: productName,
        productId: productId,
        productQuantity: productQuantity,
        productPrice: productPrice,
      })
      .then((response) => {
        console.log(response.data);
        <Redirect to="/" />;
      });
  };

  const body = () => {
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
          <h1 style={{ textAlign: "center" }}>Create product</h1>
          <div className="form-group">
            <label htmlFor="username">product name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ProductName"
              value={productName}
              onChange={handleChange("productName")}
            />

            <label htmlFor="email">product Id:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter product id "
              id="email"
              value={productId}
              onChange={handleChange("productId")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Product Price:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product price"
              id="pwd"
              value={productPrice}
              onChange={handleChange("productPrice")}
            />
            <label htmlFor="pwd">Product Quantity:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product"
              id="pwd"
              value={productQuantity}
              onChange={handleChange("productQuantity")}
            />
          </div>
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
  return <div>{body()}</div>;
}

export default Create;
