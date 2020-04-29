import React, { Component } from 'react';
import './css/App.css';
import MyHeader from './components/MyHeader.js';
import MyBody from './components/MyBody.js';
import MyFooter from './components/MyFooter.js';
import { render } from '@testing-library/react';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      newsData :[],
      isLoaded : false
    }
  }

  async componentDidMount(){
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({newsData: JSON.stringify(data)})
    console.log(this.state.newsData)  
  };


  render(){
    return (
      <div className="App">     
        <MyHeader />
        <MyBody newsJsonSting = {this.state.newsData}/>
        <MyFooter />
  
      </div>
  
    );
  }
  }


export default App;
