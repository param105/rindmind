import React, { useState } from 'react'
import {  Link } from 'react-router-dom';


export default function EmpTable(props) {
    const empArray = props.empArray;
    const [filterStr, setFilterStr] = useState("")
    const [empList, setEmpList] = useState(empArray)
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
            setEmpList([...empList,newEmp ])
            setEmp({})
            props.callback(newEmp)
        }
        setInputVisible(!inputVisible)
    }

    function handleDelete(index) {
        console.log("id received is", index);
        setEmpList(empList.filter(item => item.id !== index));
        props.callback(empList)
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
                    className="table"
                    type="text"
                    name="Search"
                    placeholder="Search Name , mobile , domain"
                    onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <table className="table">
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

                        empList.filter(item => item.name.toLowerCase().includes(filterStr.toLowerCase()) || item.mobile.toLowerCase().includes(filterStr.toLowerCase())
                            || item.domain.toLowerCase().includes(filterStr.toLowerCase())
                        ).map((emp,index) => (
                            <tr key={index}>
                                <td> {emp.name} </td>
                                <td> {emp.mobile} </td>
                                <td> {emp.domain} </td>
                                <td> <button onClick={(e) => handleDelete(emp.id)} > delete </button> </td>
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
