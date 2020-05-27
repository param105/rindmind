import React from 'react'
import "../scss/edu.scss"

import EduData from "../store/EduData"
import ChaudaKhadi from "../js/ChaudaKhadi"

import {Provider} from 'mobx-react';

export default function Education() {
    return (
        <Provider eduData={EduData}>
        <div className="edu-root">
            <div className="edu-header">
                <h1> आईची शाळा </h1>
            </div>
            <div className="edu-menu">
                <h2> चौदाखडी  </h2>
                <h2> शब्द ओळख   </h2>
                <h2> अंक ओळख  </h2>
                <h2> गणिते </h2>
            </div>
            <div>
                <ChaudaKhadi />
            </div>
        </div>
        </Provider>

    )
}
