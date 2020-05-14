import React,{useState} from 'react'
import EmpTable from '../task2/EmpTable'
import empData from '../../data/Data.js'

function Task2() {

    const [employees, setEmployees] = useState(empData)

    return (
        <div className="container">
            <h2> 2 - Add / Delete table value </h2>
            <EmpTable empList= {employees}/>
        </div>
    )
}

export default Task2
