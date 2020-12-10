import React, { Fragment } from "react";
import { ExperienceCard } from "./ExperienceCard.js";
import { experienceData } from "./ExperienceData.js";

function Experience() {
  return (
    <Fragment>
      <div className="blog-container" id="blog">
        <h2>Professional Experience</h2>
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
    </Fragment>
  );
}

export default Experience;
