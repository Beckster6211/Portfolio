import React from "react";
import "./finleystories.css";

function FinleyStories() {
  return (
    <div className="projectFinley">
      <h1 className="mainHeading">📚 Finley Stories 🎞️</h1>
      <img className="finleyByPhotos" src="./Capture.PNG" alt="SoC avatar" />
      <p className="finleyText">
        A project I made as a result of something my mom said which started my
        mind turning.
      </p>
      <p className="finleyText">
        My brother at the start of lockdown brought a Tonies box (this is a
        device which allows sounds to be recorded and played through a figure
        placed on top). My brother brought this as a way for distance family to
        be in touch with my nephew as he grows, so my family could record them
        telling stories and then play them for him.
      </p>
      <p className="finleyText">
        My mother made the comment about wanting to do video stories and I
        thought "If only there was somewhere to put them. I know I could try and
        make one."
      </p>
      <br />
      <a
        href="https://blj-finley-stories.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="sitePictures"
          src="./finleyopening.PNG"
          alt="finleyHome"
        />
      </a>
      <h4 className="linkHeading">
        How to use:
        <br></br>
        (Just click the picture or the link to go to the site in a new window)
        <br></br>
        <a
          className="linkHeading"
          href="https://blj-finley-stories.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <br />
          https://blj-finley-stories.netlify.app/
        </a>
      </h4>
      <p className="finleyText">The site has different elements</p>
      <p className="finleyPages">Stories</p>
      <img className="finleySite" src="./finleyhome.PNG" alt="Finley stories" />
      <p className="finleyText">
        The stories page is where videos of stories being told will be held. The
        page will be set out like a gallery/library with thumbnail type
        pictures. Each one will be a link to page where a video will be
        available to play (courtesy of react player and youtube). There may also
        be fact/details about the story
      </p>
      <p className="finleyPages">Nursery Rhymes</p>
      <img
        className="finleySite"
        src="./finleynursery.PNG"
        alt="Finley nursery"
      />
      <p className="finleyText">
        The nursery rhymes page is simular to the stories page in this where
        videos of nursery rhymes are. Each one will be a link to page where a
        video will be available to play (courtesy of react player and youtube).
        There may also be the lyrics to the song.
      </p>
      <p className="finleyPages">Music</p>
      <img
        className="finleySite"
        src="./finleymusic.PNG"
        alt="Finley nursery"
      />
      <p className="finleyText">
        The music page is where music files are stored to be played.
      </p>
    </div>
  );
}

export default FinleyStories;
