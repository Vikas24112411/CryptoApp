import React, { useEffect } from "react";

import Coin from "./Coin";
//import Coin from "./components/Coin";

function Coins() {
  useEffect(() => {
    fetch(
      "https://cryptic-headland-94862.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=18ff5e5f4c032e36c2cfb4ec5b36b96700cc2a1d&ids=BTC,SOL&interval=1h,1d,30d&convert=USD&per-page=100&page=1",
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          // setItems(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      );
  }, []);
  return (
    <div className="container">
      <Coin
        symbol="BTC"
        imgUrl="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
      />
      <Coin
        symbol="SOL"
        imgUrl="https://nomics-api.s3.us-east-2.amazonaws.com/static/images/currencies/SOL2.jpg"
      />
    </div>
  );
}

export default Coins;
