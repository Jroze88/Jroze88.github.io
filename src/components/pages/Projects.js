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
                    <img className="projector" src={ require('../../img/tele3.svg') } />

                </div>
            
            </div>
            <div className="col-2"></div>
            <div className="col-2"> 
            
            
            <div className="flyinsoup">
                    <img className="projector" src={ require('../../img/tele2.svg') } />

                </div></div>
            <div className="col-2"></div>
            <div className="col-2">
            
            
            <div className="pipboy">
                    <img className="projector" src={ require('../../img/tele4.svg') } />

                </div></div>


            </div>


            <div className ="row contactdiv">

                <div className="col-2">
                
                <div className="intelman">
                    <img className="projector" src={ require('../../img/tele3.svg') } />

                </div>
                
                
                </div>
                

                <div className="col-2">                </div>
                <div className="col-2">

                                    <div className="myhero">
                    <img className="projector" src={ require('../../img/tele5.svg') } />

                </div>
                
                </div>
                <div className="col-2">          

                    

                </div>
                <div className="col-2">
                
                
                <div className="lotr">
                    <img className="projector" src={ require('../../img/tele5.svg') } />

                </div>
                
                </div>
                <div className="col-2"></div>
            
            
  


            </div>
            </div>
        )
    }
}

export default Projects