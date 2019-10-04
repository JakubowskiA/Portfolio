import React, { Fragment } from 'react';

function Contact() {
  return (
    <div className="contact-section">
        <h2>Contact</h2>
        <div className="contact-group">
            <a href="https://www.linkedin.com/in/ariel-jakubowski/">
                <div className="contact-icon">in</div>
            </a>
            <a href="https://medium.com/@arieljakubowski">
                <div className="contact-icon">M</div>
            </a>
            <a href="Resume.pdf">
                <div className="contact-icon">
                    <img className="contact-icon-img" src="https://icon-library.net/images/document-icon-image/document-icon-image-27.jpg"/>
                </div>
                
            </a>
            <a href="https://github.com/JakubowskiA">
                <div className="contact-icon">
                    <img className="contact-icon-img" src="https://icon-library.net/images/github-svg-icon/github-svg-icon-3.jpg"/>
                </div>
            </a>
            <a class="mailto" href="mailto:arieljakubowski@gmail.com">
                <div className="contact-icon">
                    <img className="contact-icon-img" src="https://image.flaticon.com/icons/svg/33/33700.svg"/>
                </div>
            </a>
        </div>
    </div>
  );
}

export default Contact;
