import React from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import '../css/App.css';
import Home from '../components/home/js/Home.js';
import About from '../components/about/js/About';
import Training from '../components/training/js/Training.js';
import DashBoard from '../components/dashboard/js/Dashboard.js';

export default function AppRoute() {
    return (      
        <HashRouter>
          <nav class="myNavBar">
            <div>
              <header class="App-header"> <span>R</span>ind<span>M</span>ind </header>
              <div class="tagline"> The Spiritual Technocrat </div>
            </div>
            <div>
              <ul >
                <li><NavLink to="/about"> about </NavLink></li>
                <li><NavLink to="/training"> Training </NavLink></li>
                <li><NavLink to="/dashboard"> DashBoard </NavLink></li>
                <li><NavLink to="/"> Home </NavLink></li>
              </ul>
            </div>
          </nav>
          <div className="content">
            <Route path="/training" component={Training} />
            <Route path="/about" component={About} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/" component={Home} />
          </div>
        </HashRouter>
       
    )
}
