import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import history from "../../history";
import HomeAbout from "../HomeAbout/HomeAbout";
import Contact from "../Contact/Contact";

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(history.location.pathname);
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <HomeAbout></HomeAbout>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    );
  }
}
export default MainComponent;
