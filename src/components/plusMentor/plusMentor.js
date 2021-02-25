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
        className="byPhotos"
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
        bridging the difficulty of intial contact (as for some this can be
        overwhelming).
      </p>
      <a
        href="https://plusmentor.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="plusMentorPhoto"
          src="./plusMentor1.PNG"
          alt="plusMentor Opening Page"
        />
        <img
          className="plusMentorPhoto"
          src="./plusMentor6.PNG"
          alt="plusMentor Create Account"
        />
        <img
          className="plusMentorPhoto"
          src="./plusMentor2.PNG"
          alt="plusMentor Intro Page"
        />
        <img
          className="plusMentorPhoto"
          src="./plusMentor3.PNG"
          alt="plusMentor Icebreakers Page"
        />
        <img
          className="plusMentorPhoto"
          src="./plusMentor4.PNG"
          alt="plusMento Talking Points Page"
        />
        <img
          className="plusMentorPhoto"
          src="./plusMentor5.PNG"
          alt="plusMentor Your Sessions Page"
        />
      </a>
      <h5>
        How to use:
        <br></br>
        (Just clicked one of the pictures to go to the site in a new window)
      </h5>
      <p className="plusMentorText">
        To access page log in to the app, if you have an account press the `Log
        In` button and input your email and password.
        <br></br>
        OR if you don't have an account. Just click `Create An Account` type in
        your email, first name, surname, create a password and select if you are
        a mentor or mentee (bootcamper). Then use that email and password on the
        login page.
        <br></br>
        The introduction page is designed to help with first contact between
        mentor and mentee. Set up like a checklist, where you can set up your
        initial meeting. Even suggests for how to stay in touch zoom, email, in
        person and recommendation for how long.
        <br></br>
        The ice breaker page is designed to help with starting a dialogue, it
        has sample questions covering all different aspects. Some professional
        questions, some relaxed questions or even controversional.
        <br></br>
        The talking points page we designed to be help with things you may not
        have even considered. Click the button and generates a comment or
        question that you may not even realised you wanted the answer to.
        <br></br>
        The your sessions page is designed to help track what you discuss and
        when like a journal. The page has some fillable input fields on it as
        well some buttons. The information in these fields can then veiwed on
        cards, good for tracking what you talkedd about and when, even refering
        back to them.
        <br></br>
      </p>
    </div>
  );
}

export default PlusMentor;
