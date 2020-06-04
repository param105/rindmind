import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css';
import DashBoard from './components/dashboard/js/Dashboard';

class App extends Component {

  render() {
    return (
      <div className="App">
          <DashBoard/>
      </div>

    );
  }
}


export default App;
