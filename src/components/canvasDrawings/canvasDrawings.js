import React from "react";
import "./canvasDrawing.css";

function CanvasDrawing() {
  return (
    <div className="canvasDrawing">
      <h1 className="mainHeading"> 🖌️ My Stress Relief 🎨 </h1>
      <br></br>
      <img className="canvasByPhoto" src="./Capture.PNG" alt="SoC avatar" />
      <p className="canvasText">
        During time at the School of Code we were introduced to canvas.
      </p>
      <p className="canvasText">I LOVE CANVAS</p>
      <p className="canvasText">
        This falls in perfectly with my love of animation and cartoons.
      </p>
      <a
        href="https://blj-canvas.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="canvasOpeningPage"
          src="./stressRelief1.PNG"
          alt="Canvas drawing homepage"
          title="canvas drawing site Opening Page"
        />
      </a>
      <h4 className="linkHeading">
        How to use:
        <br></br>
        (Just click the picture or the link to go to the site in a new window)
        <a
          className="linkHeading"
          href="https://blj-canvas.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <br></br>
          https://blj-canvas.netlify.app/
        </a>
      </h4>
      <p className="canvasText">
        There is a nav bar which lets you navigate between pictures.
      </p>
      <img
        className="canvasExample"
        src="./stressRelief2.PNG"
        alt="canvas home page with nav open"
        title="canvas home page with nav open"
      />
      <p className="canvasText">
        When experimenting with it I found a blog that helped with scaling the
        canvas pictures enabling them to be responsive with different screen
        sizes.
      </p>
      <p className="canvasText">
        There is also a little story behind each picture as well 😁
      </p>
      <h4 className="linkHeading">
        This is in complete and work in progress as I plan to add more
        pictures... I LOVE CANVAS 💖 (but have to be careful as I can get lost
        doing it, years could pass 🧓)
      </h4>
    </div>
  );
}

export default CanvasDrawing;
