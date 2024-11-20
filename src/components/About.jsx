const About = () => {
  return (
      <section id="about" className="about-section">
          <div className="content-grid">
              <div className="about-card">
                  <h2>Hi, I am Saba</h2>
                  <p>
                      I'm a passionate Full-Stack Developer with a unique journey from humanitarian work to tech. 
                      With experience at Stiegler EdTech and a background in Organizational Leadership, I combine 
                      technical expertise with strong project management skills to deliver impactful solutions. 
                      I thrive in collaborative environments and am dedicated to creating user-centered applications 
                      that make a difference.
                  </p>
              </div>

              <div className="about-card">
                  <h2>Tech Stack</h2>
                  <div className="tech-icons">
                      {/* Add your tech stack icons here */}
                      <i className="devicon-java-plain" title="Java"></i>
                      <i className="devicon-javascript-plain" title="JavaScript"></i>
                      <i className="devicon-react-original" title="React"></i>
                      <i className="devicon-spring-plain" title="Spring Boot"></i>
                      <i className="devicon-nodejs-plain" title="Node.js"></i>
                  </div>
              </div>

              <div className="about-card">
                  <h2>Location</h2>
                  <p>Based in North Carolina, USA. Open to remote opportunities worldwide.</p>
                  <button className="contact-btn">Contact Me</button>
              </div>
          </div>
      </section>
  );
};
