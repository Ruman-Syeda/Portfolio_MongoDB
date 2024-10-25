import project1 from './project1.jpg';
import project2 from './project2.jpg';
import project3 from './project3.jpeg';
import project4 from './project4.jpg';


export default function Project() {
    return (
        <div className="container">
            <h1>My Projects</h1>
            <p>Here are some of the projects I have worked on:</p>
            <ul>
                <li className="project-item">
                    <img src={project1} alt="Responsive Real Estate Website" className="project-image" />
                    <div className="project-description">
                        <strong>Project 1:</strong> Responsive Real Estate Website
                        <br />
                        A full-featured website for a real estate agent that showcases properties with a user-friendly interface.
                    </div>
                </li>
                <li className="project-item">
                    <img src={project2} alt="Task Management App" className="project-image" />
                    <div className="project-description">
                        <strong>Project 2:</strong> Task Management App
                        <br />
                        A web application for managing tasks, featuring user authentication and a clean UI.
                    </div>
                </li>
                <li className="project-item">
                    <img src={project3} alt="E-commerce Platform" className="project-image" />
                    <div className="project-description">
                        <strong>Project 3:</strong> E-commerce Platform
                        <br />
                        A scalable e-commerce solution with payment integration and product management capabilities.
                    </div>
                </li>
                <li className="project-item">
                    <img src={project4} alt="Portfolio Website" className="project-image" />
                    <div className="project-description">
                        <strong>Project 4:</strong> Portfolio Website
                        <br />
                        My personal portfolio website to showcase my skills and projects.
                    </div>
                </li>
            </ul>
            <footer>
                <p>© 2024 Ruman Syeda. All rights reserved.</p>
            </footer>
        </div>
    );
}
 