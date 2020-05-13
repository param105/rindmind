import React from "react";


function Task1() {
    return (
        <div>
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col"> Project Name </th>
                        <th scope="col"> Task Name </th>
                        <th scope="col"> Task Type </th>
                        <th scope="col"> Desc </th>
                        <th scope="col"> Assignee </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Android</td>
                        <td>
                            <select>
                                <option> Frontend </option>
                                <option> Backend </option>
                                <option> Testing </option>
                            </select> 
                        </td>
                        <td>Welbuild application technician Android application </td>
                        <td>Prafull</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>IOS </td>
                        <td>
                            <select>
                                <option> Frontend </option>
                                <option> Backend </option>
                                <option> Testing </option>
                            </select> 
                        </td>
                        <td>Welbuild application technician IOS application </td>
                        <td>Nitin</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>WEB</td>
                        <td>
                            <select>
                                <option> Frontend </option>
                                <option> Backend </option>
                                <option> Testing </option>
                            </select> 
                        </td>
                        <td>Welbuild application technician web app</td>
                        <td>Sakshi</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>NODE</td>
                        <td>
                            <select>
                                <option> Frontend </option>
                                <option> Backend </option>
                                <option> Testing </option>
                            </select> 
                        </td>
                        <td>Welbuild application technician Node server</td>
                        <td>Harish </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default Task1;

