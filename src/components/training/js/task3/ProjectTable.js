import React, { useState ,  useEffect } from 'react'


export default function ProjectTable(props) {

    return (
        <div>
                       
            <table className="table">
                <thead className="title">
                    <tr>
                        <th> Name </th>
                        <th> owner </th>
                        <th> status </th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        props.projectsArray.map((proj,index) => (
                            <tr key={index}>
                                <td> {proj.name} </td>
                                <td> {proj.owner} </td>
                                <td> {proj.status} </td> 
                            </tr>
                        ))
                    }

                </tbody>
            </table>  

        </div>

    );
}
