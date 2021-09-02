import React, { useState, useEffect } from "react";

function Sam() {
  // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
  // We're setting the default value of dogImage to null, so that while we wait for the
  // fetch to complete, we dont attempt to render the image
  //let [dogImage, setDogImage] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      {/* 5. Using *dogImage as* the *src* for our image*/}
      {/* {dogImage && <img src={dogImage}></img>} */}
    </div>
  );
}

export default Sam;
