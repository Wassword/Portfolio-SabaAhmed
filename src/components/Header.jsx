import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <Navbar expand="lg" className="navbar-custom" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#home" className="brand-initials">
                        SA.
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

            <div className="hero-section">
                <div className="hero-content">
                    <h1>
                        {'Hello!'.split('').map((letter, index) => (
                            <span 
                                key={index} 
                                className={`jumping-letter ${isScrolled ? 'paused' : ''}`}
                            >
                                {letter}
                            </span>
                        ))}
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
                </div>
            </div>
        </header>
    );
};

export default Header;
