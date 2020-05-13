import React, {useState, Fragment, Component} from 'react';
import ReactModal from 'react-modal'
import '../scss/home.scss';

class Home extends Component{

    constructor(props){
        super(props);
        this.state={
          newsData :[],
          isLoaded : false
        }
      }

      /***
       * this is async await implementation of getting data from api
       */
    async fetchAndSetData(){
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({newsData: JSON.stringify(data)})
        console.log(this.state.newsData)  
      };
   

      /***
       * This is promise implementation of getting data form the Api
       */
     componentDidMount(){
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf";
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.setState({newsData: JSON.stringify(data)})
                console.log(this.state.newsData)  
            })
            .catch(error =>{
                console.log(error) 
            })
        
      };
   

    render(){
        let articles = this.generateArticalArray()
        return(
            <div id="home" >
                <main class="myBody">
                    <img src="https://source.unsplash.com/1600x400/?laptop"></img>
                    <div class="grid-container">
                        { 
                           articles 
                        }
                    </div>
                </main>
    
            </div>
    
        );
    }

    generateArticalArray() {
        let articles;
        console.log("Data received is : " + this.state.newsData)
           
            if(this.state.newsData != null){
                try{
                    let newsJson = JSON.parse(this.state.newsData);
                    let newsList = newsJson.articles;
                    articles = newsList.map(article => 
                        <Article class = { "col col-1" } 
                                title = { article.title }
                                img = { article.urlToImage }
                                para = { article.description }
                                originUrl = {article.url}
                        />
                    )
                }catch{
                    
                }
               
            }
        return articles
    }
    
}


function Article(props){

    var closeDivStyle = {
        float:"right"
    }

    const[dialogIsOpen,setDialogIsOpen] = useState(false)

    return(
        <div class={props.class}>
            <div onClick = {() => setDialogIsOpen(true)}>
                <h2>{props.title} </h2>
                <img src={props.img} />
                <p class="para">{props.para}</p>
            </div>

            <div>               
                    <ReactModal isOpen={dialogIsOpen} 
                                onRequestClose = {() => setDialogIsOpen(false)}> 
                        <div style = { closeDivStyle}>
                            <button
                                class ="dialog-close-btn" 
                                onClick={()=> setDialogIsOpen(false)}>
                                X
                            </button>
                        </div>
                        <div class="dialog">
                            <iframe class ="dialog" src={props.originUrl} />
                        </div> 
                       
                    </ReactModal>  
                               
            </div>
        </div>
    );
}

export default Home;