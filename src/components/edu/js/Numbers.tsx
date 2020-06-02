import React from 'react'
import { inject, observer } from 'mobx-react'
import eduDataStore from '../store/EduData'

function Numbers() {
    const {numbers} = eduDataStore
    return (
        <div className="data-grid">   
        {
            numbers.map((number,index)=>
                                        
                            <button className="CharCard">{number}</button>
                                               
                 )
        }     
                
            
           
            
        </div>
    )
}

export default inject('eduData') (observer(Numbers))