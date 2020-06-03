import { createContext } from "react";

class AptiStore{
   
        sections =[
            {
                "name":"C/C++ Programming",
                "questions":[
                    {
                        "que":"Which operator is used to resolve the scope of the global variable?",
                        "options":["->",".","*","::"],
                        "ans":"::"
                    },
                    {
                        "que":"What value strcmp() function returns when two strings are the same?",
                        "options":["0","2","1","Error"],
                        "ans":"0"
                    },
                    {
                        "que":"Which operator is used to continue the definition of macro in the next line?",
                        "options":["#","##","$","\\"],
                        "ans":"\\"
                    }
                   

                ]
            },
            {
                "name":"Data Structure",
                "questions":[
                    {
                        "que":"Time taken for the addition of elements in the queue is _____",
                        "options":["O(1)","O(n)","O(log n)","None of the above"],
                        "ans":"O(1)"

                    },
                    {
                        "que":"The data structure required for Breadth-First Traversal on a graph is",
                        "options":["Queue","Stack","Array","Tree"],
                        "ans":"Queue"
                    },
                    {
                        "que":"Which of the following operations is performed more efficiently by doubly linked list than by singly linked list?",
                        "options":[
                                    "Searching of an unsorted list for a given item",
                                    "Inverting a node after the node with the given location",
                                    "Deleting a node whose location is given",
                                    "Traversing a list to process each node"
                                ],
                        "ans":"Deleting a node whose location is given"
                    },
                   

                ]
            },
           
        ]
    
       
       
    
}

export default createContext(new AptiStore())