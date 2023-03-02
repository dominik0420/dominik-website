import { Col, Container, Row } from "react-bootstrap";
import onilogo from '../assets/img/oniroz.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';
import navIcon5 from '../assets/img/nav-icon5.png';

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
              <a href="https://www.linkedin.com/in/zehong-li-8b1232233/" target='_blank'> <img src={navIcon1} /> </a>
              <a href="https://open.spotify.com/artist/27uVi1PolQhVEkjVrqSX0X" target='_blank'> <img src={navIcon2} /> </a>
              <a href="https://instagram.com/itsnotdominikkk?igshid=YmMyMTA2M2Y" target='_blank'> <img src={navIcon3} /> </a>
              <a href="https://github.com/dominik0420" target='_blank'> <img src={navIcon4} /> </a>
              <a href="https://twitter.com/onirozsound" target='_blank'> <img src={navIcon5} /> </a>
            </div>
          </Col>
          <p> &copy; 2023 Zehong Li. All rights reserved. </p>
        </Row>
      </Container>
    </footer>
  )
}