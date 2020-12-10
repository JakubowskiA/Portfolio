import React, { Fragment } from "react";
import { ExperienceCard } from "./ExperienceCard.js";
import { experienceData } from "./ExperienceData.js";

function Experience() {
  return (
    <Fragment>
      <div className="blog-container" id="blog">
        {/* <div className="main-container"> */}
        <h2>Experience</h2>
        {/* <div className="main-container-content"> */}
        <div className="blog-content-container">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experienceData.indexOf(experience)}
              companyName={experience.companyName}
              companyIcon={experience.companyIcon}
              dateRange={experience.dateRange}
              description={experience.description}
            />
          ))}
        </div>
        <br />
        <br />
      </div>
      {/* </div> */}
      {/* </div> */}
    </Fragment>
  );
}

export default Experience;
