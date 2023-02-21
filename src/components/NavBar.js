import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import onilogo from '../assets/img/oniroz.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

  // Handle useState for link direction
  const [activateLink, setActiveLink] = useState('home');

  // Handle Scrolling
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Have the function happen only when scrolling and determines if statement
    window.addEventListener('scroll', onScroll);

    // Remove when components removed
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        {/* image or when not loaded, text 'logo-unloaded' */}
        <Navbar.Brand href="#home">
          <img className="logo" src={onilogo} alt="Logo-Unloaded" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#Me"
              className={activateLink === 'Me' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('Me')}
            >
              Me
            </Nav.Link>

            <Nav.Link
              href="#MyMusic"
              className={activateLink === 'MyMusic' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('MyMusic')}
            >
              My Music
            </Nav.Link>

            <Nav.Link
              href="#MyProjects"
              className={activateLink === 'MyProjects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('MyProjects')}
            >
              My Projects
            </Nav.Link>

            <Nav.Link
              href="#MyCV"
              className={activateLink === 'MyCV' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('MyCV')}
            >
              My CV
            </Nav.Link>

            <Nav.Link
              href="#MyContact"
              className={activateLink === 'MyContact' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('MyContact')}
            >
              My Contact
            </Nav.Link>

            {/* unused for now */}
            {/*
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
              */}
          </Nav>
          
          

          <span className="navbar-text">
            <div className="social-media">
              <a href="Instagram"><img src={navIcon1} /></a>
              <a href="Twitter"><img src={navIcon2} /></a>
              <a href="Spotify"><img src={navIcon3} /></a>
            </div>
            <button className="connect" onClick={() => console.log('connect')}>
            <span>Talk to Me?</span>
            </button>
          </span>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
