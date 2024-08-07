import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    img: 'project1-image-url.jpg',
    repo: 'https://github.com/yourusername/project1',
    live: 'https://project1-live-url.com'
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    img: 'project2-image-url.jpg',
    repo: 'https://github.com/yourusername/project2',
    live: 'https://project2-live-url.com'
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="home-button">Return Home</button>
      </Link>
    </div>
  );
};

export default ProjectsPage;
