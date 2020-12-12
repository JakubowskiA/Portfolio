import React from "react";

export const ExperienceCard = (props) => {
  console.log(props)
  return (
    <div className="experience-card">
        <div className="experience-card-header">
        <img className="experience-card-icon" src={props.companyIcon} />
        <p>{`${props.companyName}  |  ${props.title}`}</p>
        <br/>
        
        {/* <p>{props.companyName}</p>
        <p>{props.title}</p> */}
        </div>
      {props.description.map(detail => (
        <li>{detail}</li>
      ))}
      <div>
      <p>{props.dateRange}</p>
      </div>
    </div>
  );
};
