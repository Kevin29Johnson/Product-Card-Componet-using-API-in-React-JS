import React, { useState, useEffect } from "react";

function Data() {
  // state variable to keep track of API data
  const [rand, setRand] = useState([]);
  function loadData() {
    fetch("https://fakestoreapi.com/products/category/electronics/?limit=5")
      .then((response) => response.json())
      // the response needs to get converted to json
      .then((data) => {
        console.log(data)
        setRand(data);
      });
  }
  // useEffect(() => {
  //   loadData();
  // }, []);
  // use this hook if you want the data to appear after every time the page loads
  const imgStyle={
    height:"100px",width:"100px",margin:"10px auto"
  }
  return (
    <div>
      {/* click on the button to display the product card */}
      <button onClick={loadData}>Get products</button>
      <br/>
        {rand.map((item) => {
          return (
            <ul key={item.id}>
             <div className="card">
              <li style={{listStyle:"none"}}>
               <h3>{item.title}</h3>
              <img alt="" style={imgStyle} src={item.image}></img>
              <div>
                <h2>Price: {item.price} $</h2>
                <button className="cart">Add to cart</button>
              </div>
              </li>
              </div>
            </ul>  
          );
        })}
        {/* end of map */}
      </div>  
  );
}
export default Data;
