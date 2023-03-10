import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);
  
  const [text, setText] = useState('');

  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const [index, setIndex] = useState(1);

  const toRotate = [ "Dominik", "ONIROZ", "Music Producer", "Software Engineer", "Web Dev", "Data Analyst"];

  const period = 5;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section className="banner" id="home">
      
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) => 
              <div className= {isVisible ? "animated__animated animated__fadeIn" : ""}>
                <span className="tagline"> Yo it's Zehong - </span>
                <h1>{`also might be known as`} 
                  <span className="txt-rotate" dataPeriod="5" data-rotate='[ "Dominik", "ONIROZ", "Music Producer", "Software Engineer", "Web Dev", "Data Analyst" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p> {'4th Year UCSD Undergrad major in Cognitive Science Spec. in Machine Learning and Neuro Computation.'}  </p>
                <p> {'Also sometimes a music producer. :)'}  </p>
                <a href="#connect">
                  Get in touch with me?
                  <ArrowRightCircle size={25}></ArrowRightCircle>
                </a>
                
              </div>
            }   
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={"headerImg"} alt=''/>
          </Col>
        </Row>
      </Container>


    </section>

  )
}