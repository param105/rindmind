import React, {useContext} from 'react'
import { inject, observer } from 'mobx-react'
import eduDataStore from '../store/EduData'

function Words() {
    const {words} = useContext( eduDataStore)
    return (
        <div className="data-grid">   
        {
            words.map((char,index)=>
                                        
                            <button className="CharCard">{char.text}</button>
                                     
                       
                      
                 )
        }     
                
            
           
            
        </div>
    )
}

export default (observer(Words))