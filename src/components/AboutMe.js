import React, { Fragment } from 'react';

function AboutMe() {
  return (
    <Fragment>
    <div className="about-me-container">
    <div className="main-container">
            <h2>About Me</h2>
        <div className="main-container-content">
            <div className="about-me-content-container">
                <img src=""/>
                <div className="about-me-content">
                <h4>Who I am</h4>
                <p>I love to create and I love to solve problems. This is what led me to pursue a degree in Mechanical Engineering and to make a career shift into a Software Engineering and Web Development.</p>
                <p>Mechanical Engineering also sparked my love of empathetic design. I am fascinated by the human experience surrounding technology and passionate about designing the best experiences for people.</p>
                <p>All of my life, I have been a curious person and I plan to never lose that spark of curiosity. The spark helps me ensure I fully understand the problems I am solving and it has led me to never stop learning.</p>
                </div>
                <div className="about-me-content">
                <h4>How I work</h4>
                <p>I believe the first step in solving a problem or fulfilling a need is understanding. The better and more thoroughly we understand a problem, why it is happening, what people need and want from a solution, and all of the ways a solution could impact people, the better the solution will be. This is why empathy is such a large and important part of the way I approach creating programs and solutions for users. </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </Fragment>
  );
}

export default AboutMe;
