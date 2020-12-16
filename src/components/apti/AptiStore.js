import { createContext } from "react";
import { decorate, observable, computed ,action} from "mobx";

class AptiStore {

    sections = [
        {
            "name": "C/C++ Programming",
            "outOfMarks":0,
            "marks": 0,
            "questions": [
                {
                    "que": "Which operator is used to resolve the scope of the global variable?",
                    "options": ["->", ".", "*", "::"],
                    "ans": "::"
                },
                {
                    "que": "What value strcmp() function returns when two strings are the same?",
                    "options": ["0", "2", "1", "Error"],
                    "ans": "0"
                },
                {
                    "que": "Which operator is used to continue the definition of macro in the next line?",
                    "options": ["#", "##", "$", "\\"],
                    "ans": "\\"
                },
                {
                    "que": "Choose the correct statement that is a combination of these two statements,:- Statement 1: char *p; Statement 2: p = (char*) malloc(100); ",
                    "options": [
                        "char p = *malloc(100);",
                        "char *p = (char*)malloc(100);", 
                        "char *p = (char) malloc(100);", 
                        "None of the above"
                    ],
                        "ans": "char *p = (char*)malloc(100);"
                },
                {
                    "que": "When overloading unary operators using Friend function,it requires_____ argument/s",
                    "options": ["Zero", "One", "Two", "None of the above"],
                    "ans": "One"
                }


            ]
        },
        {
            "name": "Data Structure",
            "outOfMarks":0,
            "marks": 0,
            "questions": [
                {
                    "que": "Time taken for the addition of elements in the queue is _____",
                    "options": ["O(1)", "O(n)", "O(log n)", "None of the above"],
                    "ans": "O(1)"

                },
                {
                    "que": "The data structure required for Breadth-First Traversal on a graph is",
                    "options": ["Queue", "Stack", "Array", "Tree"],
                    "ans": "Queue"
                },
                {
                    "que": "Which of the following operations is performed more efficiently by doubly linked list than by singly linked list?",
                    "options": [
                        "Searching of an unsorted list for a given item",
                        "Inverting a node after the node with the given location",
                        "Deleting a node whose location is given",
                        "Traversing a list to process each node"
                    ],
                    "ans": "Deleting a node whose location is given"
                },
                {
                    "que": "Convert the infix to postfix for A-(B+C)*(D/E)",
                    "options": [
                        "ABC+DE/*+",
                        "ABC+DE/*-", 
                        "ABC+DE*/-", 
                        "None of the above"],
                    "ans": "ABC+DE/*-"
                },
                {
                    "que": "The time complexities of the three algorithms are given. Which should execute the slowest for large values of N?",
                    "options": [
                     "O(N^1/2)",
                     "O(N)", 
                     "O(log n)",
                     "None of the above"],
                    "ans": "O(log n)"
                },


            ]
        },

    ]

    get getTotalOutOfMarks(){
        let totalOutOf =0;
        this.sections.map((section,index)=> {
             section.outOfMarks = 0;
        })
        this.sections.map((section,sectionindex)=>{
            section.questions.map((question,index)=>{
                totalOutOf +=2;
                this.sections[sectionindex].outOfMarks +=2;
            })
        })
        return totalOutOf;
    }

    get getTotalMarks() {
        let totalMarks =0;
         this.sections.map((section,index)=> {
            totalMarks += section.marks;
        })

        return totalMarks;   
    }


    addMarks(sectionIndex){
        this.sections[sectionIndex].marks +=2;
    }

}

    decorate(AptiStore,
    {
        sections: observable,
        addmarks: action,
        getTotalMarks: computed,
        getTotalOutOfMarks:computed,
        
    }
)

export default createContext(new AptiStore())