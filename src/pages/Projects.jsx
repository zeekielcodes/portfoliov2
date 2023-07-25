import React, { useState } from "react";
import projects from "../projects.json";
import { BsCircle, BsCircleFill, BsGithub, BsLink } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";
import { SiReadthedocs } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import ProjectDetails from "../components/ProjectDetails";
import { useEffect } from "react";

function Projects() {
  const [project, setProject] = useState(projects.web);
  const [active, setActive] = useState("web");
  const [showDetails, setShow] = useState(false);
  const [clicked, setClicked] = useState(null);

  return (
    <div
      id="projects"
      className="p-6 md:px-8 lg:px-24 flex flex-col justify-center items-center py-8  text-white"
    >
      <h2 className="text-[36px] font-Akronim">Projects</h2>
      <hr className="w-[40px] border-2 my-2" />
      <p className="mb-4 font-Abel">A compilation of projects I have built</p>
      <div className="controls">
        <button
          className={
            active === "web" ? "bg-[#51516D] text-white" : "text-white"
          }
          onClick={() => {
            setActive("web");
            setProject(projects.web);
          }}
        >
          Web Apps
        </button>
        <button
          className={
            active === "app" ? "bg-[#51516D] text-white" : "text-white"
          }
          onClick={() => {
            setActive("app");
            setProject(projects.app);
          }}
        >
          Mobile Apps
        </button>
      </div>
      <div className="projects">
        {project ? (
          project.map((item) => (
            <div className="project" key={item.id}>
              <img src={require(`../assets/images/${item.image}`)} alt="" />
              <div className="project-details">
                <h3 className="text-[18px] font-Abel font-bold text-center">
                  {item.name}
                </h3>
                <div className="flex justify-around mt-2 text-[24px]">
                  <a href={item.live}>
                    <TbWorld />
                  </a>
                  <a href={item.repo}>
                    <BsGithub />
                  </a>
                  <button
                    onClick={() => {
                      setShow(true);
                      setClicked(item);
                    }}
                  >
                    <SiReadthedocs />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <BiLoaderCircle className="text-[44px] animate-spin" />
        )}{" "}
        {showDetails && <ProjectDetails clicked={clicked} setShow={setShow} />}
      </div>
    </div>
  );
}

export default Projects;
