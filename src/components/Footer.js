import { Col, Container, Row } from "react-bootstrap";
import onilogo from '../assets/img/oniroz.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return(
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={onilogo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-media">
              <a href="Instagram"><img src={navIcon1} /></a>
              <a href="Twitter"><img src={navIcon2} /></a>
              <a href="Spotify"><img src={navIcon3} /></a>
            </div>
          </Col>
          <p> &copy; 2023 Zehong Li. All rights reserved. </p>
        </Row>
      </Container>
    </footer>
  )
}