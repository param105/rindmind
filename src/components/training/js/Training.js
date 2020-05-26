import React from "react";
import "../scss/Training.scss";
import Task1 from "../js/Task1.js";
import Task2 from "../../training/js/task2/Task2.js";
import Task3 from "./task3/Task3.js";
import Task4 from "../../training/js/task4/Task4"
import EmpStore from "../../../stores/EmpStore"
import { Provider } from 'mobx-react';

export default function Training() {
  return (
    <Provider empStore={EmpStore}>
      <div >
        <Task4 />
        <Task3 />
        <Task2 />
        <Task1 />
      </div>
    </Provider>


  );

}