import React from 'react'
import { inject, observer } from 'mobx-react'
import eduDataStore from '../store/EduData'

function ChaudaKhadi() {
    const {characters} = eduDataStore
    return (
        <div className="data-grid">   
        {
            characters.map((char: { text: React.ReactNode },index: any)=>
                                        
                            <button className="CharCard">{char.text}</button>
                                     
                 )
        }            
        </div>
    )
}

export default inject('eduData') (observer(ChaudaKhadi))