import React, { Fragment } from 'react';

function Contact() {
  return (
    <div>
        <h2>Contact</h2>
        <div className="contact-section">
            <a href="https://www.linkedin.com/in/ariel-jakubowski/">
                <div className="contact-icon">in</div>
            </a>
            <a href="https://medium.com/@arieljakubowski">
                <div className="contact-icon">M</div>
            </a>
            <a href="">
                <div className="contact-icon">
                    <img className="contact-icon-img" src="https://icon-library.net/images/github-svg-icon/github-svg-icon-3.jpg"/>
                </div>
            </a>
        </div>
    </div>
  );
}

export default Contact;
