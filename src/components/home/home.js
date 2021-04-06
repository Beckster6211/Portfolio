import React from "react";
import "./home.css";
import Names from "../names/names";
import Hobbies from "../hobbies/hobbies";
import Loves from "../loves/loves";

function Home() {
  return (
    <div className="home">
      <div>
        <a
          className="aboutMe"
          href="https://github.com/Beckster6211"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icon"
            src="./fk0849hvg2rt13bpqhjy.webp"
            alt="github logo"
          />
        </a>
        <h1 className="aboutMe">Becky Jones</h1>
        <a
          className="aboutMe"
          href="https://www.linkedin.com/in/rebecca-jones-b3b5601b6/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icon"
            src="./1280px-LinkedIn_Logo.svg.png"
            alt="linkedIn logo"
          />
        </a>
      </div>
      <img
        className="picture"
        src="./Becky Jones SoC Head shot photo.jpg"
        alt="Me"
      />
      <img className="picture" src="./Capture.PNG" alt="SOC avatar" />
      <h3 className="heading">Me</h3>
      <p className=" homeText">
        My full name is Rebecca Louise Jones, I prefer to be called Becky. The
        only times I am Rebecca is for offical reasons or by people that don't
        know me...(or if I am in trouble).
      </p>
      <br></br>
      <p className="homeText">
        This is abit about me and some projects that have done you are able to
        see through the buttons in the navbar.
      </p>
      <Names />
      <Hobbies />
      <Loves />
      <p>Made by Becky (A working progress...)</p>
    </div>
  );
}

export default Home;
