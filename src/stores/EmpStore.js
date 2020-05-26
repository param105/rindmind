

import {observable ,action, computed,decorate} from 'mobx';

class EmpStore{
    empData = [
        {
            id:1,
            name: "Param",
            mobile:"9762544581",
            domain: "Android"
        },
        {
            id:2,
            name: "Vikas",
            mobile:"9762523232",
            domain:"IOS"
        },
        {
            id:3,
            name: "Prashant",
            mobile:"9762547651",
            domain:"Android"
        },
        {
            id:4,
            name: "Shrutika",
            mobile:"9762549849",
            domain:"Android"
        },
        {
            id:5,
            name: "Rutuja",
            mobile:"9762547652",
            domain:"IOS"
        }
      
     
    ]
    
    addEmp(emp){
        this.empData.push(emp)
    }

    deleteEmp(emp){
        let index =  this.empData.indexOf(emp)
        this.empData.splice(index,1)
    }

}

decorate(EmpStore,{
    empData:observable,
    addEmp:action,
    deleteEmp:action
})

const store = new EmpStore()

export default store;

