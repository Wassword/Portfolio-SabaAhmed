import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import MyAvatar from './Avatar';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <Navbar expand="lg" className="navbar-custom" fixed="top">
                <Container>
                    <Navbar.Brand href="#hero" className="brand-logo">
                        <svg width="50" height="50" viewBox="0 0 50 50">
                            <path 
                                d="M10 25C10 15 15 10 25 10C35 10 40 15 40 20C40 25 35 30 25 30C15 30 10 35 10 40C10 45 15 50 25 50C35 50 40 45 40 40" 
                                stroke="#C4A484" 
                                fill="none" 
                                strokeWidth="2"
                            />
                            <text x="15" y="35" fill="#C4A484" fontSize="24" fontWeight="bold">SA</text>
                        </svg>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-links">
                            <Nav.Link href="#hero">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link 
                                href="/sabaahmed_portfolio/resume/Sabaahmed.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </Nav.Link>
                            <Nav.Link 
                                href="#work"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('work').scrollIntoView({ 
                                        behavior: 'smooth' 
                                    });
                                }}
                            >
                                Work
                            </Nav.Link>
                            <Nav.Link 
                                href="#contact" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact').scrollIntoView({ 
                                        behavior: 'smooth' 
                                    });
                                }}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
