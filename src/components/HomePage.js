import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Modal from "react-modal";

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [yamlContent, setYamlContent] = useState("");

  const openModal = () => {
    fetch("/details.yaml")
      .then((response) => response.text())
      .then((text) => {
        setYamlContent(text);
        setModalIsOpen(true);
      });
  };

  return (
    <div className="home-page">
      <img src="your-photo-url.jpg" alt="Your Name" className="profile-pic" />
      <h1>Arunkumar N S</h1>
      <h2>Dev. Java/Cloud Computing</h2>
      <div className="social-links">
        <a href="https://linkedin.com/in/arunkumar-ns" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:arunkumarns543@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/arunlorenz" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div>
      <button onClick={openModal}>Show My Details</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>My Details</h2>
        <pre>{yamlContent}</pre>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
      <Link to="/projects">
        <button className="projects-button">My Projects</button>
      </Link>
      <footer>
        <p>Made with 💙</p>
      </footer>
    </div>
  );
};

export default HomePage;
