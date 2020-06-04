import React, { useState } from 'react'
import {  Link } from 'react-router-dom';

import {inject, observer} from 'mobx-react'

 function EmpTableMobx(props) {
     let empList = props.empStore.empData;
    const [filterStr, setFilterStr] = useState("")
    const [inputVisible, setInputVisible] = useState(false)
    const [emp, setEmp] = useState({ id: "", name: '', mobile: '', domain: '' })


    function handleButtonClick() {
        if (inputVisible && emp.name && emp.domain && emp.mobile) {
            let size = empList.length + 1;
            let newEmp = {
                id: size,
                name: emp.name,
                mobile: emp.mobile,
                domain: emp.domain
            };

            setEmp({})
            props.empStore.addEmp(newEmp)
        }
        setInputVisible(!inputVisible)
    }

    function handleDelete(emp) {
        console.log("emp deleted is", emp.name);
       props.empStore.deleteEmp(emp)
    }

    function setEmpData(field, value) {
        switch (field) {
            case "name": setEmp({ ...emp, name: value }); break;
            case "mobile": setEmp({ ...emp, mobile: value }); break;
            case "domain": setEmp({ ...emp, domain: value }); break;
            default:setEmp({ ...emp }); 
        }
        console.log(`data received ${field} and ${value}`)
        console.log(`name = ${emp.name} , mobile = ${emp.mobile} , domain = ${emp.domain}`)
    }

    function handleSearch(string) {
        console.log("search string received is -", string);
        setFilterStr((Prev) => string);
    }

    return (
        <div>
            {
                console.log(`filter string received ${filterStr}`)

            }
            <div>
                <input
                    className="table-mobx"
                    type="text"
                    name="Search"
                    placeholder="Search Name , mobile , domain"
                    onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <table className="table-mobx">
                <thead className="title">
                    <tr>
                        <th> Name </th>
                        <th> Mobile </th>
                        <th> Domain </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        props.empStore.empData.filter(item => item.name.toLowerCase().includes(filterStr.toLowerCase()) || item.mobile.toLowerCase().includes(filterStr.toLowerCase())
                            || item.domain.toLowerCase().includes(filterStr.toLowerCase())
                        ).map((emp,index) => (
                            <tr key={index}>
                                <td> {emp.name} </td>
                                <td> {emp.mobile} </td>
                                <td> {emp.domain} </td>
                                <td> <button onClick={(e) => handleDelete(emp)} > delete </button> </td>
                            </tr>
                        ))
                    }

                    {
                        inputVisible &&
                        <tr>
                            <InputBox name="name" callback={setEmpData} />
                            <InputBox name="mobile" callback={setEmpData} />
                            <InputBox name="domain" callback={setEmpData} />
                        </tr>

                    }
                </tbody>
            </table>
            <button onClick={handleButtonClick}> ADD HERE </button>

            <Link to="/addemp" >
                <button> OPEN FORM </button>
            </Link>

        </div>

    );
}

function InputBox(props) {
    let name = props.name;
    let callbackFun = props.callback;

    let changeHandler = event => {
        event.persist();
        let value = event.target.value;
        callbackFun(name, value)
    };

    return (
        <td>
            <input
                type="text"
                name={name}
                placeholder={name}
                onChange={changeHandler}
            />
        </td>
    )
}


export default inject('empStore')(observer(EmpTableMobx))