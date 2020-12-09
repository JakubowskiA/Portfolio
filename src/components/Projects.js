import React, { Fragment } from "react";
import { ProjectCard } from "./ProjectCard.js";
import { projectsData } from "./ProjectsData.js";

function Projects() {
  return (
    <Fragment>
      <div className="project-page" id="projects">
        <h2>Projects</h2>
        <div className="project-wrapper">
          {projectsData.map((post) => (
            <ProjectCard
              key={projectsData.indexOf(post)}
              image={post.image}
              name={post.name}
              description={post.description}
              technologiesUsed={post.technologiesUsed}
              demoLink={post.demoLink}
              singleCodeLink={post.singleCodeLink}
              frontendCodeLink={post.frontendCodeLink}
              backendCodeLink={post.backendCodeLink}
            />
          ))}
        </div>
        {/* <div className="project-img-group">
          <div className="project">
            <figure>
              <img src="projectImgs/serene.png" className="project-img" />
              <figcaption>
                <h3>SERENE</h3>
                <p>
                  A guided online journal to help you evaluate and manage stress
                  in a productive and healthy way
                </p>
                <p>
                  Technologies used: Javascript, React, Rails, custom CSS,
                  PostgreSQL, Chart.js, and Moment.js
                </p>
                <a
                  target="_blank"
                  href="http://serene-app.herokuapp.com/"
                  className="button"
                >
                  <button>Explore!</button>
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="project">
            <figure>
              <img src="projectImgs/readme.png" className="project-img" />
              <figcaption>
                <h3>READ ME</h3>
                <p>
                  Find your next favorite read and keep track of your books with
                  Read Me
                </p>
                <p>
                  Technologies used: Javascript, React, Rails, custom CSS, JSON
                  Web Tokens, and Semantic UI
                </p>
                <a
                  target="_blank"
                  href="http://read-me-books.herokuapp.com"
                  className="button"
                >
                  <button>Explore!</button>
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="project-img-group">
          <div className="project">
            <figure>
              <img src="projectImgs/wordle.png" className="project-img" />
              <figcaption>
                <h3>WORDLE</h3>
                <p>
                  A fun word game that lets users test their vocabulary and
                  typing skills
                </p>
                <p>
                  Technologies used: Javascript, Rails, custom CSS, Semantic UI,
                  and Particle.js
                </p>
                <a
                  href="http://wordle-app-frontend.herokuapp.com"
                  target="_blank"
                  className="button"
                >
                  <button>Explore!</button>
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="project">
            <figure>
              <img src="projectImgs/bpf.png" className="project-img" />
              <figcaption>
                <h3>BEST PAW FORWARD</h3>
                <p>
                  The easiest way to find training for your pet and manage
                  training sessions
                </p>
                <p>
                  Technologies used: Rails, SQLite, custom CSS, HTML, and
                  Bootstrap
                </p>
                <a target="_blank" href="#" className="button">
                  <button>Explore!</button>
                </a>
              </figcaption>
            </figure>
          </div>
        </div> */}
        <br />
        <br />
      </div>
    </Fragment>
  );
}

export default Projects;
