import React, { Fragment } from "react";

function AboutMe() {
  const viewWidth = window.innerWidth;
  console.log("vw", viewWidth);
  return (
    <Fragment>
      <div className="about-me-container" id="about-me">
        <h2>About Me</h2>
        <div className="main-container-content">
          <div className="about-me-content-container">
            {viewWidth > 700 ? (
              <>
                <div className="about-me-content">
                  <h4 className="about-me-title">Who I am</h4>
                  <p>
                    I love to create and to solve problems. This is what led me to earn
                    a degree in Mechanical Engineering and shift to Software
                    Engineering. 
                    </p><p>
                    Mechanical Engineering sparked my love of
                    empathetic design. Software Engineering refined it. I am
                    fascinated by the human experience of technology and
                    passionate about creating better experiences for people.
                  </p>
                  <p>
                    I am a curious person and plan to never lose that spark. This spark
                    helps me ensure I fully understand the problems I am solving and
                    has led me to never stop learning.
                  </p>
                </div>
                <img src="me.jpg" className="about-me-pic" />
                <div className="about-me-content">
                  <h4 className="about-me-title">How I work</h4>
                  <p>
                    I believe the first step in solving a problem is
                    understanding it. The better we understand a problem, what
                    people need from a solution, and how a solution could impact
                    people, the better the solution will be. This is why empathy
                    is an important part of the way I work.
                  </p>
                  <p>
                    I love to work in an open and collaborative way with people
                    who have different backgrounds, experiences, and
                    perspectives. This is an important piece of meeting users
                    needs and giving them the best experiences possible.
                  </p>
                </div>
              </>
            ) : (
              <>
                <img src="me.jpg" className="about-me-pic" />
                <div className="about-me-content">
                  <h4 className="about-me-title">Who I am</h4>
                  <p>
                    I love to create and to solve problems. This is what led me to earn
                    a degree in Mechanical Engineering and shift to Software
                    Engineering. 
                    </p><p>
                    Mechanical Engineering sparked my love of
                    empathetic design. Software Engineering refined it. I am
                    fascinated by the human experience of technology and
                    passionate about creating better experiences for people.
                  </p>
                  <p>
                    I am a curious person and plan to never lose that spark. This spark
                    helps me ensure I fully understand the problems I am solving and
                    has led me to never stop learning.
                  </p>
                </div>

                <div className="about-me-content">
                  <h4 className="about-me-title">How I work</h4>
                  <p>
                    I believe the first step in solving a problem is
                    understanding it. The better we understand a problem, what
                    people need from a solution, and how a solution could impact
                    people, the better the solution will be. This is why empathy
                    is an important part of the way I work.
                  </p>
                  <p>
                    I love to work in an open and collaborative way with people
                    who have different backgrounds, experiences, and
                    perspectives. This is an important piece of meeting users
                    needs and giving them the best experiences possible.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutMe;
