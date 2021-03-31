import React, { Component } from "react";
import mavericLogo from "../../assests/mavericLabsLogo.png";
import sidebarIcon from "../../assests/sidebarIcon.jpg";
import crossIcon from "../../assests/times-solid.svg";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerActive: false,
    };
  }
  render() {
    return (
      <div
        className={
          this.props.scrollDown
            ? this.state.isDrawerActive
              ? "main_header active"
              : "main_header"
            : this.state.isDrawerActive
            ? "main_header_stiky active"
            : "main_header_stiky"
        }
      >
        <div
          className={
            this.state.isDrawerActive ? "left_content active" : "left_content"
          }
        >
          <img src={mavericLogo} width={70}></img>
        </div>
        <div
          className={
            this.state.isDrawerActive ? "snack_bar active" : "snack_bar"
          }
          onClick={() => {
            document.body.style.overflow = "hidden";
            this.setState({
              ...this.state,
              isDrawerActive: true,
            });
          }}
        >
          <div class="stick"></div>
          <div class="stick"></div>
          <div class="stick"></div>
        </div>
        <div
          className={
            this.state.isDrawerActive ? "right_content active" : "right_content"
          }
        >
          <div
            className="cross_icon"
            onClick={() => {
              document.body.style.overflowY = "scroll";
              this.setState({
                ...this.state,
                isDrawerActive: false,
              });
            }}
          >
            <img
              style={{
                width: "40px",
              }}
              src={crossIcon}
            ></img>
          </div>
          <ul>
            <NavLink
              to="/home"
              onClick={() => {
                document.body.style.overflowY = "scroll";
                this.setState({
                  ...this.state,
                  isDrawerActive: false,
                });
              }}
            >
              <li
                className={window.location.pathname == "/home" ? "active" : ""}
              >
                Home
              </li>
            </NavLink>
            <a
              href="/home#about_anchor"
              onClick={() => {
                document.body.style.overflowY = "scroll";
                this.setState({
                  ...this.state,
                  isDrawerActive: false,
                });
              }}
            >
              <li>About</li>
            </a>
            <li>Academics</li>
            <NavLink
              to="/facilities"
              onClick={() => {
                document.body.style.overflowY = "scroll";
                this.setState({
                  ...this.state,
                  isDrawerActive: false,
                });
              }}
            >
              <li>Facilities</li>
            </NavLink>
            <NavLink
              to="/faculty"
              onClick={() => {
                document.body.style.overflowY = "scroll";
                this.setState({
                  ...this.state,
                  isDrawerActive: false,
                });
              }}
            >
              <li>Team</li>
            </NavLink>
            <NavLink
              to="/researchWork"
              onClick={() => {
                document.body.style.overflowY = "scroll";
                this.setState({
                  ...this.state,
                  isDrawerActive: false,
                });
              }}
            >
              <li>Research Projects</li>
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => {
                document.body.style.overflowY = "scroll";
                this.setState({
                  ...this.state,
                  isDrawerActive: false,
                });
              }}
            >
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
