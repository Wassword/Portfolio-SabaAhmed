import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaGithub, FaTiktok, FaYoutube } from 'react-icons/fa';
const Header = () => {
    return (
        <header className="header">
            <Navbar expand="lg" variant="dark" className="navbar-custom">
                <Container>
                    <Navbar.Brand href="#" className="logo-box">
                        <img src="Image/R.png" className="logo" alt="Owner Picture" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto parent-link">
                            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
                            <Nav.Link href="#experience" className="nav-link">Experience</Nav.Link>
                            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                        </Nav>
                        <div className="social-icons">
                            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="sm-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="sm-icon">
                                <FaFacebook />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer" className="sm-icon">
                                <FaGithub />
                            </a>
                            <a href="https://tiktok.com/" target="_blank" rel="noreferrer" className="sm-icon">
                                <FaTiktok />
                            </a>
                            <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="sm-icon">
                                <FaYoutube />
                            </a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
