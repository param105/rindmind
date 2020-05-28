import React from 'react'
import { inject, observer } from 'mobx-react'

function Words(props) {
    return (
        <div className="data-grid">   
        {
             props.eduData.words.map((char,index)=>
                                        
                            <button className="CharCard">{char.text}</button>
                                     
                       
                      
                 )
        }     
                
            
           
            
        </div>
    )
}

export default inject('eduData') (observer(Words))