import React from "react";

function Card(props) {
  return (
    <div>
      <div
        className="card"
        style={{ width: "100px", height: "200px", border: "2px solid black" }}
      >
        <div className="card-body">
          <p className="card-text">{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
