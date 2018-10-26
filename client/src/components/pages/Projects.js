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
            <div className="col-2">

                <div className="lotr">
                    <a href="https://Jroze88.github.io/TriviaGame/index">
                    <img className="projector" alt="The One Ring" src={ require('../../img/tele3.svg') } />
                    </a>
                </div>
            
            </div>
            <div className="col-2"></div>
            <div className="col-2"> 
            
            
            <div className="flyinsoup">
            <a href="https://evansimonross.github.io/Fly-in-Soup/">
                    <img className="projector" alt="A fly in some soup" src={ require('../../img/tele2.svg') } />
                    </a>

                </div></div>
            <div className="col-2"></div>
            <div className="col-2">
            
            
            <div className="pipboy">
                    <a href="https://Jroze88.github.io/Word-Guess-Game/index">
                    <img className="projector" alt="Pipboy from Fallout" src={ require('../../img/tele4.svg') } />
                    </a>
                </div></div>


            </div>


            <div className ="row contactdiv">

                <div className="col-2">
                
                <div className="intelman">
                        <a href="https://Jroze88.github.io/project-2/index">
                    <img className="projector" alt="Einstein" src={ require('../../img/tele3.svg') } />
                        </a>
                 </div>       
                </div>

                
     
                

                <div className="col-2">                </div>
                <div className="col-2">

                                    <div className="myhero">
                                    <a href="https://Jroze88.github.io/unit-4-game/index">
                    <img className="projector" alt="Almight!" src={ require('../../img/tele5.svg') } />
                    </a>
                </div>
                
                </div>
                <div className="col-2">          

                    

                </div>
                <div className="col-2">
                
                
                <div className="giftastic">
                <a href="https://Jroze88.github.io/GifTastic/index" >
                                    <img className="projector" alt="Cat peeking" src={ require('../../img/tele5.svg') } />
                                    </a>


                </div>
                
                </div>
                <div className="col-2"></div>
            
            
  


            </div>
            </div>
           
        )
    }
}

export default Projects