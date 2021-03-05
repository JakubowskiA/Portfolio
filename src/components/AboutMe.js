import React, { Fragment } from "react";

function AboutMe() {
  return (
    <Fragment>
      <div className="about-me-container" id="about-me">
        <h2>About Me</h2>
        <div className="main-container-content">
          <div className="about-me-content-container">
            <img src="" />
            <div className="about-me-content">
              <h4>Who I am</h4>
              <p>
                I love to create and I love to solve problems. This is what led
                me to pursue a degree in Mechanical Engineering and to make a
                career shift into a Software Engineering and Web Development.
              </p>
              <p>
                Mechanical Engineering also sparked my love of empathetic
                design. I am fascinated by the human experience surrounding
                technology and passionate about designing the best experiences
                for people.
              </p>
              <p>
                All of my life, I have been a curious person and I plan to never
                lose that spark of curiosity. The spark helps me ensure I fully
                understand the problems I am solving and it has led me to never
                stop learning.
              </p>
            </div>
            <div className="about-me-content">
              <h4>How I work</h4>
              <p>
                I believe the first step in solving a problem or fulfilling a
                need is understanding. The better and more thoroughly we
                understand a problem, what people need and want from a solution,
                and how a solution could impact people, the better the solution
                will be. This is why empathy is such an important part of the
                way I approach programming and design.{" "}
              </p>
              <p>
                I think it is important to always keep in mind that everyone
                looks at everything with their own unique perspective. Because
                of this, I love to work in an open and collaborative way with
                people who have different backgrounds, experiences, and
                perspectives. This is an important piece of meeting users needs
                and giving them the best experiences possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutMe;
