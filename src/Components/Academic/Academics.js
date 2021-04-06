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
          <Col>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    1
                  </div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-12 h-12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                        FDP on Python and Machine
                      </h2>
                      <p class="leading-relaxed">
                        To create adequate scientific coding skills and
                        temperament among faculty from vairous regions A one
                        week Faculty Development Programme was organized in
                        May-June 2018. Faculty from various states of India were
                        patricipants.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    2
                  </div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-12 h-12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                        Industrial Internship
                      </h2>
                      <p class="leading-relaxed">
                        In-lab training cum product devlopment at UIET on June
                        '2018 to undertake projects like Facenet, GANs etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    3
                  </div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-12 h-12"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                        COMPUTER VISION
                      </h2>
                      <p class="leading-relaxed">
                        A course was conducted in April '17 to introduce
                        participants: Bachelor, Masters, and Doctoral students,
                        to a range of topics in Visual Perception. This course
                        was conducted as a skill devlopment excercise
                        exclusively for the students of Panjab University. Couse
                        specific details can be acessed by clicking the link at
                        the begining.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    4
                  </div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-12 h-12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                        Deep Learning & ML (applied to vision)
                      </h2>
                      <p class="leading-relaxed">
                        To bridge the Skills Gap with current state of the art
                        in AI research and industry vide practices; succeding
                        month (May '17) another programme was delivered on Deep
                        Learning and Machine Learning. The intensive course
                        focused on solving vision based problems using Deep
                        Learning or ML. Additionally, students were also
                        encouraged to apply their acquired skills to other
                        domains as well.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    5
                  </div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-12 h-12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                        Python for Scientific computing
                      </h2>
                      <p class="leading-relaxed">
                        To create adequate scientific coding skills and
                        temperament among students of University Institute of
                        Engineering and Technology, Panjab University; a month
                        long internship on Python programming language was
                        organized.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    6
                  </div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-12 h-12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                        Industrial Internship
                      </h2>
                      <p class="leading-relaxed">
                        In-lab training cum product devlopment at UIET on June
                        '17, in association with Deep Cognitives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Academics;
