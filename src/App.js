import React from 'react';
import './css/App.css';
import MyHeader from './components/MyHeader.js';
import MyBody from './components/MyBody.js';
import MyFooter from './components/MyFooter.js';

function App() {
  return (
    <div className="App">     
      <MyHeader />
      <MyBody />
      <MyFooter />

    </div>

  );
}

export default App;
