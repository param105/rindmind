import React from 'react'
import { inject, observer } from 'mobx-react'

function ChaudaKhadi(props) {
    return (
        <div className="data-grid">   
        {
             props.eduData.chars.map((char,index)=>
                                        
                            <button className="CharCard">{char.text}</button>
                                     
                       
                      
                 )
        }     
                
            
           
            
        </div>
    )
}

export default inject('eduData') (observer(ChaudaKhadi))