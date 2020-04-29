import React from 'react';
import '../css/body.css';
//import newsData from "../data/Data.js"

function MyBody(props){
    let newsData = props.newsJsonSting;
    console.log("Data received is : " + newsData)
    let articles;
    if(newsData != null){
        try{
            let newsJson = JSON.parse(newsData);
            let newsList = newsJson.articles;
            articles = newsList.map(article => 
                <Article class = { "col col-1" } 
                        title = { article.title }
                        img = { article.urlToImage }
                        para = { article.description }
                />
            )
        }catch{
            
        }
       
    }
   

    return(
        <div>
            <main class="myBody">
                <img src="https://source.unsplash.com/1600x400/?laptop"></img>
{/* 
                <div class="column">
                    <Article 
                        class="col col-1"
                        title = "Climet change is easing"
                        img = "https://source.unsplash.com/800x200/?nature"
                        para= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!"
                    />
                    <Article 
                        class="col col-2"
                        title = "Lets talk about mother earth "
                        img = "https://source.unsplash.com/800x200/?water"
                        para= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!"
                    />

                <Article 
                        class="col col-1 col-bg"
                        para= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!"
                    />
                </div>
                <div class="column">
                    <Article 
                        class="col col-3"
                        title = "Whats new in the electronics market"
                        img = "https://source.unsplash.com/800x200/?mobile"
                        para= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!"
                    />

                    <Article 
                        class="col col-1 col-bg"
                        img = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Medianet_logo_2018-present.gif"
                        para= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!"
                    />
                </div>
                <div class="column">
                    <Article 
                        class = "col col-1"
                        title = "Health is wealth !! Lets play !!"
                        img = "https://source.unsplash.com/800x200/?sport"
                        para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!"
                    />

                    <Article 
                        class = "col col-1"
                        title = "Football game history and present"
                        img = "https://source.unsplash.com/800x200/?football"
                        para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!"
                    />

                    <Article 
                        class = "col col-1"
                        title = "Before buying cycle.."
                        img = "https://source.unsplash.com/800x200/?cycle"
                        para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!"
                    />
                </div> */}
                <div class="grid-container">
                    { 
                       articles 
                    }
                </div>
            </main>

        </div>

    );
}

function openNewsDialog(){
    return ({
        
    });
}

function Article(props){
    return(
        <div class={props.class} onClick = {openNewsDialog}>
            <h2>{props.title} </h2>
            <img src={props.img} />
            <p class="para">{props.para}</p>
        </div>


    );
}

export default MyBody;