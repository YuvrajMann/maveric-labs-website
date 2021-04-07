import React, { Component } from "react";
import "./MyCard.css";

class MyCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card_wrapper">
        <div className="header">{this.props.header}</div>
        <div className="card_content">{this.props.content}</div>
        <div className="read_more">
          Learn More{" "}
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ width: "25px" }}
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    );
  }
}
export default MyCard;
