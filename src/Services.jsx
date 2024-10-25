import React from 'react';

export default function Services() {
    return (
        <div className="container">
            <h1>My Services</h1>
            <p>As a full stack developer, I offer a variety of services to help bring your ideas to life:</p>
            <ul>
                <li>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.YraxiK4XKQjdWqDTHUD4vAHaDV&pid=Api&P=0&h=180" alt="Web Development" className="service-image" />
                    <em>Web Development:</em> Creating responsive and user-friendly websites.
                </li>
                <li>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.xkiL8sAo4IqWTWyKRF_1egHaDt&pid=Api&P=0&h=1800" alt="API Development" className="service-image" />
                    <em>API Development:</em> Building robust APIs for seamless integration.
                </li>
                <li>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.031uUBJKpWCuuX8VKfr9jAHaFj&pid=Api&P=0&h=180" alt="Database Management" className="service-image" />
                    <em>Database Management:</em> Efficiently managing and organizing data.
                </li>
               
            </ul>
            <footer>
                <p>© 2024 Ruman Syeda. All rights reserved.</p>
            </footer>
        </div>
    );
}
