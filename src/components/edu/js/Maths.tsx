import React from 'react'
import { inject, observer } from 'mobx-react'
import eduDataStore from '../store/EduData'

function Maths() {

    const {maths} = eduDataStore

    return (
        <div className="data-grid">   
        {
             maths.map((char,index)=>                                    
                            <button className="CharCard">{char.text}</button>
                 )
        }     
                
        </div>
    )
}

export default inject('eduData') (observer(Maths))