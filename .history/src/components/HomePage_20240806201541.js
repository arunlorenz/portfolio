import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';  // Create a CSS file for styling if needed

const HomePage = () => {
  return (
    <div className="home-page">
      <img src="your-photo-url.jpg" alt="Your Name" className="profile-pic" />
      <h1>Your Name</h1>
      <div className="social-links">
        <a href="your-linkedin-url" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="your-github-url" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Add more social links as needed */}
      </div>
      <Link to="/projects">
        <button className="projects-button">See My Projects</button>
      </Link>
    </div>
  );
};

export default HomePage;
