import React from 'react';
 import "../style/Footer.css"

function Footer() {
  return (
    <footer className="footer-container">
      <h1 className="footer-title">About Me</h1>
      <p className="footer-description">
        I like working with new tools and technologies.
        Excited to learn new technologies and create tech-related content.
      </p>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/kiran-kumar-44318722a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835.png"
            alt="LinkedIn Profile"
          />
        </a>

        <a
          href="https://github.com/GajulaKiranKumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub Profile"
          />
        </a>
      </div>

      <div className="contact-section">
         <h1>Contact Me</h1>
        <div className="contact-item">
           
          <img
            src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png"
            alt="Phone icon"
          />
          <p>+91 8688992860</p>
        </div>

        <div className="contact-item">
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/56/14/google-gmail-logo-symbol-design-vector-46335614.jpg"
            alt="Gmail icon"
          />
          <p>gajulakiran174@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
