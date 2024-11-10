import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="profile-img-container">
        <img src="/images/pp5.jpg" alt="Profile" className="profile-img" />
      </div>
      <div className="bio">
        <h2>Hello, I'm Beimnet Dawit</h2>
        <p> I'm a passionate Software Engineering student at Wolkite University.
             I'm eager to build a career as a web developer and am constantly honing 
             my skills to create clean, efficient, and user-friendly websites. 
             I’m excited to learn, grow, and contribute to the tech community.

.</p>
      </div>
    </div>
  );
}

export default About;
