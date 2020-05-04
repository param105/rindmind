import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './css/App.css';
import Home from './components/Home.js';
import MyFooter from './components/MyFooter.js';
import About from './components/About.js';

class App extends Component {

    render(){
      return (
        <div className="App">              
          <HashRouter>
            <nav class= "myNavBar">
              <div>
                <header class="App-header"> <span>R</span>ind<span>M</span>ind </header>
                <div class="tagline"> The Spiritual Technocrat </div>
              </div>
              <div>
                <ul >      
                  <li><a  target="_blank" href="https://paramsir.github.io/"> Recent Posts  </a></li>
                  <li><NavLink to="/about"> about </NavLink></li>
                  <li><NavLink to="/"> Home </NavLink></li>
                </ul>
              </div>
            </nav>
            <div className="content">
                  <Route exact path="/" component={ Home }/>
                  <Route path="/about" component={ About }/>            
              </div>
          </HashRouter>
          <MyFooter />
    
        </div>
    
      );
    }
  }


export default App;
