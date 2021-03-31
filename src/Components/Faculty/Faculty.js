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
              image="http://uiet.puchd.ac.in/maivriklabs/assets/images/harish-2-1450x1450.jpg"
            ></FacultyCard>
          </Col>
          <Col md={4}>
            <FacultyCard
              name="Akashdeep"
              position="Assistant Professor"
              image="http://uiet.puchd.ac.in/maivriklabs/assets/images/akash-958x958.jpg"
            ></FacultyCard>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FacultyCard
              name="Sarbjeet Singh"
              position="Professor"
              image="http://uiet.puchd.ac.in/maivriklabs/assets/images/sarbjeet-singh-400x400.jpg"
            ></FacultyCard>
          </Col>
          <Col md={4}>
            <FacultyCard
              name="Sakshi Kaushal"
              position="Assistant Professor"
              image="http://uiet.puchd.ac.in/maivriklabs/assets/images/photo-sakshi-600x781.jpg"
            ></FacultyCard>
          </Col>
          <Col md={4}>
            <FacultyCard
              name="Manisha Kaushal"
              position="Assistant Professor"
              image="http://uiet.puchd.ac.in/maivriklabs/assets/images/scan0014-250x323.jpg"
            ></FacultyCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Faculty;
