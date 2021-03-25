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
            <a href="/home#about_anchor">
              <li>About</li>
            </a>
            <li>Academics</li>
            <NavLink to="/facilities">
              <li>Facilities</li>
            </NavLink>
            <li>Team</li>
            <li>Research Projects</li>
            <NavLink to="/contact">
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
