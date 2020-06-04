
import React from 'react'
import { inject, observer } from 'mobx-react';


function MobxTask(props) {
    return (
        <div className="training-root">
            <h2>4 - Use of MobX  </h2>
            <ul style={{ listStyleType: 'none' }}>
                {props.birdStore.birds.map((bird, i) => (
                    <li key={i}>
                      {bird}<br />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default inject('birdStore')(observer(MobxTask));

