import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css';
import Home from './components/home/js/Home.js';
import MyFooter from './components/MyFooter.js';
import About from './components/about/js/About.js';
import Training from './components/training/js/Training.js'; 

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
                  <li><NavLink to="/training"> Training </NavLink></li>  
                  <li><NavLink to="/about"> about </NavLink></li>
                  <li><NavLink to="/"> Home </NavLink></li>
                </ul>
              </div>
            </nav>
            <div className="content">
                  <Route path="/training" component={ Training }/>   
                  <Route path="/about" component={ About }/> 
                  <Route exact path="/" component={ Home }/>           
              </div>
          </HashRouter>
          <MyFooter />
    
        </div>
    
      );
    }
  }


export default App;
