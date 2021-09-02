import React from "react";

function Coin(props) {
  return (
    <div className="list-group" style={{ margin: "4px" }}>
      <a href="/" className="list-group-item list-group-item-action">
        <div className="container d-flex justify-content-between">
          {props.symbol}
          <img
            src={props.imgUrl}
            alt="Girl in a jacket"
            width="30"
            height="30"
          />
        </div>
      </a>
    </div>
  );
}

export default Coin;
