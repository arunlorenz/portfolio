import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <img src="your-photo-url.jpg" alt="Your Name" className="profile-pic" />
      <h1>Arunkumar N S</h1>
      <h2>Dev. Java/Cloud Computing</h2>
      <div className="social-links">
        <a href="your-linkedin-url" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="your-email-url" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="your-github-url" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <Link to="/projects">
        <button className="projects-button">My Projects</button>
      </Link>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};

export default HomePage;
