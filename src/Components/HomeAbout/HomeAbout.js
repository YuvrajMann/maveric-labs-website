import React, { Component } from "react";
import "./HomeAbout.css";
import { Container, Row, Col } from "react-bootstrap";
import Hexagon from "react-hexagon";

class HomeAbout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="home_wapper">
        <Row>
          <Col md={4} className="left_home_content">
            <h1>Maveric Labs</h1>
            <div>
              ML, AI, Vision & Robotics Incubation cum Knowledge centre.
            </div>
          </Col>
          <Col ms={8} className="right_home_contnet">
            <div class="part">
              <div class="hexa">
                <div class="hex1">
                  <div class="hex2">
                    <img
                      src="http://farm3.staticflickr.com/2788/4392569951_8bcec3b3ed_z.jpg?zz=1"
                      alt=""
                      width="320"
                      height="313"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="part">
              <div class="hexa">
                <div class="hex1">
                  <div class="hex2">
                    <img
                      src="http://farm3.staticflickr.com/2788/4392569951_8bcec3b3ed_z.jpg?zz=1"
                      alt=""
                      width="320"
                      height="313"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default HomeAbout;
