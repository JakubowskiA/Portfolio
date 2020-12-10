import React from "react";

export const ExperienceCard = (props) => {
  return (
    <div className="project-card">
        <div>
        <img className="project-card-image" src={props.companyIcon} />
        <p id="projectName">{props.companyName}</p>
        <p id="projectName">{props.dateRange}</p>
        </div>
      
      <p id="projectName">{props.name}</p>
      <p>{props.description}</p>
      <p>Technologies used: {props.technologiesUsed}</p>
    </div>
  );
};
