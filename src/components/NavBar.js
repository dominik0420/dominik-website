import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import onilogo from '../assets/img/oniroz.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';
import navIcon5 from '../assets/img/nav-icon5.png';

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
              href="#home"
              className={activateLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Me
            </Nav.Link>

            <Nav.Link
              href="#musics"
              className={activateLink === 'musics' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('musics')}
            >
              My Music
            </Nav.Link>

            <Nav.Link
              href="#project"
              className={activateLink === 'project' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('project')}
            >
              My Projects
            </Nav.Link>

            <Nav.Link
              href="#pdfviewer"
              className={activateLink === 'pdfviewer' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('pdfviewer')}
            >
              My CV
            </Nav.Link>

            <Nav.Link
              href="#connect"
              className={activateLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('connect')}
            >
              My Contact
            </Nav.Link>
          </Nav>
          
          

          <span className="navbar-text">
            <div className="social-media">
              <a href="https://www.linkedin.com/in/zehong-li-8b1232233/" target='_blank'> <img src={navIcon1} /> </a>
              <a href="https://open.spotify.com/artist/27uVi1PolQhVEkjVrqSX0X" target='_blank'> <img src={navIcon2} /> </a>
              <a href="https://instagram.com/itsnotdominikkk?igshid=YmMyMTA2M2Y" target='_blank'> <img src={navIcon3} /> </a>
              <a href="https://github.com/dominik0420" target='_blank'> <img src={navIcon4} /> </a>
              <a href="https://twitter.com/onirozsound" target='_blank'> <img src={navIcon5} /> </a>
            </div>
          </span>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
