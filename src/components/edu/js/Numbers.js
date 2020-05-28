import React from 'react'
import { inject, observer } from 'mobx-react'

function Numbers(props) {
    return (
        <div className="data-grid">   
        {
             props.eduData.numbers.map((number,index)=>
                                        
                            <button className="CharCard">{number}</button>
                                               
                 )
        }     
                
            
           
            
        </div>
    )
}

export default inject('eduData') (observer(Numbers))