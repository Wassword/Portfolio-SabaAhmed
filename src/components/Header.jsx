import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => (
    <header>
        <Navbar expand="lg" className="navbar-custom">
            <Container>
                {/* Logo or Initials on the Left */}
                <Navbar.Brand href="#home" className="brand-initials">
                    SA
                </Navbar.Brand>

                {/* Toggle button for mobile view */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navigation Links on the Right */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                        <Nav.Link href="#resume" className="nav-link-custom">Resume</Nav.Link>
                        <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
                        <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Profile Information Section */}
        <Container className="text-center mt-4">
            <Row>
                <Col>
                    <h1>Hello!</h1>
                    <h2>I&#39;m Saba Ahmed</h2>
                    <p className="lead">Full-Stack Programmer</p>

                    {/* Social Links */}
                    <div className="social-icons mt-3">
                        <a href="https://www.linkedin.com/in/sabaahmed7/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <FaLinkedin size="1.5em" />
                        </a>
                        <a href="mailto:ahmedsaba271@gmail.com" className="text-white mx-2">
                            <FaEnvelope size="1.5em" />
                        </a>
                        <a href="https://github.com/Wassword?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <FaGithub size="1.5em" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </header>
);

export default Header;
