import React from 'react';
import '../css/body.css';

function MyBody(){
    return(
        <div>
            <main class="myBody">
            <img src="https://source.unsplash.com/1600x400/?laptop"></img>

            <div class="column">
                <div class="col col-1">
                    <h2>This is frist news </h2>
                    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!</p>
                </div>
                <div class="col col-2">
                    <h2>This is Second news </h2>
                    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!</p>

                    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!</p>
                </div>
                <div class="col col-1 col-bg">
                
                    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!</p>

                </div>
            </div>
            <div class="column">
                <div class="col col-3">
                    <h2>This is fourth news </h2>
                    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!</p>
                </div>

                <div class="col col-1 col-bg">

                    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis in sequi, repellat maxime dolorem at veniam, perferendis odit atque cumque. Incidunt totam hic placeat recusandae dolore amet tenetur maxime!</p>
                </div>
            </div>

            </main>

        </div>

    );
}

export default MyBody;