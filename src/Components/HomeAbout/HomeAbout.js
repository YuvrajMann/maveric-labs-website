import React, { Component } from "react";
import "./HomeAbout.css";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./MyCard.js";
import Footer from "../Footer/Footer.js";
class HomeAbout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container className="home_wapper">
          <Row
            style={{
              height: "100vh",
              alignItems: "center",
              marginTop: "-40px",
              alignContent: "center",
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
          <Row id="about_anchor">
            <Col sm={12} md={5} className="left_home_content">
              <h1 style={{ marginLeft: "-90px" }}>About Us</h1>
              <div>
                MAIVRIK stands for ML, AI, Vision & Robotics Incubation cum
                Knowledge centre. It has been set up at University Institute of
                Engineering & Technology (UIET) Panjab University, Chandigarh.
                It has been established to create industry-accademic partnership
                by encouraging students, faculty and industrial members to push
                R&D in the aforementioned discplines.
              </div>
            </Col>
            <Col sm={12} md={7}>
              <div className="hexagon2warpper">
                <div className="hexa4">
                  <img src="data:image/jpeg;base64,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"></img>
                </div>
                <div className="hexa5">
                  <img src="https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/digital/innovation-AdobeStock_58635389.png"></img>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={7} className="left_vison_content">
              <div className="hexagon_vison_wrapper">
                <div className="hex6">
                  <img src="http://static1.squarespace.com/static/583ed05c59cc68a8c3e45c0f/584331c3725e25d0d2a9f24c/5856a606f5e2315e3ef8b08a/1549242754691/vision.png?format=1500w"></img>
                </div>
                <div className="hex7">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-SPYnTs7J7lD9IgDgj5dbZhBtQphWsDYOg&usqp=CAU"></img>
                </div>
              </div>
            </Col>
            <Col sm={12} md={5} className="right_vison_content">
              <h1>Our Vison</h1>
              <div>
                Our Vision is to ensure that lab serves as a launchapd for new
                ideas/startups along with creating competitive solution for
                business enterprises in the domain of machine and deep learning.
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} className="expertise_header">
              <h1>Our Expertise</h1>
            </Col>
            <Col md={3} sm={12}>
              <MyCard
                header="Computer Vison"
                content="At MAIVRIK we are solving 
Vision related challenges of AI using 
both data driven approach & more conventional 
geometrical methods."
              ></MyCard>
            </Col>
            <Col md={3} sm={12}>
              <MyCard
                header="Deep Learning & ML"
                content="At MAIVRIK, we are utilising both Machine Learning  and its subset Deep Learning to solve challenges across myriad of verticals-Cyber Secuity,  Surveillence, Generative"
              ></MyCard>
            </Col>
            <Col md={3} sm={12}>
              <MyCard
                header="Natural Language Processing"
                content="AT MAIVRIK we are investigating use of RNN and Machine Learning to unravel the present day problems in the field of NLP like Sentiment Analysis, Emotion"
              ></MyCard>
            </Col>
            <Col md={3} sm={12}>
              <MyCard
                header="Image Analysis & Processing"
                content="We are also researching on developing smart AI based tools for application to the field of image analysis and processing, specific to Medical Imaging."
              ></MyCard>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </>
    );
  }
}
export default HomeAbout;
