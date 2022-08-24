import React from "react";
import "./Work.css";
import { projects } from "../../Data/Data";
import ProjectsList from "./../../Component/ProjectsList/ProjectsList";

export default function Work() {
  return (
    <div className="work" id="work">
      <div className="about-heading">
        <h2>WORK</h2>
        <div></div>
      </div>
      <div className="project" id="project">
        <div className="project-list">
          {projects.map((item) => (
            <ProjectsList key={item.id} img={item.img}/>
          ))}
        </div>
      </div>
    </div>
  );
}
