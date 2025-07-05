import React from 'react';
import '../style/Skills.css';

function Skills() {
  return (
  
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skill-card">
        <img src="https://miro.medium.com/v2/resize:fit:1000/1*1u2p917cvlyP6SuHcq3t0Q.jpeg" alt="HTML" />
        <p>HTML</p>
      </div>
      <div className="skill-card">
        <img src="https://img-c.udemycdn.com/course/240x135/592466_3dc9_3.jpg" alt="CSS" />
        <p>CSS3</p>
      </div>
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZwCW--P3oJJRFRz4W4SY9QZSslpaszyZIC-dgzm4d1SwdL3rUVr_lhaIt3UkuW-LLHI&usqp=CAU" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="skill-card">
        <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="React" />
        <p>React JS</p>
      </div>
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwojS-xS7s5ZRuMIg6PyFhZnhUvxi5niIsfdYeTUkhLTab3kvK8RKuoJFNvE7m5hj7Ls&usqp=CAU" alt="Node.js" />
        <p>Node JS</p>
      </div>
      <div className="skill-card">
        <img src="https://img-c.udemycdn.com/course/240x135/5447392_61c5.jpg" alt="Express" />
        <p>Express JS</p>
      </div>
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7t5b74oIC-h6RWJVGASyJm2G3iD2kHtIRH5UzADkU3Vn76AARPr9sc2bMtj1ykkfx4s&usqp=CAU" alt="Git & GitHub" />
        <p>Git & GitHub</p>
      </div>
      <div className="skill-card">
        <img src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" alt="Git & GitHub" />
        <p>MONGO DB</p>
      </div>
      <div className="skill-card">
        <img src="https://www.mytecbits.com/wp-content/uploads/SQL-776x424.png" alt="SQL" />
        <p>SQL</p>
      </div>
    </div>
  );
}

export default Skills;
