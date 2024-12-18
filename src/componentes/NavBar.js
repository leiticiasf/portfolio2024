import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import github from '../assets/img/GitHubIcon.svg';
import linkedin from '../assets/img/LinkedInIcon.png';
import desenhoLeticia from '../assets/photos/eu.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>

        <Navbar.Brand href="#home">
          <img id="imgP"src={desenhoLeticia} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Início</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skills.js')}>Skills</Nav.Link>
            <Nav.Link href="#projetos" className={activeLink === "projetos" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects.js')}>Projetos</Nav.Link>
            <Nav.Link href="#curriculo" className={activeLink === "curriculo" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Curriculo.js')}>Currículo</Nav.Link>
            <Nav.Link href="#ppe" className={activeLink === "ppe" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Ppe.js')}>PPE</Nav.Link>

          </Nav>
          <span className="navbar-text">  
            <div className="social-icon">
              <a href='https://github.com/leiticiasf'><img src={github} alt="github" /> </a>
              <a href='https://www.linkedin.com/in/let%C3%ADcia-soares-ferreira-b763a42b8/'><img src={linkedin} alt="linkedin" /> </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
