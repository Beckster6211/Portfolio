import React from "react";
import "./projectSpace.css";

function SpaceProject() {
  return (
    <div className="projectSpace">
      <h1 className="mainHeading">🌌 Project Space Photo 📷</h1>
      <img
        className="byPhotos"
        src="./logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="SoC logo"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img className="byPhotos" src="./Capture.PNG" alt="SoC avatar" />
      <p className="text">
        A project made that I originally did with some teammates on the School
        of Code as a hackathon that redid on my own to practice some of the
        concepts that were used.
      </p>
      <p className="text">
        Nasa has a program called Astronomy picture of the day. This app lets
        you see the pictures and information about it and with the calendar
        provided you can select a specific date.
      </p>
      <br></br>
      <br></br>
      <a
        href="https://blj-nasa-potd.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="sitePictures" src="./potd1.PNG" alt="ptodPicture1" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img className="sitePictures" src="./potd2.PNG" alt="ptodPicture2" />
      </a>
      <h5>How To Use:</h5>
      <p className="text">
        (Just clicked one of the pictures to go to the site in a new window)
        <br></br>
        <br></br>
        On the site you will be presented with a calendar drop down, using this
        you can select a date. Dates shown monthly with an up and down arrow (on
        the top right hand side) allowing you to toggle through the months, you
        can also browse through years by selecting the month and year on the top
        left. (You can get back to the current date by clicking "Today" in the
        bottom right). When a date has been selected you are presented with the
        picture of the day for that day as well as a heading of what the picture
        is and a description detailing the photo.<br></br>
        <br></br>
        📆 If your born after 16th June 1995 (earliest that can go back) you can
        get Nasa's picture of the day on the day you were born... (pretty cool,
        I'm to old though... 😭)
        <br></br>
        <br></br>
        There is also a couple of extra cool things like iconic nasa pictures
        and also links to youtube clips of the moon landing.
      </p>
    </div>
  );
}

export default SpaceProject;
