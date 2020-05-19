import React, { useState,useEffect } from 'react'
import ProjectTable from '../task3/ProjectTable'

function Task3() {

    const url ="http://127.0.0.1:3003/projects/" 
    const [projects, setProjects] = useState([])

    function addProject(emp) {
        console.log("empoyee receied in task2 - ", emp)
        setProjects([...projects, emp])
    }

    async function fetchDataFromServer(){
        let response = await fetch(url)
        let jsonData = await response.json()
        console.log("json received",jsonData)
        setProjects(jsonData)
       
    }

    useEffect(() => {
       fetchDataFromServer()
    }, [])

    return (
       <div className="training-root">
           <h2> 3 - Mock Json server demo </h2>
        <ProjectTable projectsArray= {projects} />
       </div>
                      
    )
}

export default Task3
