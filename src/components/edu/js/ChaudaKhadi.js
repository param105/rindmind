import React from 'react'
import { inject, observer } from 'mobx-react'

function ChaudaKhadi(props) {
    return (
        <div className="data-grid">   
        {
             props.eduData.chars.map((char,index)=>
                        <div>                    
                            <button>{char.text}</button>
                                     
                        </div>
                      
                 )
        }     
                
            
           
            
        </div>
    )
}

export default inject('eduData') (observer(ChaudaKhadi))