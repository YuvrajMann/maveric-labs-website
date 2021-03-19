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
        <div className="read_more">Learn More</div>
      </div>
    );
  }
}
export default MyCard;
