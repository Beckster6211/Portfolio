import React from "react";
import "./plusMentor.css";

function PlusMentor() {
  return (
    <div className="plusMentor">
      <br></br>
      <img
        className="plusMentorLogo"
        src="./plusMentor_gradient_homepage.png"
        alt="plusMentor Logo"
      />
      <br></br>
      <img
        className="plusmentorByPhotos"
        src="./logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="SoC logo"
      />
      <p className="plusMentorText">
        During the School of Code were given projects to do, testing our
        abilities, stretching our skills, developing our problem solving and
        helping with working together in groups.
      </p>
      <p className="plusMentorText">
        A project we had midway through the course was to enhance the mentoring
        experience. We were placed into groups of four and we were given a week
        to tackle this problem. From it we created PlusMentor to help with
        bridging the difficulty of initial contact (as for some this can be
        overwhelming).
      </p>
      <a
        href="https://plusmentor.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="plusMentorOpeningPage"
          src="./plusMentor1.PNG"
          alt="plusMentor Opening Page"
          title="plusMentor Opening Page"
        />
        {/* <img
          className="plusMentorPhoto"
          src="./plusMentor6.PNG"
          alt="plusMentor Create Account"
        /> */}
        {/* <img
          className="plusMentorPhoto"
          src="./plusMentor2.PNG"
          alt="plusMentor Intro Page"
        /> */}
        {/* <img
          className="plusMentorPhoto"
          src="./plusMentor3.PNG"
          alt="plusMentor Icebreakers Page"
        /> */}
        {/* <img
          className="plusMentorPhoto"
          src="./plusMentor4.PNG"
          alt="plusMento Talking Points Page"
        /> */}
        {/* <img
          className="plusMentorPhoto"
          src="./plusMentor5.PNG"
          alt="plusMentor Your Sessions Page"
        /> */}
      </a>
      <h3>
        How to use:
        <br></br>
        (Just click the picture or the link to go to the site in a new window)
        <br></br>
        <a
          href="https://plusmentor.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <br></br>
          https://plusMentor.netlify.app
        </a>
      </h3>
      <p className="plusMentorText">
        <p className="plusMentorPage">Log In</p>
        To access log in to the app, if you have an account press the `Log In`
        button and input your email and password.
      </p>
      <img
        className="plusMentorPhoto"
        src="./plusMentor7.PNG"
        alt="plusMentor Log In Page"
        title="plusMentor Log In Page"
      />
      <p className="plusMentorPage">Create An Account</p>
      <p className="plusMentorText">
        OR if you don't have an account. Just click `Create An Account` type in
        your email, first name, surname, create a password and select if you are
        a mentor or mentee (bootcamper). Then use that email and password on the
        login page.
      </p>
      <img
        className="plusMentorPhoto"
        src="./plusMentor6.PNG"
        alt="plusMentor Create Account"
        title="plusMentor Create Account Page"
      />
      <p className="plusMentorPage">Introduction</p>
      <p className="plusMentorText">
        The introduction page is designed to help with first contact between
        mentor and mentee. Set up like a checklist, where you can set up your
        initial meeting. Even suggests for how to stay in touch zoom, email, in
        person and recommendation for how long.
      </p>
      <img
        className="plusMentorPhoto"
        src="./plusMentor2.PNG"
        alt="plusMentor Intro Page"
        title="plusMentor Introduction Page"
      />
      <p className="plusMentorPage">Ice Breakers</p>
      <p className="plusMentorText">
        The ice breaker page is designed to help with starting a dialogue, it
        has sample questions covering all different aspects. Some professional
        questions, some relaxed questions or even controversional.
      </p>
      <img
        className="plusMentorPhoto"
        src="./plusMentor3.PNG"
        alt="plusMentor Icebreakers Page"
        title="plusMentor Icebreakers Page"
      />
      <p className="plusMentorPage">Talking Points</p>
      <p className="plusMentorText">
        The talking points page we designed to be help with things you may not
        have even considered. Click the button and generates a comment or
        question that you may not even realised you wanted the answer to.
      </p>
      <img
        className="plusMentorPhoto"
        src="./plusMentor4.PNG"
        alt="plusMento Talking Points Page"
        title="plusMentor Talking Points Page"
      />
      <p className="plusMentorPage">Your Sesssions</p>
      <p className="plusMentorText">
        The your sessions page is designed to help track what you discuss and
        when like a journal. The page has some fillable input fields on it as
        well some buttons. The information in these fields can then veiwed on
        cards, good for tracking what you talked about and when, even refering
        back to them.
        <img
          className="plusMentorPhoto"
          src="./plusMentor5.PNG"
          alt="plusMentor Your Sessions Page"
          title="plusMentor Your Sessions Page"
        />
      </p>
    </div>
  );
}

export default PlusMentor;
