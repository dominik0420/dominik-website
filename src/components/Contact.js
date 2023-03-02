import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.gif';
import contactIcon from '../assets/img/contact-icon.png';
import navIcon5 from '../assets/img/nav-icon5.png';

export const Contact = () => {
  const formInitialDetails ={
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers:{
        "Content-Type": "Application/json; charset=utf-8"
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send It!");
    let result = response.json();

    /*clear the form*/
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({success: true, message: 'Message sent successully'});
    } else{
      setStatus({success: false, message: 'Oops! Something went wrong :(. Would you be so kind and try this again later? :)'})
    }
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send'); 
  const [status, setStatus] = useState({});

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img className="contactImg" src={contactImg} alt="Contact Me"/>
          </Col>
          <Col md={6}>
            <h2>Get In Touch? </h2>
            <h4>If you're this far that means you have at least some interest in what I did or what I am doing. Why not reach out? </h4>
            <Row> 
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
                <a href="mailto:dominiclesnar233@gmail.com" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '5px' }}>
                  <img className="contactIcon" src={contactIcon} />
                  <p className="email"style={{ textDecoration: 'none'}}>dominiclesnar233@gmail.com</p>
                </a>
                <a href="https://twitter.com/onirozsound" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '5px' }}>
                  <img className="contactIcon" src={navIcon5} />
                  <p className="email"style={{ textDecoration: 'none'}}> @ONIROZ_SOUND </p>
                </a>
              </Col>
            </Row>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value )} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value )} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value )} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value )} />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea row="6" value={formDetails.message} placeholder="Stuff you wanna say to me :)" onChange={(e) => onFormUpdate('message', e.target.value )} />
                  <button type="submit"> <span> {buttonText} </span> </button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger": "success"}> {status.message} </p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}