import React, { Component } from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF);

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
    };
  }
  render() {
    return (
      <Container className="contact_wapper">
        <Row
          style={{
            justifyContent: "left",
            marginBottom: "10px",
            paddingTop: "40px",
          }}
        >
          <h1 className="contact_header">Contact Info</h1>
        </Row>
        <Row>
          <Col md={7}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.9405605337606!2d76.75529511513817!3d30.74817108163175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9326073ab9%3A0x5e1dcb772320cc08!2sUiet%20Block%201!5e0!3m2!1sen!2sin!4v1616071829177!5m2!1sen!2sin"
              width="100%"
              height="550"
              style={{ border: "0px" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Col>
          <Col md={5} className="right_contact_section">
            <Row md={12} className="right_contact_area">
              <h1>Address</h1>
              <div>
                University Institute of Engineering & Tech, Panjab University,
                South Campus, Sector-25, Chandigarh 160036 India
              </div>
            </Row>
            <Row md={12} className="right_query_area">
              <h1>General Inquiries</h1>
              <div>
                <div>Prof. Aakashdeep Singh</div>
                <div>Maveric Lab Director</div>
                <div>tel:(650) 723-72683</div>
                <div>email:abc@gmail.com</div>
              </div>
            </Row>
            <Row md={12} className="right_mail_area">
              <h1>Mail Us At</h1>
              <div>
                <div>email: maivriklab@pu.ac.in, maivriklabs@gmail.com</div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row
          id="drop_header"
          style={{ marginTop: "50px", justifyContent: "center" }}
        >
          <h1>Drop a Line</h1>
        </Row>
        <Row className="feedback_form_wrapper">
          <Col md={12}>
            <Form style={{ textAlign: "center" }}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      bsSize="lg"
                      type="name"
                      name="name"
                      id="user_name"
                      placeholder="Your Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      bsSize="lg"
                      type="phone"
                      name="phone"
                      id="user_phone"
                      placeholder="Phone Number"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  bsSize="lg"
                  type="email"
                  name="email"
                  id="user_email"
                  placeholder="Email "
                />
              </FormGroup>
              <FormGroup>
                <Input
                  style={{ height: "200px" }}
                  bsSize="lg"
                  type="textarea"
                  name="message"
                  id="exampleText"
                  placeholder="Your message for us!"
                />
              </FormGroup>
              <Button
                style={{
                  marginTop: "20px",
                  background: "#989bf4",
                  borderColor: "#989bf4",
                }}
                type="submit"
                name="submit"
                id="exampleText"
                placeholder="message"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                SEND MESSAGE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
