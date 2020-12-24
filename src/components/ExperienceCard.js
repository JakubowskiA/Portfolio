import React from "react";

export const ExperienceCard = (props) => {
  console.log(props)
  return (
    <div className="experience-card">
        <div className="experience-card-header">
        {/* <img className="experience-card-icon" src={props.companyIcon} /> */}
        <div style={{width: "45%"}}><h4>{props.companyName}</h4></div>
        <div style={{width: "20%"}}><h4>{props.title}</h4></div>
        <div id="dateRange" style={{width: "35%"}}>
          <h4 className="experience-date">{props.dateRange}</h4>
      </div>
        {/* <p>{`${props.companyName}  |  ${props.title}`}</p> */}
        
        {/* <p>{props.companyName}</p>
        <p>{props.title}</p> */}
        </div>
        <hr/>
      {props.description.map(detail => (
        <li>{detail}</li>
      ))}
      
    </div>
  );
};
