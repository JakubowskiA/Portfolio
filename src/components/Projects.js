import React, { Fragment } from 'react';

function Projects() {
  return (
    <Fragment>

    <div className="project-page">
        <h2>Projects</h2>
        <div className="project-img-group">
            <div className="project">
                <figure>
                <img src="projectImgs/serene.png" className="project-img"/>
                <figcaption>
                    <h3>SERENE</h3>
                    <h4>A guided online journal to help you evaluate and manage stress in a productive and healthy way</h4>
                    <h4>Technologies used: Javascript, React, Rails, custom CSS, PostgreSQL, Chart.js, and Moment.js</h4>
                    <a href="http://serene-app.herokuapp.com/" class="button">Explore!</a>
                </figcaption>
                </figure>
            </div>
            <div className="project">
            <figure>
                <img src="projectImgs/readme.png" className="project-img"/>
                <figcaption>
                    <h3>READ ME</h3>
                    <h4>Find your next favorite read and keep track of your books with Read Me</h4>
                    <h4>Technologies used:  Javascript, React, Rails, custom CSS, JSON Web Tokens, and Semantic UI</h4>
                    <a href="http://read-me-books.herokuapp.com" class="button">Explore!</a>
                </figcaption>
            </figure>
            </div>
        </div>
        <div className="project-img-group">
            <div className="project">
            <figure>
                <img src="projectImgs/wordle.png" className="project-img"/>
                <figcaption>
                    <h3>WORDLE</h3>
                    <h4>A fun word game that lets users test their vocabulary and typing skills</h4>
                    <h4>Technologies used: Javascript, Rails, custom CSS, Semantic UI, and Particle.js</h4>
                    <a href="http://wordle-app-frontend.herokuapp.com" class="button">Explore!</a>
                </figcaption>
            </figure>
            </div>
            <div className="project">
            <figure>
                <img src="projectImgs/bpf.png" className="project-img"/>
                <figcaption>
                    <h3>BEST PAW FORWARD</h3>
                    <h4>The easiest way to find training for your pet and manage training sessions</h4>
                    <h4>Technologies used: Rails, SQLite, custom CSS, HTML, and Bootstrap</h4>
                    <a href="#" class="button">Explore!</a>
                </figcaption>
                </figure>
            </div>
        </div>
    </div>

    {/* <div className="project-container">
    <h3>SERENE</h3>
    <h4>A GUIDED ONLINE JOURNAL TO HELP YOU EVALUATE AND MANAGE STRESS IN A PRODUCTIVE AND HEALTHY WAY</h4>
    <ul>
    <li>Implemented customizable user interface employing React, custom CSS, Chart.js, Moment.js and Semantic UI</li>
    <li>Utilized React Router to implement client side routing and allow users to easily and intuitively navigate webpage</li>
    <li>Created database schema and configured ActiveRecord associations with Rails and Postgres</li>
    <li>Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</li>
    </ul>
    </div>
    
    Javascript, Rails, custom CSS, JSON Web Tokens, and Semantic UI
    <div className="project-container">
    <h3>READ ME</h3>
    <h4>FIND YOUR NEXT READ AND TRACK YOUR BOOKS WITH READ ME</h4>
    <ul>
        <li>Utilized Google Books API to pull and parse data on books, built backend with Rails, created user database with Postgres</li>
        <li>Implemented user interface employing React, Semantic UI, and custom CSS</li>
        <li>Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</li>
        <li>Implemented client side routing with React Router to allow users to easily and intuitively navigate webpage</li>
    </ul>
    </div>

    <div className="project-container">
    <h3>WORDLE</h3>
    <h4>A FUN WORD GAME THAT LETS USERS TEST THEIR VOCABULARY AND TYPING SKILLS</h4>
    <ul>
        <li>Built backend with Ruby on Rails, stored user data with Postgres</li>
        <li>Designed user interface with HTML, JavaScript, custom CSS, and Particle.js</li>
        <li>Deployed Wordle on Heroku to allow anyone to play</li>
    </ul>
    </div>

    <div className="project-container">
    <h3>BEST PAW FORWARD</h3>
    <h4>THE EASIEST WAY TO FIND TRAINING FOR YOUR PET AND MANAGE TRAINING SESSIONS</h4>
    <ul>
        <li>Built full stack functionality with Ruby on Rails using MVC structure </li>
        <li>Created database schema and configured ActiveRecord associations with Rails and SQLite3</li>
        <li>Designed front end with HTML and custom CSS</li>
    </ul>
    </div> */}
    
    </Fragment>
  );
}

export default Projects;
