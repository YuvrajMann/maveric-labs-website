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
        <Route path="/about">
          <h1>
            {" "}
            About Next.js Next.js is a popular and lightweight framework for
            static and server‑rendered applications built with React. It
            includes styling and routing solutions out of the box, and assumes
            that you’re using Node.js as the server environment. Learn Next.js
            from its official guide. Gatsby Gatsby is the best way to create
            static websites with React. It lets you use React components, but
            outputs pre-rendered HTML and CSS to guarantee the fastest load
            time. Lea
          </h1>
        </Route>
      </Switch>
    );
  }
}
export default MainComponent;
