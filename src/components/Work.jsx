import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaJava, FaDocker, FaAws, FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiSpringboot, SiSqlite } from 'react-icons/si';
import { GiCardAceSpades, GiPlantRoots } from 'react-icons/gi';
import { WiDaySunnyOvercast } from 'react-icons/wi';

const Work = () => {
    const projects = [
        {
            title: "Blackjack Game Application",
            icon: <GiCardAceSpades className="feature-icon" />,
            description: "A full-stack Blackjack game with secure user authentication, robust game logic, and AWS deployment. This project showcases expertise in backend development and cloud deployment, featuring automated testing and CI/CD implementation.",
            technologies: [
                { icon: <SiSpringboot />, name: "Spring Boot" },
                { icon: <FaJava />, name: "Java" },
                { icon: <SiSqlite />, name: "SQLite" },
                { icon: <FaDocker />, name: "Docker" },
                { icon: <FaAws />, name: "AWS" },
                // { icon: <SiGithubactions />, name: "GitHub Actions" }
            ],
            demoLink: "https://github.com/Wassword/Casino"
        },
        {
            title: "Weather App",
            icon: <WiDaySunnyOvercast className="feature-icon" />,
            description: "A responsive weather application delivering real-time weather data through Open Weather API integration. Features dynamic interfaces, error handling, and cross-device compatibility.",
            technologies: [
                { icon: <FaReact />, name: "React" },
                { icon: <FaJs />, name: "JavaScript" },
                { icon: <FaCss3Alt />, name: "CSS" },
                { icon: <FaGithub />, name: "Git" }
            ],
            demoLink: "https://wassword.github.io/weather_app/"
        },
        {
            title: "Botanical Bliss",
            icon: <GiPlantRoots className="feature-icon" />,
            description: "An e-commerce website for plant enthusiasts featuring a product catalog, shopping cart, and secure checkout. Developed collaboratively using Agile methodologies to create a responsive and user-friendly shopping experience.",
            technologies: [
                { icon: <FaHtml5 />, name: "HTML" },
                { icon: <FaCss3Alt />, name: "CSS" },
                { icon: <FaJs />, name: "JavaScript" }
            ],
            demoLink: "https://wassword.github.io/botanicalbliss/"
        }
    ];

    return (
        <section className="work-section" id="work">
            <div className="work-heading">
                <h2>My Work</h2>
                {/* <div className="work-subtitle">
                    <span className="code-style">&lt;</span> 
                    Building digital experiences that matter 
                    <span className="code-style">/&gt;</span>
                </div> */}
            </div>
            <Container>
                <Row className="g-4">
                    {projects.map((project, index) => (
                        <Col key={index} lg={4} md={6} xs={12}>
                            <div className="project-container">
                                <div className="project-icon">
                                    {project.icon}
                                </div>
                                <div className="project-card">
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="tech-stack">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="tech-icon" title={tech.name}>
                                                    {tech.icon}
                                                </span>
                                            ))}
                                        </div>
                                        <a href={project.demoLink} 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           className="project-link">
                                            Check It Out! <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Work;