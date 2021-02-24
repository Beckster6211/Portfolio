import React from "react";
import "./home.css";
import Names from "../names/names";
import Hobbies from "../hobbies/hobbies";
import Loves from "../loves/loves";

function Home() {
  return (
    <div>
      <div>
        <a
          className="aboutMe"
          href="https://github.com/Beckster6211"
          target="_blank"
        >
          <img
            className="icon"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--i_sb3chq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/fk0849hvg2rt13bpqhjy.jpg"
          />
        </a>
        <h1 className="aboutMe">Becky Jones</h1>
        <a
          className="aboutMe"
          href="https://www.linkedin.com/in/rebecca-jones-b3b5601b6/"
          target="_blank"
        >
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
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
      <p className="text">
        My full name is Rebecca Louise Jones, I prefer to be called Becky. The
        only times I am Rebecca is for offical reasons or by people that don't
        know me...(or if I am in trouble).
      </p>
      <br></br>
      <p className="text">
        This is abit about me and some projects that have done you are able to
        see in the navbar.
      </p>
      <Names />
      <Hobbies />
      <Loves />
      <p>Made by Becky (A working progress...)</p>
    </div>
  );
}

export default Home;
