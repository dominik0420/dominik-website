import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

import album1 from "../assets/img/album1.jpg";
import single1 from "../assets/img/single1.jpg";

export const Music = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return(
    <section className="music" id="musics">
      <Container>
        <Row>
          <Col>
            <div className="music-bx">
              <h2>
                My Music
              </h2>
              <p>
                Check out my released music here <a href="https://open.spotify.com/artist/27uVi1PolQhVEkjVrqSX0X" target="_blank"> → </a>
              </p>
              <Carousel responsive={responsive} infinite={true} className="music-slider">
                <div className = "item">
                  <a href="https://open.spotify.com/album/6WTnsLfjL5WHP4LjsG2l2i" target="_blank"> <img src={album1} alt="Image"/> </a>
                  <h5> <a href="https://open.spotify.com/album/6WTnsLfjL5WHP4LjsG2l2i" target="_blank"> LOTUS </a> </h5>
                </div>
                <div className = "item">
                  <a href="https://open.spotify.com/album/0XVFQhA463SojFXEeIrwwk" target="_blank"> <img src={single1} alt="Image"/> </a>
                  <h5> <a href="https://open.spotify.com/album/0XVFQhA463SojFXEeIrwwk" target="_blank" > GROUND HIDDEN </a> </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}