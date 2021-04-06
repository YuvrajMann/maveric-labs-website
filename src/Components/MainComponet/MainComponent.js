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
import Faculty from "../Faculty/Faculty.js";
import Contact from "../Contact/Contact";
import Facilities from "../Facilities/Facilities.js";
import Research from "../Research/Research.js";
import Academics from "../Academic/Academics.js";

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
        <Route path="/facilities">
          <Facilities></Facilities>
        </Route>
        <Route path="/faculty">
          <Faculty></Faculty>
        </Route>
        <Route path="/researchWork">
          <Research></Research>
        </Route>
        <Route path="/academics">
          <Academics></Academics>
        </Route>
      </Switch>
    );
  }
}
export default MainComponent;
