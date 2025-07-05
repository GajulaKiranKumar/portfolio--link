import React from 'react';
import '../style/Home.css';
import logo from "/image.png.jpg";

function Home() {
  return (
    <div className="home-container">
      {/* Animated background */}
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="intro-wrapper">
        <div className="intro-text">
          <h1 className="intro">Hey there...</h1>
          <h2 className="name">I'm <span className="highlight">Kiran Kumar</span></h2>
          <h3 className="typing-effect">I'm a MERN Developer</h3>

          <div className="tech-stack">
            <p>Technologies I work with:</p>
            <ul>
              <li>MongoDB</li><li>Express.js</li><li>React.js</li><li>Node.js</li>
              <li>JavaScript</li><li>HTML & CSS</li><li>Git & GitHub</li><li>SQL</li>
            </ul>
          </div>
        </div>

        <div className="profile-image">
          <img src={logo} alt="Kiran Kumar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
