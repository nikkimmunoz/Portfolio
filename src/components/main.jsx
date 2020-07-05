import React from "react";
import LandingPage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}></Route>
    <Route exact path="/aboutme" component={AboutMe}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/projects" component={Projects}></Route>
    <Route exact path="/resume" component={Resume}></Route>
  </Switch>
);

export default Main;
