import {observable} from 'mobx';

class Contacts{
    @observable all =[
        {id:'1',name:'Param',mobile:'9762544581'},
        {id:'2',name:'Ram',mobile:'9762544582'},
    ]
}

export default new Contacts();