import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import DashBoard from './components/dashboard/js/Dashboard';
import ScrollToTop from 'react-router-scroll-top'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop/>
          <DashBoard/>
        </Router>
      </div>

    );
  }
}


export default App;
