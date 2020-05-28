import React from 'react'
import { inject, observer } from 'mobx-react'

function Maths(props) {
    return (
        <div className="data-grid">   
        {
             props.eduData.maths.map((char,index)=>
                                        
                            <button className="CharCard">{char.text}</button>
                                     
                       
                      
                 )
        }     
                
            
           
            
        </div>
    )
}

export default inject('eduData') (observer(Maths))