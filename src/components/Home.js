import React from "react";
import { name, city } from "../data/data.js";

// const firebrick = {
//   color: 'firebrick'
// };

function Home() {
  return (
    <div id="home">
      <h1 style={{color: 'firebrick'}}> { name } is a Web Developer from { city } </h1>
      <div> { name } Home { city } </div>
    </div>
    

)
}

export default Home;

