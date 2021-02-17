import React from "react";
import "./home.css";
import Names from "../names/names";
import Hobbies from "../hobbies/hobbies";
import Loves from "../loves/loves";

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
      <h3 class="heading">Me</h3>
      <p class="text">
        My full name is Rebecca Louise Jones, I prefer to be called Becky. The
        only times I am Rebecca is for offical reasons or by people that don't
        know me...(or if I am in trouble).
      </p>
      <Names />
      <Hobbies />
      <Loves />
    </div>
  );
}

export default Home;
