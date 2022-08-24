import React from "react";
import "./ProjectsList.css";
function ProjectsList({img , link}) {
  return (
    <div className="pro-list">
      <div className="pro-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"/>
      </a>
    </div>
  );
}

export default ProjectsList;
