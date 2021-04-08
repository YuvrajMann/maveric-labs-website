import React, { Component } from "react";
import "./Academics.css";
import { Container, Row, Col, Table } from "react-bootstrap";

const pastData = [
  {
    courseCode: "MAV123",
    courseName: "FDP on Python and Machine",
    courseDetails: {
      courseDescription:
        "To create adequate scientific coding skills and temperament among faculty from vairous regions A one week Faculty Development Programme was organized in May-June 2018. Faculty from various states of India were patricipants.",
      instructor: ["Aakashdeep Singh", "Harish Kumar"],
      startDate: "12/03/2013",
      endDate: "14/04/2015",
      registerationLink: "",
      queryContact: {
        contact: "+91903222112",
        email: "python@gmail.com",
      },
    },
  },
  {
    courseCode: "MAV1235",
    courseName: "Industrial Internship",
    courseDetails: {
      courseDescription:
        "In-lab training cum product devlopment at UIET on June '2018 to undertake projects like Facenet, GANs etc.",
      instructor: ["Aakashdeep Singh", "Harish Kumar"],
      startDate: "12/03/2013",
      endDate: "14/04/2015",
      registerationLink: "",
      queryContact: {
        contact: "+91903222112",
        email: "python@gmail.com",
      },
    },
  },
  {
    courseCode: "MAV143",
    courseName: "COMPUTER VISION",
    courseDetails: {
      courseDescription:
        "A course was conducted in April '17 to introduce participants: Bachelor, Masters, and Doctoral students, to a range of topics in Visual Perception. This course was conducted as a skill devlopment excercise exclusively for the students of Panjab University. Couse specific details can be acessed by clicking the link at the begining.",
      instructor: ["Aakashdeep Singh", "Harish Kumar"],
      startDate: "12/03/2013",
      endDate: "14/04/2015",
      registerationLink: "",
      queryContact: {
        contact: "+91903222112",
        email: "python@gmail.com",
      },
    },
  },
  {
    courseCode: "MAV1234",
    courseName: "Deep Learning & ML (applied to vision)",
    courseDetails: {
      courseDescription:
        "To bridge the Skills Gap with current state of the art in AI research and industry vide practices; succeding month (May '17) another programme was delivered on Deep Learning and Machine Learning. The intensive course focused on solving vision based problems using Deep Learning or ML. Additionally, students were also encouraged to apply their acquired skills to other domains as well. ",
      instructor: ["Aakashdeep Singh", "Harish Kumar"],
      startDate: "12/03/2013",
      endDate: "14/04/2015",
      registerationLink: "",
      queryContact: {
        contact: "+91903222112",
        email: "python@gmail.com",
      },
    },
  },
];

const ongoingData = [
  {
    courseCode: "MAV3234",
    courseName: "Python for Scientific computing",
    courseDetails: {
      courseDescription:
        "To create adequate scientific coding skills and temperament among students of University Institute of Engineering and Technology, Panjab University; a month long internship on Python programming language was organized. ",
      instructor: ["Aakashdeep Singh", "Harish Kumar"],
      startDate: "12/03/2013",
      endDate: "14/04/2015",
      registerationLink: "",
      queryContact: {
        contact: "+91903222112",
        email: "python@gmail.com",
      },
    },
  },
];

const upcomingData = [
  {
    courseCode: "MAV3334",
    courseName: "Industrial Internship",
    courseDetails: {
      courseDescription:
        "In-lab training cum product devlopment at UIET on June '17, in association with Deep Cognitives.",
      instructor: ["Aakashdeep Singh", "Harish Kumar"],
      startDate: "12/03/2013",
      endDate: "14/04/2015",
      registerationLink: "",
      queryContact: {
        contact: "+91903222112",
        email: "python@gmail.com",
      },
    },
  },
];
class Academics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseType: "past",
    };
  }
  render() {
    const pastDataMaker = () => {
      const pastNode = [];

      pastData.map((dataEl, index) => {
        pastNode.push(
          <tr>
            <td>{index + 1}</td>
            <td>{dataEl.courseCode}</td>
            <td>{dataEl.courseName}</td>
            <td>
              <div className="details_button">See Details</div>
            </td>
          </tr>
        );
      });
      return pastNode;
    };
    const ongoingDataRender = () => {
      const ongoingNode = [];

      ongoingData.map((dataEl, index) => {
        ongoingNode.push(
          <tr>
            <td>{index}</td>
            <td>{dataEl.courseCode}</td>
            <td>{dataEl.courseName}</td>
            <td>
              <div className="details_button">See Details</div>
            </td>
          </tr>
        );
      });
      return ongoingNode;
    };
    const upcomingDataRender = () => {
      const upcomingNode = [];

      upcomingData.map((dataEl, index) => {
        upcomingNode.push(
          <tr>
            <td>{index}</td>
            <td>{dataEl.courseCode}</td>
            <td>{dataEl.courseName}</td>
            <td>
              <div className="details_button">See Details</div>
            </td>
          </tr>
        );
      });
      return upcomingNode;
    };
    const dataToRender = () => {
      if (this.state.courseType == "past") {
        return pastDataMaker();
      } else if (this.state.courseType == "ongoing") {
        return ongoingDataRender();
      } else if (this.state.courseType == "upcoming") {
        return upcomingDataRender();
      }
    };
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
          <Col md={12}>
            <div className="course_cat">
              <div
                className={
                  this.state.courseType == "ongoing"
                    ? "ongoing active"
                    : "ongoing"
                }
                onClick={() => {
                  this.setState({
                    courseType: "ongoing",
                  });
                }}
              >
                Ongoing
              </div>
              <div
                className={
                  this.state.courseType == "past" ? "past active" : "past"
                }
                onClick={() => {
                  this.setState({
                    courseType: "past",
                  });
                }}
              >
                Past
              </div>
              <div
                className={
                  this.state.courseType == "upcoming"
                    ? "upcoming active"
                    : "upcoming"
                }
                onClick={() => {
                  this.setState({
                    courseType: "upcoming",
                  });
                }}
              >
                Upcoming
              </div>
            </div>
          </Col>
          <Col md={12}>
            <Table bordered hover responsive size="md">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{dataToRender()}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Academics;
