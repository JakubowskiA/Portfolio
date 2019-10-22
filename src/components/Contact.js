import React, { Fragment } from 'react';

function Contact() {
  return (
    <div className="contact-section" id="contact">
        <h2>Contact</h2>
        
        <div className="contact-group">
            <div className="contact contact-div">
                <a href="https://www.linkedin.com/in/ariel-jakubowski/">
                    <div className="contact-icon hvr-grow hvr-hide">in</div>
                    <div className="contact-icon hvr-show">LinkedIn</div>
                </a>
            </div>
            <div className="contact contact-div">
            <a href="https://medium.com/@arieljakubowski">
                <div className="contact-icon hvr-grow hvr-hide">M</div>
                <div className="contact-icon hvr-show">Blog</div>
            </a>
            </div>
            <div className="contact contact-div">
            <a href="Resume.pdf">
                <div className="contact-icon hvr-grow hvr-hide">
                    <img className="contact-icon-img" src="https://icon-library.net/images/document-icon-image/document-icon-image-27.jpg"/>
                </div>
                <div className="contact-icon hvr-show">Resume</div>           
            </a>
            </div>
            <div className="contact contact-div">
            <a href="https://github.com/JakubowskiA">
                <div className="contact-icon hvr-grow hvr-hide">
                    <img className="contact-icon-img" src="https://icon-library.net/images/github-svg-icon/github-svg-icon-3.jpg"/>
                </div>
                <div className="contact-icon hvr-show">Github</div>
            </a>
            </div>
            <div className="contact contact-div">
            <a className="mailto" href="mailto:arieljakubowski@gmail.com">
                <div className="contact-icon hvr-grow hvr-hide">
                    <img className="contact-icon-img" src="https://image.flaticon.com/icons/svg/33/33700.svg"/>
                </div>
                <div className="contact-icon hvr-show">Email</div>
            </a>
            </div>
        </div>
    </div>
  );
}

export default Contact;
