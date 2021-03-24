import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { URL } from "../config/url";
import axios from "axios";
import { useHistory } from "react-router";
import MaterialTable from "material-table";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function View() {
  const history = useHistory();
  const [rows, setRows] = useState([]);
  const classes = useStyles();

  const loadData = () => {
    axios.get(`${URL}/viewproduct`).then((response) => {
      setRows(response.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  const logOut = () => {
    localStorage.removeItem("JWT");
    sessionStorage.removeItem("JWT");
    history.push("/");
  };
  const nextPage = () => {
    history.push("/update");
  };
  return (
    <>
      <h2>{localStorage.getItem("user")}</h2>
      <button
        className="btn btn-success"
        onClick={() => {
          logOut();
        }}
      >
        Log out
      </button>
     
        <button
          className="btn btn-success"
          onClick={() => {
            nextPage();
          }}
        >
          Next page
        </button>
      
      <MaterialTable
        columns={[
          { title: "productName", field: "productName" },
          { title: "product price", field: "productPrice" },
          { title: "Product Quantity", field: "productQuantity" },
        ]}
        data={rows}
        title="Demo Title"
      />
    </>
  );
}
