import React from 'react';
import profilePicture from './myimage.jpg'; // Replace with your actual image file name
import resume from './myresume.pdf'; // Replace with your actual resume file name

export default function About() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div className="about-container">
                <div className="image-container">
                    <img src={profilePicture} alt="Ruman Syeda" className="profile-picture" />
                </div>
                <div className="content-container">
                    <p>
                        My name is Ruman Syeda, and I am a Full Stack Developer with a passion for building responsive and user-friendly applications.
                        With experience in various programming languages and frameworks, I am dedicated to creating solutions that meet the needs of users
                        while continuing to expand my knowledge and skills in technology.
                    </p>
                    <p>
                        You can download my resume using the link below:
                    </p>
                    <a href={resume} download className="resume-link">
                        Download My Resume
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p>© 2024 Ruman Syeda. All rights reserved.</p>
            </footer>
        </div>
    );
}
