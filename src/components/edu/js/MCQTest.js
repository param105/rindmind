import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import eduDataStore from '../store/EduData'

function MCQtest() {
    const { mathsMCQ } = eduDataStore
    return (
        <div className="data-grid">
            {
                mathsMCQ.map((question, index) =>
                    <MCQTile question={question} />
                )
            }

        </div>
    )
}

function MCQTile(props) {

    const [choice, setChoice] = useState({isSected:false,ans:""})

    function onAnswerSelected(option) {
        setChoice({isSected:true,ans:option})
    }

    return (
        <button className="MCQCard">
            <div className="question">
                {props.question.que}
            </div>
            <ul>
                {
                    props.question.options.map((option, index) => {
                        if (choice.isSected && choice.ans != props.question.ans && choice.ans == option) {
                           return <li className="wrongAns" onClick={(event) => { onAnswerSelected(option) }}>      {option } 
                            </li>
                        } else if(choice.isSected && props.question.ans == option){
                           return  <li className="correctAns" onClick={(event) => { onAnswerSelected(option) }}>      {option}
                            </li>
                        }  else{
                            return  <li onClick={(event) => { onAnswerSelected(option) }}>      {option} </li>
                        } 
                } )

                }
            </ul>
        </button>
    )
}

export default inject('eduData')(observer(MCQtest))