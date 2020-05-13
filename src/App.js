import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css';

import MyFooter from './components/MyFooter.js';
import AppRoute from "./components/AppRoute.js"
import DashBoard from './components/dashboard/js/Dashboard';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DashBoard/>
        {/* <AppRoute/> */}
        {/* <MyFooter /> */}
      </div>

    );
  }
}


export default App;
