import React from 'react';
import '../css/App.css';

function MyHeader(){
    return(    
        <nav class= "myNavBar">
          <div>
            <header class="App-header"> <span>R</span>ind<span>M</span>ind </header>
            <div class="tagline"> The Spiritual Technocrats </div>
          </div>
          <div>
            <ul >      
              <li><a  target="_blank" href="https://paramsir.github.io/"> Recent Posts  </a></li>
              <li><a  target="_blank"  href="https://www.linkedin.com/in/parmeshwar-c-5aa39523/"> About me</a></li>
              <li><a href=""> Home </a></li>
            </ul>
          </div>
        </nav>
     );
}

export default MyHeader;
