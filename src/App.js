import React, { Component } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import ReactDOM from "react-dom";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import MainComponent from "./Components/MainComponet/MainComponent";
import history from "./history";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/Components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollDown: false,
      activeMember: "/home",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => this.handleNavigation(e));
  }
  handleNavigation = (e) => {
    const window = e.currentTarget;
    if (this.prev > window.scrollY) {
      this.setState({
        ...this.state,
        scrollDown: false,
      });
    } else if (this.prev < window.scrollY) {
      this.setState({
        ...this.state,
        scrollDown: true,
      });
    }
    this.prev = window.scrollY;
  };
  render() {
    console.log(this.state.activeMember);
    return (
      <Router history={history}>
        <div className="App">
          <Header scrollDown={this.state.scrollDown} history={history}></Header>
          <div
            className={!this.state.scrollDown ? "content_margin" : "content"}
          >
            <MainComponent></MainComponent>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
