import React from "react";

export const ExperienceCard = (props) => {
  return (
    <div className="project-card">
        <div>
        <img className="project-card-image" src={props.companyIcon} />
        <p id="projectName">{props.companyName}</p>
        <p id="projectName">{props.title}</p>
        </div>
      <p>{props.description}</p>
      <div>
      <p>{props.dateRange}</p>
      </div>
    </div>
  );
};
