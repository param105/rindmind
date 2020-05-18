import React from "react";
import "../scss/Training.scss";
import Task1 from "../js/Task1.js";
import Task2 from "../../training/js/task2/Task2.js";
import Task3 from "./task3/Task3.js";

export default function Training() {
    return (
      <div >  
        <Task3 />
        <Task2 />
        <Task1 />
      </div>
     
    );
  
}