import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { URL } from "../config/url";
import axios from "axios";

function Update() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const [product, setProduct] = useState(null);
  var [img, setImg] = useState("rice");
  var url = ""

  const loadText = () => {
    axios.get(`${URL}/viewproduct`).then((response) => {
      setArray(response.data);
    });
  };
  useEffect(() => {
    loadText();
  }, []);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const getDetails = () => {
    axios.get(`${URL}/viewproductbyid/${text}`).then((response) => {
      setProduct(response.data);
    });
  };
  const updateProduct = () => {
    axios
      .put(`${URL}/updateproduct`, {
        productName: product.productName,
        productId: product.productId,
        productPrice: product.productPrice,
        productQuantity: product.productQuantity,
      })
      .then((response) => {
        alert("product updated successfully");
      });
  };
  const updateChange = (name) => (event) => {
    setProduct({ ...product, [name]: event.target.value });
  };
  const imagePreview = () => {};
  const body = () => {
    return (
      <>
        <input
          type="file"
          onChange={(e) => {
          }}
        />
        {img != "" ? <img src={img} alt="then" /> : null}
      </>
    );
  };
  return <div>{body()}</div>;
}

export default Update;
