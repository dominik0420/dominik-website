import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const PdfViewer = () => {

  return (

    
    <section className="pdf-container" id="pdfviewer">
      <Container>
        <Row>
          <Col>
            <h2> Résumé / CV </h2>
            <p> uhhhh just in case you might wanna check. <a> Click here if you hate Google Drive for some reason. </a> </p>
            <iframe src="https://drive.google.com/file/d/1ubPAH_IyFPyrP8rGK_JCeGse-1D9wpl7/view?usp=share_link" width="640" height="480" ></iframe>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}/>
    </section>
  )
}