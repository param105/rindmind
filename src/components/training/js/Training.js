import React, { Component } from "react";
import "../scss/Training.scss";
import Task1 from "../js/Task1.js";

function Training() {

    return (
      <div className='container'>   
        <h1> Training Sessions </h1>
        <div>
          <Task1 />
       </div>
      </div>
     
    );
  
}

export default Training;