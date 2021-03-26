import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import FAQs from "./FAQs";
import ContactUs from "./ContactUs";
import Sponsorship from "./Sponsorship";

function App() {
  return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/home"}>Financial Freedom</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/faq"}>FAQs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/contact-us"}>Contact us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sponsorship"}>Sponsors</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="outer">
            <div className="inner">
              <Switch>
                <Route path="/home" component={Home} />
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/faq" component={FAQs} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/sponsorship" component={Sponsorship} />
              </Switch>
            </div>
          </div>
        </div></Router>
  );
}

export default App;