import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        // Here you could send the form data to a server if needed
        console.log(formData); // Logging data for demonstration
        navigate('/'); // Redirect to Home Page
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <div className="contact-info">
                <h2>My Contact Information</h2>
                <p>Email: syeddaruman@gmail.com</p>
                <p>Phone: +1 (647) 469-9013</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Contact Number:
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email Address:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <footer>
                <p>© 2024 Ruman Syeda. All rights reserved.</p>
            </footer>
        </div>
    );
}
