import React from "react";

import "./favourites.css";

function Favourites() {
  return (
    <div className="favourites">
      <br></br>
      <h1 className="mainHeading">💗 Favourites 💗</h1>
      <img className="favouritesByPhoto" src="./Capture.PNG" alt="SoC avatar" />
      <p className="favouriteText">I created this as just a bit of fun 😃</p>
      <p className="favouriteText">
        This will allow you to see some of my favourite things
      </p>
      <p className="favouriteText">
        It's a bit quirky (or random) depending on your outlook
      </p>
      <br></br>
      <a
        href="https://blj-my-favourites.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="favouriteSitePicture"
          src="./fav.PNG"
          alt="Favourite Home Page"
        />
      </a>
      <h4 className="linkHeading">
        How to use:
        <br></br>
        (Just click the picture or the link to go to the site in a new window)
        <br></br>
        <a
          className="linkHeading"
          href="https://blj-my-favourites.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <br></br>
          https://blj-my-favourites.netlify.app/
        </a>
      </h4>
      <p className="favouriteText">
        On the site there will be a navigation bar that you can use to go
        different pages.
        <br></br>
        Once on these pages you can find out my favourite of that topic (do you
        agree? 🤔)
      </p>
      <p className="favouriteText">🔧It's not completely finished yet...🔨</p>

      <p className="favouriteText">Still under construction 👷</p>
      <p className="favouriteText">
        👀 You can have a look but be gentle please 🥺
      </p>
      <br></br>
      <img
        className="starsImage"
        src="https://lh3.googleusercontent.com/proxy/zDrIughLVkd2hA9BeA-TVa7PJ6XcFf27QqJzVDGUAinyk405i8XRD1RNISTNaVc4N9pKeU-yDZmZ_dDNiiL64RHsNTliAWz0xGE_ftwOo8O0NVdmvNIixQ"
        alt="5 stars"
      />
    </div>
  );
}

export default Favourites;
