import React, { Component } from "react";
import "./Facilities.css";
import { Container, Row, Col } from "react-bootstrap";
import checked from "../../assests/checked.png";
import facilty from "../../assests/facility.jpg";

class Facilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card1Active: false,
      card2Active: false,
      card3Active: false,
    };
  }
  render() {
    return (
      <>
        {/* <div className="image_content">
            <h3>MAIVRIK Lab in action</h3>
            <div>
              Detection and Robotics teams working in their respective groups.
              All the necessary open source and proprietary software is
              available on individual workstation. The dedicated server and
              workstation hardware is assembled in the server room adjoining the
              lab.
            </div>
          </div> */}
        {/* <img
            style={{ width: "100%", height: "600px" }}
            src="http://uiet.puchd.ac.in/maivriklabs/assets/images/whatsapp-image-2017-10-09-at-4.50.28-pm-1152x864.jpg"
          ></img> */}

        <Container className="facilities_wrapper">
          <Row>
            <Col
              md={12}
              style={{ textAlign: "center", marginTop: "40px" }}
              className="facilty_header_wrapper"
            >
              <h1>Facilities</h1>
              <div>State of art Academic Lab</div>
            </Col>
          </Row>
          <Row className="cards_wrapper">
            <Col sm={12} md={4}>
              <div className="my_card_wrapper">
                <div className="my_card_header">
                  STATE OF THE ART & DEDICATED AI HARDWARE
                </div>
                <div className="facility_card_content small">
                  The lab is equiped with the latest generation of Two NVIDIA
                  GPUs based on the pascal architecture, i.e. GTX Titan X(funded
                  by DIC, UIET, Panjab University and NVIDIA). At the moment
                  there are 2 such multi-GPU machines. The Lab is also seeking
                  to acquire server based hardware to extend the data crunching
                  capabilities. Current system with GTX Titan rivals Nvidia
                  DevBox.
                </div>
                <div className="check_logo">
                  <img src={checked} width={70}></img>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="my_card_wrapper" className="my_card_wrapper">
                <div className="my_card_header">LATEST WORKSTATION</div>
                <div className="facility_card_content ">
                  In addition to dedicated hardware for conducting AI research,
                  the lab has individual workstations for students and lab
                  members to code or devlop their solutiuons. Each Dell
                  workstation is equiped with an i7 procesoor and windows/ubuntu
                  linux for any kind of devlopment/research work.
                </div>
                <div className="check_logo">
                  <img src={checked} width={70}></img>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="my_card_wrapper" className="my_card_wrapper">
                <div className="my_card_header">AMPLE WORKSPACE</div>
                <div className="facility_card_content">
                  The lab has ample seating capacity for more than 25 members,
                  with spacious surroundings to conduct indoor expirments/
                  lectures.
                </div>
                <div className="check_logo" style={{ textAlign: "center" }}>
                  <img src={checked} width={70}></img>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "70px", marginBottom: "50px" }}>
            <Col md={6}>
              <div className="top_line">MAIVRIK Lab in action</div>
              <div className="decription_text">
                Detection and Robotics teams working in their respective groups.
                All the necessary open source and proprietary software is
                available on individual workstation. The dedicated server and
                workstation hardware is assembled in the server room adjoining
                the lab.
              </div>
              <Container className="stats">
                <Row style={{ width: "100%" }}>
                  <Col md={3} sm={6} className="data_display">
                    <div>100+</div>
                    <div>Students</div>
                  </Col>
                  <Col md={3} sm={6} className="data_display">
                    <div>10</div>
                    <div>Computers</div>
                  </Col>
                  <Col md={3} sm={6} className="data_display">
                    <div>4</div>
                    <div>Awards</div>
                  </Col>
                  <Col md={3} sm={6} className="data_display">
                    <div>35</div>
                    <div>Research Papers</div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={6}>
              <img
                src={facilty}
                className="img-fluid"
                style={{
                  borderRadius: "5px",
                  minHeight: "300px",
                  minWidth: "300px",
                }}
              ></img>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Facilities;
