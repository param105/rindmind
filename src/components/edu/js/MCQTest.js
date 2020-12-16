import React, { useState ,useContext} from 'react'
import { observer } from 'mobx-react'
import eduDataStore from '../store/EduData'

function MCQtest() {
    const { mathsMCQ } = useContext(eduDataStore)
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

/***
 * Component creates single having a question and its options
 * along with it hadles all its click events and actions 
 */
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

export default (observer(MCQtest))