import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function Dashboard() {
  const body = () => {
    return (
      <>
        <div className="row my-50">
          <div className="col-md-4">
            <Link to="/create">
              <Card name="create" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/view">
              <Card name="View" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/update">
              <Card name="Update" />
            </Link>
          </div>
        </div>
      </>
    );
  };
  return <div>{body()}</div>;
}

export default Dashboard;
