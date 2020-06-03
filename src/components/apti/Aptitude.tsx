
import React, { useState, useEffect, useContext } from 'react'
import "../apti/apti.scss"
import { observer } from 'mobx-react';
import AptiStore from './AptiStore';

export default function Aptitude() {

    return (
        <div className="apti-root">
            <div className="apti-header">
                <Timer />
                <div className="title"><h1> Aptitude Exam </h1> </div>
                <Marks />
            </div>
            <div>
                <ExamPaper />

            </div>
        </div>
    )
}

function Timer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            setTime(getTime())
        }, 1000)

    }, []);

    function getTime() {
        function getLeadingZeroAdded(number: Number) {
            return (number < 10 ? "0" : "") + number;
        }
        let today = new Date();
        let hour = getLeadingZeroAdded(today.getHours())
        let min = getLeadingZeroAdded(today.getMinutes())
        let sec = getLeadingZeroAdded(today.getSeconds())
        let time = `${hour}:${min}:${sec}`;
        return time
    }

    return (
        <div className="timer">
            <h2 > {time} </h2>
        </div>
    )
}

const Marks= observer(()=>{
    const aptiStore = useContext(AptiStore)
    return (
        
        <div className="marks">

            <h2 > {aptiStore.getTotalMarks} / 100 </h2>

        </div>)
})


const ExamPaper = observer(()=> {

    const [visible, setVisible] = useState(true)
    const apti = useContext(AptiStore)

    function handleHeaderClick() {
        setVisible(!visible)
    }
    return (
        <div className="paper">
            {
                apti.sections.map((sectionObj, index) =>
                    <ExamSection section={sectionObj} index={index} />
                )
            }

        </div>
    )
})

const ExamSection = observer((props:any)=>{

    const [visible, setVisible] = useState(true)
    const apti = useContext(AptiStore)

    function updateMarks(){
        apti.addMarks(props.index)
    }

    function handleHeaderClick() {
        setVisible(!visible)
    }
    return (
        <div className="section">
            <div onClick={handleHeaderClick} className="section-header">
                <h3> {props.section.name} </h3>
                <div className="marks">
                    <h3 > {apti.sections[props.index].marks} / 10 </h3>
                </div>
            </div>
            <div className="section-questions">
                {
                    visible &&
                    <ul>
                        {
                            props.section.questions.map((question: any, index: any) =>
                                <ExamQuestion question={question} callback={()=>updateMarks()} />
                            )
                        }



                    </ul>
                }
            </div>
        </div>
    )
})


function ExamQuestion(props: any) {

    const [selected, setSelected] = useState({"answer":"","index":""})

    function handleOptionSelected(option:any,index:any){
    
        setSelected({"answer": option,"index":index})
       
        if(option == props.question.ans){
            props.callback()
        }

    }
    return (
    <div className="exam-question">
        <li><h3> {props.question.que} </h3></li>
        <ul>
            {
                props.question.options.map((option: React.ReactNode, index: any) =>
                    <li onClick={()=>handleOptionSelected(option,index)}> {option} </li>
                )
            }
        </ul>
    </div>);
}

