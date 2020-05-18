import React, { useState } from 'react'
import EmpTable from '../task2/EmpTable'
import empData from '../../data/Data.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "../../../training/scss/Training.scss";
import AddEmp from '../task2/AddEmp.js'

function Task2() {

    const [employees, setEmployees] = useState(empData)

    function setEmp(emp) {
        console.log("empoyee receied in task2 - ", emp)
        setEmployees([...employees, emp])
    }

    return (
        <Router>
            <div className="training-root">
                <h2> 2 - Add / Delete table value </h2>
                <Switch>
                    <Route exact path="/training">
                        <EmpTable empArray={employees} callback={setEmp} />
                    </Route>
                    <Route exact path="/addemp">
                            <AddEmp callback={setEmp}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Task2
