import React from "react";
import "./engageMate.css";

function EngageMate() {
  return (
    <div className="engageMate">
      <img
        className="engageMateLogo"
        src="./engagemate.PNG"
        alt="engageMateLogo"
      />
      <br></br>
      <img
        className="engageMateByPhotos"
        src="./logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="SoC logo"
      />
      <p className="engageMateByPhotos">Callback Cats 😺() </p>
      <p className="engageMateText">
        During the School of Code were given projects to do, testing our
        abilities, stretching our skills, developing our problem solving and
        helping with working together in groups.
      </p>

      <p className="engageMateText">Improving the remote teaching delivery</p>
      <p className="engageMateText">
        Final project we had was to look at improving the remote teaching
        delivery. We were placed into groups of six and we were given a month to
        tackle this problem. We created EngageMate to help encourage engagement
        and participation, as you don’t get the same live feedback and reception
        that would in real time, making it difficult to gauge audience
        understanding.
      </p>
      <a
        href="https://engagemate.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="engageMateOpeningPage"
          src="./1.PNG"
          alt="engageMate opening page"
          title="EngageMate Opening Page"
        />
      </a>
      <h5>
        How to use:
        <br></br>
        (Just click the picture to go to the site in a new window)
      </h5>
      <img
        className="featureMenuPhoto"
        src="./skfm.PNG"
        alt="speaker feature menu"
        title="Speaker feature menu"
      />
      <img
        className="featureMenuPhoto"
        src="./ptfm.PNG"
        alt="participant feature menu"
        title="Participant feature menu"
      />
      <p className="engageMateText">
        There are 2 different views for the site depending upon your
        authorisation - speaker or participant. We have enabled a way for you to
        access our app with your sign in details if not in the database as a
        default you are given the participants view, you can be added through
        the admin page, this is were can put the role.
      </p>
      <p className="featureHeading">Thumbometer</p>
      <img
        className="engageMateExample"
        src="./sktb.PNG"
        alt="speaker thumbometer page"
        title="Speaker Thumbometer Page"
      />
      <img
        className="engageMateExample"
        src="./pttb.PNG"
        alt="participant thumbometer page"
        title="Participant Thumbometer Page"
      />
      {/* <details>
        <summary> Speaker</summary>
        <p>
          Select a question and timer from the drop down (if select custom
          provides a field to add your own). Start button and wait for the
          results they are displayed by the rotation of the thumb that has now
          appeared on the scene and also a percentage amount along with number
          of participants. You can end the timer with the stop time button. That
          session data is submitted to database (you can opt not to have this
          happen by using the throwaway toggle before pressing start).{" "}
        </p>
      </details>
      <details>
        <summary>Participant</summary>
        <p>
          When speaker submitted a question appears in heading. Participant can
          then use the slider to register their response. The percentage amount
          of response is also displayed.
        </p>
      </details> */}
      <p className="speakerInstructions">
        Speaker instructions. Select a question and timer from the drop down (if
        select custom provides a field to add your own). Start button and wait
        for the results they are displayed by the rotation of the thumb that has
        now appeared on the scene and also a percentage amount along with number
        of participants. You can end the timer with the stop time button. That
        session data is submitted to database (you can opt not to have this
        happen by using the throwaway toggle before pressing start).
      </p>
      <p className="participantInstructions">
        Participant instructions When speaker submitted a question appears in
        heading. Participant can then use the slider to register their response.
        The percentage amount of response is also displayed.
      </p>
      <p className="bothInstructions">
        The time amount is displayed with a progression bar and digits below.
      </p>
      <p className="featureHeading">Raise A Hand</p>
      <img
        className="engageMateExample"
        src="./skrh.PNG"
        alt="speaker raise a hand page"
        title="Speaker raise a hand Page"
      />
      <img
        className="engageMateExample"
        src="./ptrh.PNG"
        alt="participant raise a hand page"
        title="Participant raise a hand Page"
      />
      <p className="speakerInstructions">
        Speaker instructions When a hand is raised a notification is sent to the
        speaker, viewable by opening the raise a hand feature. The hands are
        shown in an ordered list along with the name of who submitted it and an
        idea of what they would like to know.
      </p>
      <p className="participantInstructions">
        Participant instructions. Click the icon of a closed hand this will send
        a notification to the speaker that a hand has been raised with name
        attached to it. Also an input field to put a topic showing the general
        idea of what want to ask, the raise hand then shows that have a question
        and also topic. The raised hand can be put back down by clicking the
        hand icon again which has now changed to an open hand.
      </p>
      <p className="bothInstructions">
        The hands can be lowered by the participant or the speaker.
      </p>
      <p className="featureHeading">Live Quiz</p>
      <img
        className="engageMateExample"
        src="./sklq1.PNG"
        alt="speaker live quiz page"
        title="Speaker live quiz Page"
      />
      <img
        className="engageMateExample"
        src="./sklq2.PNG"
        alt="speaker live quiz page"
        title="Speaker live quiz Page"
      />
      <img
        className="engageMateExample"
        src="./ptlq1.PNG"
        alt="participant live quiz page"
        title="Participant live quiz Page"
      />
      <img
        className="engageMateExample"
        src="./ptlq2.PNG"
        alt="participant live quiz page"
        title="Participant live quiz Page"
      />
      <p className="speakerInstructions">
        Speaker instructions To give a question use drop down select custom, an
        input field is given to type your own. Create up to four answer option
        with the pencil icon (remove options with bin), select the answer with
        the button next to that option and submit question. Then displays the
        options and as participants submit answers it reveals how many have
        select the option a number and bar being filled. The correct answer is
        shown green (incorrect as red).
      </p>
      <p className="participantInstructions">
        Participant instructions Question is displayed with the options
        available. Submit an answer then sent back to the speaker. If the have
        the correct answer it is shown by the colour Green for correct, red for
        incorrect.
      </p>
      <p className="bothInstructions">
        If have the correct answer it is shown by the colour Green for correct,
        red for incorrect.
      </p>
      <p className="featureHeading">DJ Deck</p>
      <img
        className="engageMateExample"
        src="./djdk1.PNG"
        alt="speaker dj deck page"
        title="Speaker dj deck Page"
      />
      <p className="speakerInstructions">
        Speaker View only The sound sample files need to be placed in the sound
        folder within the public folder. To access them, create a new Audio file
        and place the file name into a variable.
      </p>
      <p className="featureHeading">Admin</p>
      <img
        className="engageMateExample"
        src="./users.PNG"
        alt="admin page users table"
        title="Admin page users table"
      />
      <img
        className="engageMateExample"
        src="./aduser.PNG"
        alt="admin page add users"
        title="Admin add users table"
      />
      <img
        className="engageMateExample"
        src="./adminsessions.PNG"
        alt="admin page session table"
        title="Admin page session table"
      />
      <p className="speakerInstructions">
        Speaker view only The admin page is where you can add new users to the
        database. You can also check who is already in the database and remove
        people. You can also look at session data for the results you have had.
      </p>
      <br></br>
    </div>
  );
}

export default EngageMate;
