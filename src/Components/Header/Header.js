import React, { Component } from "react";
import mavericLogo from "../../assests/mavericLabsLogo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={this.props.scrollDown ? "main_header" : "main_header_stiky"}
      >
        <div className="left_content">
          <img src={mavericLogo} width={70}></img>
        </div>
        <div className="right_content">
          <ul>
            <NavLink to="/home">
              <li
                className={window.location.pathname == "/home" ? "active" : ""}
              >
                Home
              </li>
            </NavLink>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Academics</li>
            <li>Facilities</li>
            <li>Team</li>
            <li>Research Projects</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
