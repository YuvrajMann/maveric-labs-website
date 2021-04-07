import React, { Component } from "react";
import "./Academics.css";
import { Container, Row, Col } from "react-bootstrap";

class Academics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row className="header_row">
          <Col md={12} className="academic_header">
            <h1>ACADEMICS</h1>
          </Col>
          <Col md={12} className="sec_header">
            <div>
              To facilliate necessary engineering skill devlopment. Regular
              academic activities and courses are organised by the LAB.
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
export default Academics;
