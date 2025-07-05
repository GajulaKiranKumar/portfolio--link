import React from 'react';
import '../style/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="section-title">Contact Me</h1>

      <div className="contact-section">
        <div className="contact-card">
          <img
            src="https://c8.alamy.com/comp/2AXKC25/phone-icon-handset-icon-in-circle-telephone-symbol-for-your-design-logo-ui-stock-vector-illustration-isolated-on-white-background-2AXKC25.jpg"
            alt="Phone"
          />
          <div>
            <h2>Phone</h2>
            <p>+91 8688992860</p>
          </div>
        </div>

        <div className="contact-card">
          <img
            src="https://png.pngtree.com/template/20190725/ourmid/pngtree-gmail-logo-png-image_282635.jpg"
            alt="Email"
          />
          <div>
            <h2>Email</h2>
            <p>gajulakiran174@gmail.com</p>
          </div>
        </div>

        <div className="contact-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxAHuTbuw3ULCR_RjaT3KggueU2QKanR9QA&s"
            alt="LinkedIn"
          />
          <div>
            <h2>LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/kiran-kumar-44318722a"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/kirankumar
            </a>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h2>Send a Message</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Your email" required />

          <label>Message:</label>
          <textarea placeholder="Your message..." required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    
    </div>
  );
}

export default Contact;
