import React, { Component } from "react";
import "./HomeAbout.css";
import { Container, Row, Col } from "react-bootstrap";

class HomeAbout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="home_wapper">
        <Row
          style={{
            height: "100vh",
            alignItems: "center",
            paddingTop: "40px",
            alignContent: "flex-start",
          }}
          className="row justify-content-around row justify-content-center"
        >
          <Col sm={12} md={5} className="left_home_content">
            <h1>Maveric Labs</h1>
            <div>
              ML, AI, Vision & Robotics Incubation cum Knowledge centre.
            </div>
          </Col>
          <Col
            sm={12}
            md={7}
            className="right_home_content d-flex justify-content-center"
          >
            <div className="hexagon_wrapper">
              <div className="hexa1">
                <img src="https://ai.stanford.edu/wp-content/uploads/2020/10/hexagon-aff-big.jpg"></img>
              </div>
              <div className="hexa2">
                <img
                  src="https://www.w3schools.com/html/img_chania.jpg"
                  width={1700}
                  height={230}
                ></img>
              </div>
              <div className="hexa3">
                <img src="https://ai.stanford.edu/wp-content/uploads/2020/10/hexagon-aff-big.jpg"></img>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={5} className="left_home_content">
            <h1 style={{ marginLeft: "-90px" }}>About Us</h1>
            <div>
              MAIVRIK stands for ML, AI, Vision & Robotics Incubation cum
              Knowledge centre. It has been set up at University Institute of
              Engineering & Technology (UIET) Panjab University, Chandigarh. It
              has been established to create industry-accademic partnership by
              encouraging students, faculty and industrial members to push R&D
              in the aforementioned discplines.
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default HomeAbout;
