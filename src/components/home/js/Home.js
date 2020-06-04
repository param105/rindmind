import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal'
import '../scss/home.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Card, CardActionArea, CardContent, CardMedia,Paper } from '@material-ui/core'
import newsData from '../data/Data'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 2,
        '&:hover': {
            padding:1,
         }

    },
    cardContent:{
        '&:hover': {
           
         }
      
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
    },
    media: {
        height: 200,
    },
}));

/***
 * shows news page in it and also it has popup dialog to see single news
 */
export default function Home() {
    const classes = useStyles();
    const [newsData, setNewsData] = useState([]);

 
      /***
       * this is async await implementation of getting data from api
       */
    async function fetchAndSetNews(){
        try {
          
            const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf";
            const response = await fetch(url).catch(e => console.error("Error to fetch data"));
            const data = await response.json().catch(e => console.error("Error to convert to JSON"));;
           
            if(data.status == "error"){
                setNewsData(newsData)
            }else{
                setNewsData(JSON.stringify(data))
            }    
            console.log(newsData)
        } catch (e) {
            console.error(e)
        }
      };
   

      /***
     * This is promise implementation of getting data form the Api
     */
    function fetchAndSetNewsPromises() {
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setNewsData(JSON.stringify(data))
                console.log(newsData)
            })
            .catch(error => {
                console.log(error)
            })

    };

    /***
     * this is async await implementation of getting data from api
     */
    useEffect(() => {
        fetchAndSetNews(); // using async await
        //fetchAndSetNewsPromises()   // using promises
    }, []);


  

    /***
     * creates array of artical components getting json data from state 
     */
    function generateArticalArray() {
        let articles;
        console.log("Data received is : " + newsData)

        if (newsData != null) {
            try {
                let newsJson = JSON.parse(newsData);
                let newsList = newsJson.articles;
                articles = newsList.map((article, index) =>
                    <Article key={index} class={"col col-1"}
                        title={article.title}
                        img={article.urlToImage}
                        para={article.description}
                        originUrl={article.url}
                    />
                )
            } catch(e){
                console.log(e)
            }

        }
        return articles
    }

    return (

        <div id="home" >
            <main className="myBody">
                <img src="https://source.unsplash.com/1600x400/?laptop" alt="Loading.."></img>

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            generateArticalArray()
                        }
                    </Grid>
                </div>
            </main>

        </div>



    );




}

/***
 * function component which renders single gird item in card. 
 */
function Article(props) {
    const classes = useStyles();
    var closeDivStyle = {
        float: "right"
    }

    const [dialogIsOpen, setDialogIsOpen] = useState(false)

    return (
        <Grid item xs={12} sm={6} lg={4}>

            <Card className={classes.root} elevation={5} onClick={() => setDialogIsOpen(true)}>
                <CardActionArea className={classes.cardContent}>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title="nop"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.para}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


            <div>
            
                <ReactModal className="dialog" isOpen={dialogIsOpen}
                    onRequestClose={() => setDialogIsOpen(false)}>
                   
                        <div style={closeDivStyle}>
                            <button
                                className="dialog-close-btn"
                                onClick={() => setDialogIsOpen(false)}>
                                X
                            </button>
                        </div>
                        <div className="dialog">
                            <iframe className="dialog" src={props.originUrl} />
                        </div>   
                </ReactModal>
                
            </div>
        </Grid>
    );
}

