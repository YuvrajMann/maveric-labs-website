import React, { Component } from "react";
import "./Footer.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fagoogle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main_footer">
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <Container>
                <Row>
                  <Col md={6} id="leftdas">
                    <h1>Address</h1>
                    <div style={{ marginTop: "20px" }}>
                      University Institute of Engineering & Tech, Panjab
                      University, South Campus, Sector-25, Chandigarh 160036
                      India
                    </div>
                  </Col>
                  <Col md={6} id="rdsf">
                    <h1>Links</h1>
                    <div id="footer_links">
                      <a href="http://puchd.ac.in/" target="_blank">
                        <u>Panjab University</u>
                      </a>
                      <a href="http://www.uiet.puchd.ac.in/" target="_blank">
                        <u>UIET Puchd</u>
                      </a>
                      <a href="http://csde.puchd.ac.in/" target="_blank">
                        <u>
                          Centre of SKill Devlopment & Entreprenureship (CSDE)
                        </u>
                      </a>
                    </div>
                  </Col>
                </Row>

                <Row id="footer_buttons">
                  <Col md={4} style={{ marginTop: "8px" }}>
                    <div className="btn1 button">Map And Direction</div>
                  </Col>
                  <Col md={4} style={{ marginTop: "8px" }}>
                    <div className="btn2 button">Feedback</div>
                  </Col>
                  <Col md={4} style={{ marginTop: "8px" }}>
                    <div className="btn3 button">Contact Us</div>
                  </Col>
                </Row>
                <Row>
                  <Col ms={12}>
                    <div className="social_links small_scr">
                      <a>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a>
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                      <a>
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a>
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col
              md={1}
              style={{ marginTop: "-30px", marginBottom: "-68px" }}
              className="d-sm-none d-none d-md-block"
            >
              <div className="seprator"></div>
            </Col>
            <Col md={3} id="rf" className="d-sm-none d-none d-md-block">
              <h4>LET THE WORLD KNOW ABOUT US AND ANOUT OUR WORLD.</h4>
              <h1 id="lab_name">Maveric Labs</h1>
              <div className="social_links">
                <a>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
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
