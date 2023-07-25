import React from "react";
import theface from "../assets/images/newme.png";

function About() {
  return (
    <div className="about" id="about">
      <img src={theface} alt="" />
      <div>
        <h2>About</h2>
        <hr className="w-[40px] border-2 mb-6" />
        <p>
          My name is Ezekiel A. Tobiloba, I am a Frontend Web and Mobile App
          Developer, who specializes in crafting intuitive and visually
          appealing user experiences. Constantly learning and staying up-to-date
          with the latest technologies.
        </p>
        <p>
          I love networking and welcome opportunities to improve my knowledge,
          network and grow.
        </p>
        <p>
          I have a little over a year experience in Frontend web development and
          programming, one month experience in Mobile App development and a
          couple of years experience working with WordPress.
        </p>
      </div>
    </div>
  );
}

export default About;
