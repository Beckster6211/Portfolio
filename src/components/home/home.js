import React from "react";
import "./home.css";
import Header from "../header/header";

function Home() {
  return (
    <div>
      <h1>Becky Jones</h1>
      <img
        class="picture"
        src="./Becky Jones SoC Head shot photo.jpg"
        alt="Me"
      />
      <img class="picture" src="./Capture.PNG" alt="SOC avatar" />
    </div>
  );
}

export default Home;
