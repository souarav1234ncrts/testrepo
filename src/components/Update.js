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
         .put(`${URL}/updateproduct`,{productName:product.productName,productId:product.productId,productPrice:product.productPrice,productQuantity:product.productQuantity})
         .then((response) => {
           alert("product updated successfully");
         });
  };
    const updateChange = (name) =>(event)=> {
        setProduct({...product,[name]:event.target.value})
    }
  const body = () => {
    return (
      <>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          value={text}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your product"
          variant="outlined"
        >
          {array.map((option) => (
            <option key={option.productName} value={option.productId}>
              {option.productName}
            </option>
          ))}
        </TextField>
        <button
          className="btn btn-success"
          onClick={() => {
            getDetails();
          }}
        >
          Search
        </button>
        {product ? (
          <>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={product.productName}
              onChange={updateChange()}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={product.productId}
              onChange={updateChange()}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={product.productPrice}
              onChange={updateChange()}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={product.productQuantity}
              onChange={updateChange()}
            />
            <button
              className="btn btn-success"
              onClick={() => {
                updateProduct();
              }}
            >
              Update
            </button>
          </>
        ) : null}
      </>
    );
  };
  return <div>{body()}</div>;
}

export default Update;
