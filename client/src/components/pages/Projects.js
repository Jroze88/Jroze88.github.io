import React, { Component } from 'react';
import '../../index.css';
import $ from 'jquery';


class Projects extends Component {


    componentDidMount() {

        $('body').css("background-image", 'url("/image/supernova.jpg")');

    }



    render() {
        return (
           
            <div>
            <div className="textdiv row">
            <div className="col-2"></div>
            <div className="leftedge col-2">

                <div className="proj lotr">
                    <a href="https://Jroze88.github.io/TriviaGame/index">
                    <img className="projector" alt="The One Ring" src={ require('../../img/tele3.svg') } />
                    </a>
                </div>
                <div class="caption center-block">LOTR Riddles</div>
            
            </div>
            <div className="col-2"></div>
            <div className="col-2"> 
            
            
            <div className="proj flyinsoup">
            <a href="https://evansimonross.github.io/Fly-in-Soup/">
                    <img className="projector" alt="A fly in some soup" src={ require('../../img/tele2.svg') } />
                    </a>

                </div>
                <div class="caption center-block">NYC Restaurant Food Grades</div>
                </div>
            <div className="col-2"></div>
            <div className="col-2 edge">
            
            
            <div className="proj pipboy">
                    <a href="https://Jroze88.github.io/Word-Guess-Game/index">
                    <img className="projector" alt="Pipboy from Fallout" src={ require('../../img/tele4.svg') } />
                    </a>
                </div>
                <div class="caption center-block">Video Game Hangman</div></div>


            </div>


            <div className ="row contactdiv">

                <div className="leftedge int col-2">
                
                <div className="proj intelman">
                        <a href="https://intelman.herokuapp.com/">
                    <img className="projector" alt="Einstein" src={ require('../../img/tele3.svg') } />
                        </a>
                 </div>    
                 <div class="caption center-block">Automated Scripts</div>   
                </div>

                
     
                

                <div className="col-2">                </div>
                <div className="leftedge col-2">

                                    <div className="proj myhero">
                                    <a href="https://Jroze88.github.io/unit-4-game/index">
                    <img className="projector" alt="Almight!" src={ require('../../img/tele5.svg') } />
                    </a>
                </div>
                <div class="caption center-block">MyHeroAcademia RPG (For Santiago!)</div>
                </div>
                <div className="col-2">          

                    

                </div>
                <div className="catedge col-2">
                
                
                <div className="proj giftastic">
                <a href="https://Jroze88.github.io/GifTastic/index" >
                                    <img className="projector" alt="Cat peeking" src={ require('../../img/tele3.svg') } />
                                    </a>


                </div>
                <div class="caption center-block">Reaction Image Generator</div>
                </div>
                <div className="col-2"></div>
            
            
  


            </div>
            </div>
           
        )
    }
}


export default Projects