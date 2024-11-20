import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import HeroAvatar from '../assets/HeroAvatar.png'; // Adjust the path as needed

const Hero = () => {
  const scrollToNext = () => {
    // Smooth scroll to the about section
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section" id="hero">
      <div className="avatar-container">
        <img src={HeroAvatar} alt="Saba's Avatar" className="avatar-image" />
      </div>
      <h1>
        <span className="wave">👋</span> Hello!
      </h1>
      <h2>I'm Saba Ahmed</h2>
      <p className="lead">Full-Stack Programmer</p>
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/sabaahmed7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:ahmedsaba271@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Wassword?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      
      <div className="scroll-down" onClick={scrollToNext}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-container">
          <span className="arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero; 