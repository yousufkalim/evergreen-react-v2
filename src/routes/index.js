// Init
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import Home from '../containers/Home.js';
import ContactUs from '../containers/ContactUs.js';
import WebDev from '../containers/Services/WebDev.js';
import AppDev from '../containers/Services/Appdev.js';
import CustomSolution from '../containers/Services/CustomSolution.js';
import About from '../containers/About.js';
import Project from '../containers/Project';
import OurValues from '../containers/OurValues';
// import Project from '../containers/Project.js';
const index = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contactus' component={ContactUs} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/ourvalues' component={OurValues} />
      <Route exact path='/webdevelopment' component={WebDev} />
      <Route exact path='/appdevelopment' component={AppDev} />
      <Route exact path='/customsolutions' component={CustomSolution} />
    </Switch>
  );
};

export default index;
