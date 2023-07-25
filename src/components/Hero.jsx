import React from "react";
import resume from "../assets/images/myResume.pdf";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>Hi, I am</p>
        <h1>
          <span className="font-bold">Ezekiel</span> A. Tobiloba
        </h1>
        <p>A Frontend Web and Mobile App Developer</p>
        <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/1XNR5UaGsFO6gIu1e4_qd4wFPQKKo4GMn/view?usp=sharing"
            className="bg-white hover:bg-[#51516D] hover:text-white text-[#51516D]"
          >
            View Resume
          </a>
          <a
            href={resume}
            className="bg-[#51516D] text-white hover:bg-white hover:text-[#51516D]"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
