import React from 'react'
import "../scss/edu.scss"

import EduData from "../store/EduData"
import ChaudaKhadi from "../js/ChaudaKhadi"
import Words from "../js/Words"
import Numbers from "../js/Numbers"
import Maths from "../js/Maths"

import { Provider } from 'mobx-react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom'


export default function Education() {
    return (
        <Provider eduData={EduData}>
            <HashRouter>
                <div className="edu-root">
                    <div className="edu-header">
                        <h1> आईची शाळा </h1>
                    </div>
                    <div >
                        <ul className="edu-menu">
                            <li class="tooltip" >
                                <span class="tooltiptext"> <ChaudaKhadi /> </span>
                                <NavLink exact to="/"> चौदाखडी  </NavLink>
                            </li>
                            <li class="tooltip" >
                                <span class="tooltiptext"> <Words /> </span>
                                <NavLink to="/chars" > शब्द ओळख  </NavLink>
                            </li>
                            <li class="tooltip" >
                                <span class="tooltiptext"> <Numbers /> </span>
                                <NavLink to="/numbers"> अंक ओळख </NavLink>
                            </li>
                            <li class="tooltip" >
                                <span class="tooltiptext"> <Maths /> </span>
                                <NavLink to="/maths"> गणिते  </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Route exact path="/" component={ChaudaKhadi} />
                        <Route path="/chars" component={Words} />
                        <Route path="/numbers" component={Numbers} />
                        <Route path="/maths" component={Maths} />

                    </div>
                </div>
            </HashRouter>
        </Provider>

    )
}
