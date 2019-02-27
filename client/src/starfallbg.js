import React, { Component } from 'react';
import $ from 'jquery'




class starfallBG extends Component {


    skewPerspective = () => {


        $('#starfallfield').css('transform', 'rotateX(45deg) rotateY(15deg);')
   
    }


    componentDidMount = () => {

        let stars = 35

        for (let i = 0; i < stars; i++) {

            let randomX = 0;
            let randomY = 0
          
            let iDiv = document.createElement('span');
            iDiv.id = i;
            iDiv.className = 'dot';

            let starTails = document.createElement('span');
            starTails.id = i;
            starTails.className = 'startails';
            
            
            randomX = Math.floor((50 * Math.random()));
            randomY = Math.floor(50 * Math.random());
            
            iDiv.setAttribute('x-pos', randomX);
            iDiv.setAttribute('y-pos', randomY);
            
            
            
            iDiv.style.position = "absolute";
            iDiv.style.margin = 0;
            iDiv.style.padding = 0;
            iDiv.style.left = "0%";
            iDiv.style.top = "0%";

            starTails.style.position = "relative";
            starTails.style.margin = 0;
            starTails.style.padding = 0;
            starTails.style.left = randomX + "%";
            starTails.style.top = randomY + "%";
            
        
            
            
            

            let colorRandom = Math.floor(Math.random() * 5)

            switch(colorRandom) {
                case 1:
                iDiv.style.boxShadow = '0px 0px 30px 2px rgba(30, 255, 0, 0.767)'
                  break;
                case 2:
                iDiv.style.boxShadow = '0px 0px 30px 2px rgba(71, 221, 214, 0.788)'
                  break;
                case 3: 
                iDiv.style.boxShadow = '0px 0px 30px 2px rgb(216, 77, 77)'
                    break;
                case 4:
                iDiv.style.boxShadow = '0px 0px 30px 2px rgba(114, 83, 173, 0.616)'
                    break;
                default:
                iDiv.style.boxShadow = '0px 0px 30px 2px rgb(163, 235, 235)'
              }

              starTails.appendChild(iDiv)

            
              document.getElementById("starfallfield").appendChild(starTails); 
            //   document.getElementById("starfallfield").appendChild(iDiv); 


            // box-shadow: 0px 0px 30px 2px rgb(163, 235, 235);
            
            // if (i === (stars - 1)) {
            //     this.skewPerspective()
            // }
            
            
            }
    }




  render() {

    return (
        <div id='starfallfield' >
{/* <div id="comets">
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
</div> */}
        </div>
    )}
}
export default starfallBG