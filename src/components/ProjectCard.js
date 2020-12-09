import React from "react";

export const ProjectCard = (props) => {
  const showCodeLinks = () => {
    if (props.singleCodeLink) {
      return (
        <a href={props.singleCodeLink}>
          <button className="project-button">See code</button>
        </a>
      );
    } else {
      return (
        <div>
          <a href={props.frontendCodeLink}>
            <button className="project-button">See frontend code</button>
          </a>
          <a href={props.backendCodeLink}>
            <button className="project-button">See backend code</button>
          </a>
        </div>
      );
    }
  };
  return (
    <div className="project-card">
      <img className="project-card-image" src={props.image} />
      <p id="projectName">{props.name}</p>
      <p>{props.description}</p>
      <p>Technologies used: {props.technologiesUsed}</p>
      {showCodeLinks()}
    </div>
  );
};
