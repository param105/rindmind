import React,{useState}from 'react'
import {  Link } from 'react-router-dom';

export default function AddEmp(props) {

    const [emp, setEmp] = useState({
        name:"",
        mobile:"",
        domain:""
    });
  
    function handleSaveClick() {
        if(emp.name && emp.domain && emp.mobile){
            props.callback(emp)
        }
       
     }

    function setEmpData(field,value){
        switch(field){
            case "name" : setEmp({...emp,name:value}) ; break;
            case "mobile" : setEmp({...emp,mobile:value}) ; break;
            case "domain" : setEmp({...emp,domain:value}) ; break;
            default: setEmp({...emp})
        }
        console.log(`data received ${field} and ${value}`)
        console.log(`name = ${emp.name} , mobile = ${emp.mobile} , domain = ${emp.domain}`)
    }

    return (
        <div className="add-emp-root">
            <div className="form-field">
                <input type="text"
                    name="name"
                    value= {emp.name}
                    placeholder="Name"
                    onChange = {(event)=>setEmpData("name",event.target.value)}
                />
            </div>
            <div className="form-field">
                <input type="text"
                    name="mobile"
                    value= {emp.mobile}
                    placeholder="Mobile"
                    onChange = {(event)=>setEmpData("mobile",event.target.value)}
                />
            </div>
            <div className="form-field">
                <input type="text"
                    name="domain"
                    value = {emp.domain}
                    placeholder="Domain"
                    onChange = {(event)=>setEmpData("domain",event.target.value)}
                />
            </div>
            <Link to="/training" >
                <button onClick={handleSaveClick}> SAVE </button>
            </Link>
        </div>
    )
}
