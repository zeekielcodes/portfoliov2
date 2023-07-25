import React from "react";
import { BsEye, BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import projects from "../projects.json";

function ProjectDetails({ clicked, setShow }) {
  return (
    <div className="text-white p-4 md:p-8 lg:p-12 fixed font-Abel top-0 bottom-0 left-0 overflow-y-scroll right-0 bg-[rgba(0,0,0,0.8)] backdrop-blur">
      <button
        className="mb-4 text-[24px] bg-[#51516D] text-white h-[40px] w-[40px]"
        onClick={() => setShow(false)}
      >
        X
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          className="w-full md:w-1/2"
          src={require(`../assets/images/${clicked.image}`)}
          alt=""
        />
        <div>
          <h2 className="text-[32px] mb-2 md:text-[48px] leading-7 font-Akronim">
            {clicked.name}
          </h2>
          <p>{clicked.description}</p>
          <hr className="my-4" />
          {clicked.features.length > 0 && (
            <>
              <ul className="my-4">
                <h4 className="text-[32px] font-Akronim">Features</h4>
                {clicked.features.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <hr className="my-4" />
            </>
          )}

          <ul className="my-4">
            <h4 className="text-[32px] font-Akronim">Technologies Used</h4>
            {clicked.techUsed.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="flex flex-wrap gap-4">
            <a
              className="px-2 md:px-6 py-2 rounded flex items-center gap-2 w-auto bg-white text-black"
              href={clicked.live}
            >
              <TbWorld /> Visit Live Site
            </a>
            <a
              className="px-2 md:px-6 py-2 rounded flex items-center gap-2 w-auto bg-white text-black"
              href={clicked.repo}
            >
              <BsGithub /> View Codebase
            </a>
            {clicked.preview && (
              <a
                className="px-2 md:px-6 py-2 rounded flex items-center gap-2 w-auto bg-white text-black"
                href={clicked.preview}
              >
                <BsEye /> Preview App
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
