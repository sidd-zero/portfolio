import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="portfolio-container">
      {/* About Me Section */}
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with a keen eye for clean, efficient code and intuitive user interfaces. 
          I thrive on continuous learning and enjoy tackling new challenges in the ever-evolving tech landscape. 
          My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
        </p>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-image">
          <img 
            src="/images/siddharth-profile.jpg" 
            alt="Siddharth Dwivedi" 
          />
        </div>
        <h1>Siddharth Dwivedi</h1>
        <p>Developer</p>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">H HTML</div>
          <div className="skill-item">C CSS</div>
          <div className="skill-item">J JavaScript</div>
          <div className="skill-item">R React</div>
          <div className="skill-item">D Deploy</div>
          <div className="skill-item">F Figma Design</div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <h2>My Projects</h2>
        <Link to="/projects" className="view-portfolio-btn">
          VIEW PORTFOLIO
        </Link>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Get In Touch</h2>
        <div className="contact-buttons">
          <a href="mailto:sidd.dwi.07@gmail.com" className="contact-btn">Email</a>
          <a href="https://www.linkedin.com/in/sidd-zero/" target="_blank" rel="noopener noreferrer" className="contact-btn">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
