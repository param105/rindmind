import React from 'react'
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom'
import { Provider } from 'mobx-react';

import "../scss/edu.scss"
import EduData from "../store/EduData"
import Words from "./Words"
import Numbers from "./Numbers"
import Maths from './Maths';
import MCQTest from './MCQTest';
import ChaudaKhadi from './ChaudaKhadi'



export default function Education() {
    return (
        <Provider eduData={EduData}>
            <HashRouter>
                <div className="edu-root">
                    <div className="edu-header">
                        <h1> आईची शाळा </h1>
                    </div>
                    <div>
                        <ul className="edu-menu">
                            <li className="tooltip" >
                               
                                <NavLink exact to="/"> चौदाखडी  </NavLink>
                            </li>
                            <li className="tooltip" >
                               
                                <NavLink to="/chars" > शब्द ओळख  </NavLink>
                            </li>
                            <li className="tooltip" >
                               
                                <NavLink to="/numbers"> अंक ओळख </NavLink>
                            </li>
                            <li className="tooltip" >
                               
                                <NavLink to="/maths"> गणिते  </NavLink>
                            </li>
                            <li className="tooltip" >
                               
                                <NavLink to="/mcq"> परीक्षा  </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Route exact path="/" component={ChaudaKhadi} />
                        <Route path="/chars" component={Words} />
                        <Route path="/numbers" component={Numbers} />
                        <Route path="/maths" component={Maths} />
                        <Route path="/mcq" component={MCQTest} />

                    </div>
                </div>
            </HashRouter>
        </Provider>

    )
}
