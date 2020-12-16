import React, { useState } from 'react'
import EmpTableMobx from './EmpTableMobx'
import empData from '../../data/Data.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "../../../training/scss/Training.scss";
import AddEmpMobx from './AddEmpMobx.js'
import { inject, observer } from 'mobx-react';

function Task4(props) {

    return (
        <Router>
            <div className="training-root">
                <h2> 4 - Mobx Data Passing </h2>
                <Switch>
                    <Route exact path="/training">
                        <EmpTableMobx />
                    </Route>
                    <Route exact path="/addemp">
                            <AddEmpMobx />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default inject('empStore')(observer(Task4));
