import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal'
import '../scss/home.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core'
import { Card,CardActionArea,CardContent,CardMedia } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin:2
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


export default function Home() {
    const classes = useStyles();
    const [newsData, setNewsData] = useState([]);

    async function fetchAndSetNews() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf";
        const response = await fetch(proxyUrl + url);
        const data = await response.json();
        setNewsData(JSON.stringify(data))
        console.log(newsData)
    }
    /***
     * this is async await implementation of getting data from api
     */
    useEffect(() => {

        fetchAndSetNews(); // using async await

        //fetchAndSetNewsPromises()   // using promises
    }, []);


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

    function generateArticalArray() {
        let articles;
        console.log("Data received is : " + newsData)

        if (newsData != null) {
            try {
                let newsJson = JSON.parse(newsData);
                let newsList = newsJson.articles;
                articles = newsList.map(article =>
                    <Article class={"col col-1"}
                        title={article.title}
                        img={article.urlToImage}
                        para={article.description}
                        originUrl={article.url}
                    />
                )
            } catch{

            }

        }
        return articles
    }

    return (

        <div id="home" >
            <main class="myBody">
                <img src="https://source.unsplash.com/1600x400/?laptop"></img>

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

function Article(props) {
    const classes = useStyles();
    var closeDivStyle = {
        float: "right"
    }

    const [dialogIsOpen, setDialogIsOpen] = useState(false)

    return (
        <Grid item xs={12} sm={6} lg={4}>
          
                <Card className={classes.root} onClick={() => setDialogIsOpen(true)}>
                    <CardActionArea>
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
                        <ReactModal isOpen={dialogIsOpen}
                            onRequestClose={() => setDialogIsOpen(false)}>
                            <div style={closeDivStyle}>
                                <button
                                    class="dialog-close-btn"
                                    onClick={() => setDialogIsOpen(false)}>
                                    X
                            </button>
                            </div>
                            <div class="dialog">
                                <iframe class="dialog" src={props.originUrl} />
                            </div>

                        </ReactModal>

                    </div>
        </Grid>
    );
}

