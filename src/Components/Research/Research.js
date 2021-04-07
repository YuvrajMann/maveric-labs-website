import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Research.css";

const ResearchCard = (props) => {
  let header = props.header;
  let content = props.content;
  let image = props.image;
  return (
    <Row style={{ marginTop: "30px" }} className="research_card_wrapper">
      <Col sm={4} md={4} className="card_image">
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={image}
        ></img>
      </Col>
      <Col sm={8} md={8}>
        <Container className="card_research_right">
          <Row className="card_research_header">
            <Col>{header}</Col>
          </Row>
          <Row>
            <Col className="card_research_content">{content}</Col>
          </Row>
          <Row>
            <Col>
              <div className="article_read_more">
                <div>
                  <span>Read More</span>
                  <svg
                    style={{ width: "25px" }}
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

const researchWork = [
  {
    image: "https://i.stack.imgur.com/sMVYi.jpg",
    header: "People and Face Detection",
    content:
      "One of the Major challenges in surveillence is detecting and tracking people. We intend to solve the problem by using deep learning in real time and improving the current state of art.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGGa6KQrHWgRQ951j0TKox9YdDfe4i2ophw&usqp=CAU",
    header: "Generative Networks",
    content:
      "(GANs) are a way to make generative models by having two neural networks(Discriminator and Geneartor) compete with each other.  At MAIVRIK we are training Generators to output images, faces etc.",
  },
  {
    image:
      "https://bestdroneforthejob.com/wp-content/uploads/2015/09/Agriculture-Drone-Buyers-Guide-flight-plan-for-quadcopter.jpeg",
    header: "UAVs Applications",
    content:
      "We are exploiting use of Deep Learning and Soft computing principles to develop various applications ranging from people detection, vehicle detection, classification, counting, tracking, survillence. ",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    header: "Shadow Detection & Removal",
    content:
      "Shadow detection is one of the major challenges in vehicular classification and tracking. We are working on the use of deep learning to remove shadows from images and moving vehicles. ",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzs8BZwF_MCCanZftzb-16Y5NyouZrtaeSsQ&usqp=CAU",
    header: "Network Intrusion Detection",
    content:
      "We have used Aritifial Neural Nets (ANN) in our attempt to solve the problem of network intrusion detection. Detecting a malicious entry or an intruder is the cornerstone for any cyber security threat detection system.",
  },
  {
    image:
      "https://media.wired.com/photos/5f132959a7abf1b32a154634/4:3/w_1800,h_1350,c_limit/how-to-know-if-youve-been-hacked.jpg",
    header: "Compromised Account Detection",
    content:
      "We  are researching on using efficient machine learning techniques to solve multifarious problems in cyber security. Another largely unsolved problem is identification of a compromised social media account.",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    header: "Sentiment Analysis in Multiple Domains",
    content:
      "Sentiment Analysis is seen as domain dependent problem and performance of such systems is therefore highly dependent on the amount and types of data available in individual domains.  In order to overcome such problems we tend to develop a novel system utilizing variety of machine learning algorithms for multiple domains. ",
  },
];
class Research extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="research_wrapper">
        <Row>
          <Col id="research_header">
            <h2>Ongoing Projects</h2>
          </Col>
        </Row>
        <Row>
          {researchWork.map((research_obj) => {
            return (
              <Col md={12}>
                <ResearchCard {...research_obj}></ResearchCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Research;
