import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedIn from "../../assests/linkedin.svg";
import "./Faculty.css";

const FacultyCard = (props) => {
  return (
    <div className="card_wrap_profile">
      <img src={props.image}></img>
      <div className="social_contact">
        <div className="prof_name">{props.name}</div>
        <div className="prof_position">{props.position}</div>
        <div className="prof_linkedIn">
          <a>
            <img
              style={{
                width: "30px",
              }}
              src={LinkedIn}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
class Faculty extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={12} id="faculty_header_1">
            <h2>Faculty & Research Scientists</h2>
          </Col>
          <Col md={12} id="faculty_header_2">
            <h4>We are diverse group of Academicians working together</h4>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            marginTop: "60px",
            marginBottom: "50px",
          }}
        >
          <Col md={4}>
            <FacultyCard
              name="Harish Kumar"
              position="Professor"
              image="https://i.ibb.co/FbbMqhx/harish-2-1450x1450.jpg"
            ></FacultyCard>
          </Col>
          <Col md={4}>
            <FacultyCard
              name="Akashdeep"
              position="Assistant Professor"
              image="https://i.ibb.co/FqJ6JVG/akash-958x958.jpg"
            ></FacultyCard>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FacultyCard
              name="Sarbjeet Singh"
              position="Professor"
              image="https://i.ibb.co/D7CVQM0/sarbjeet-singh-400x400.png"
            ></FacultyCard>
          </Col>
          <Col md={4}>
            <FacultyCard
              name="Sakshi Kaushal"
              position="Assistant Professor"
              image="https://i.ibb.co/JKrZxTg/photo-sakshi-600x781.jpg"
              alt="photo-sakshi-600x781"
            ></FacultyCard>
          </Col>
          <Col md={4}>
            <FacultyCard
              name="Manisha Kaushal"
              position="Assistant Professor"
              image="https://i.ibb.co/D7H6w7S/scan0014-250x323.jpg"
              alt="scan0014-250x323"
            ></FacultyCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Faculty;
