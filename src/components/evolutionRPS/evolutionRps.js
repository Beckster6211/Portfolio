import React from "react";
import "./evolutionRps.css";

function EvolutionRPS() {
  return (
    <div className="projectEvoRps">
      <h1 className="mainHeading">Evolution Rock Paper Scissors</h1>
      <img
        className="evoRpsByPhotos"
        src="./logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="SoC logo"
      />
      <img className="evoRpsByPhotos" src="./Capture.PNG" alt="SoC avatar" />
      <p className="evoRpsText">
        A project I made as a result of tinkering with something that I had done
        as part of the School of Code.
      </p>
      <p className="evoRpsText">
        As part of School of Code there is something called hackathons these are
        designed to test what information we have taken in as well as exercising
        our skills. These usually involving giving us an objective and then
        writing code in order to achieve it.
      </p>
      <p className="evoRpsText">
        This is the first ever hackathon that I had to do. We were asked to
        create a rock paper scissors game. This was mainly to test out HTML and
        JS as part of it would be to write functions and dom manipulation to
        display the relevant information on the screen.
        <br />
        <br />
        This project I have done is taking what I originally done and modified
        it in different ways. It's actually a really nice way of seeing how much
        I have grown and developed thinking back to how much I initially
        struggled.
      </p>
      <br />
      <a
        href="https://blj-rps-evolution.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="sitePictures"
          src="./evo-rps.PNG"
          alt="Evolution Rock Paper Scissors home"
        />
      </a>
      <h4 className="linkHeading">
        How to use:
        <br></br>
        (Just click the picture or the link to go to the site in a new window)
        <br></br>
        <a
          className="linkHeading"
          href="https://blj-rps-evolution.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <br />
          https://blj-rps-evolution.netlify.app/
        </a>
      </h4>
      <p className="evoRpsText">The site has different elements</p>
      <p className="evoRpsPages">Home</p>
      <img
        className="evoRpsSite"
        src="./evo-rps.PNG"
        alt="Evolution Rock Paper Scissors home"
      />
      <img
        className="evoRpsSite"
        src="./evo-rps2.PNG"
        alt="Evolution Rock Paper Scissors home 2"
      />
      <p className="evoRpsText">
        This displays the initial idea behind the project as we as a little bit
        about the origins and history of Rock Paper Scissors as well as some fun
        facts.
      </p>
      <p className="evoRpsPages">Hackathon</p>
      <img className="evoRpsSite" src="./hackathon1.PNG" alt="Hackathon 1" />
      <img className="evoRpsSite" src="./hackathon2.PNG" alt="Hackathon 2" />
      <p className="evoRpsText">
        This details the this page show what I originally manage to achieve
        (after 4 <sup>1</sup>
        &frasl;<sub>2</sub> days of coding) as well as a link to the site.
      </p>
      <p className="evoRpsPages">HTML CSS JS</p>
      <img className="evoRpsSite" src="./htmlcssjs1.PNG" alt="HTML CSS JS 1" />
      <img className="evoRpsSite" src="./htmlcssjs2.PNG" alt="HTML CSS JS 2" />
      <p className="evoRpsText">
        This page shows "version 2" in a sense, an improved version 1.
      </p>
      <p className="evoRpsPages">React</p>
      <img className="evoRpsSite" src="./react1.PNG" alt="React 1" />
      <img className="evoRpsSite" src="./react2.PNG" alt="React 2" />
      <p className="evoRpsText">
        This page shows "version 2" in a sense, an improved version 2 but
        instead of it being Html Css and Js it has been converted to react.
      </p>
      <p className="linkHeading">Look how much I've grown</p>
    </div>
  );
}

export default EvolutionRPS;
