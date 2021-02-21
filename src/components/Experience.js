import React, { Fragment } from "react";
import { ExperienceCard } from "./ExperienceCard.js";
import { experienceData } from "./ExperienceData.js";

function Experience() {
  return (
    <Fragment>
      <div className="experience-section-container" id="experience">
        <h2>Professional Experience</h2>
        <div className="experience-content-container">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experienceData.indexOf(experience)}
              companyName={experience.companyName}
              companyIcon={experience.companyIcon}
              dateRange={experience.dateRange}
              description={experience.description}
              title={experience.title}
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
