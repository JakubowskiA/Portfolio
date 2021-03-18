import React from "react";

export const ExperienceCard = (props) => {
  console.log(props);
  const getHeader = () => {
    const viewWidth = window.innerWidth;
    if (viewWidth > 700) {
      return (
        <>
          <div className="experience-card-header">
            <div style={{ width: "45%" }}>
              <h4>{props.companyName}</h4>
            </div>
            <div style={{ width: "20%" }}>
              <h4>{props.title}</h4>
            </div>
            <div id="dateRange" style={{ width: "35%" }}>
              <h4 className="experience-date">{props.dateRange}</h4>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <h4>
              {props.title}, {props.companyName}
            </h4>
          </div>
          <div>
            <h4>{props.dateRange}</h4>
          </div>
        </>
      );
    }
  };
  return (
    <div className="experience-card">
      {getHeader()}
      <hr />
      {props.description.map((detail) => (
        <li>{detail}</li>
      ))}
    </div>
  );
};
