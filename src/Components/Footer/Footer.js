import React, { Component } from "react";
import "./Footer.css";
import { Container, Col, Row, Button } from "react-bootstrap";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main_footer">
        <Container>
          <Row>
            <Col md={8}>
              <Container>
                <Row>
                  <Col md={6}>
                    <h1>Address</h1>
                    <div style={{ marginTop: "20px" }}>
                      University Institute of Engineering & Tech, Panjab
                      University, South Campus, Sector-25, Chandigarh 160036
                      India
                    </div>
                  </Col>
                  <Col md={6}>
                    <h1>Links</h1>
                    <div id="footer_links">
                      <a href="">Panjab University</a>
                      <a href="">UIET Puchd</a>
                      <a href="">
                        Centre of SKill Devlopment & Entreprenureship (CSDE)
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row id="footer_buttons">
                  <div className="btn1 button">Map And Direction</div>
                  <div className="btn2 button">Feedback</div>
                  <div className="btn3 button">Contact Us</div>
                </Row>
              </Container>
            </Col>
            <Col md={1} style={{ marginBottom: "-78px" }}>
              <div className="seprator"></div>
            </Col>
            <Col md={3}>
              <h4>LET THE WORLD KNOW ABOUT US AND ANOUT OUR WORLD.</h4>
              <h1>
                Maveric<br></br> Labs
              </h1>
            </Col>
          </Row>
        </Container>
        <div id="copyright">
          © Copyright 2021-22 MAIVRIK - All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
