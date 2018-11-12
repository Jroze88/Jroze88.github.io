import React, { Component } from 'react';
import $ from 'jquery';


class Intro extends Component {

    componentDidMount() {
      

      $('body').css("background-image", 'url("/image/sky.jpg")');

      $('.navbar').css("display", "none");


        window.onload = function() {


            
          "use strict";    
          
          
          
              
          console.log("loaded");
          
          
          var x = $(".hardcover_front1");
          var y = $(".hardcover_front2");
          
          
          setTimeout(function(e) {
              
              x.attr("class", "hardcover_animation1");
              y.attr("class", "hardcover_animation2");
          
              setTimeout(starAnimation, 1400);
          
          
          }, 2000);
          
          
          
          
          // $("body").on("click", function(e) {
          //      e.preventDefault();
          
          
          //      x.attr("class", "hardcover_animation1");
          //     y.attr("class", "hardcover_animation2");
          
          //     setTimeout(starAnimation, 1400);
          
              
          
          
          // })
          
          
          
          
          
              var starAnimation = function() {
          
          
          
          
                  var star;
          
          
          
          var height = window.innerHeight;
          var width = window.innerWidth;
          
          //number of stars//
          
          var s = 40;
          
          ////////////////////
          
          
          var theta = 0;
          var x =0;
          var y = 0;
          var r = 0;
          var t = 0;
          var g =0;
          var k = 0;
          
          var aggregateTimer;
          
          var starfield = document.getElementById('starfield')
          
          
          var superBright = function() {
          
              $('.color').fadeOut(1300);
          
              
          
          
              setTimeout(function() {
          
                  let blah = $('#DIV_1')

                  blah.css('display', 'block')

                  blah.addClass('info')
          
    
                  
          
              }, 2000);
          
              for (var i = 0; i < s; i++) {
          
                  star = $("#" + i);
          
          
          
                  star.addClass('shadow-pulse');
          
                  setTimeout(function() {
          
                      thisIsntEvenMyFinalForm();
          
                  },6500);
          
              }
          
          };
          
          var thisIsntEvenMyFinalForm = function () {
          
              
              $('.namediv').fadeIn(1300);
              $('.navbar').fadeIn(1300);
              $('.dot').css('display', 'none')
          
          
          
          };
          
          
          
          var starAggregate = function () {       
          
          
              
          
          
              for (var i = 0; i < 8; i ++) {
          
                  star = $("#" + i);   
                  
                  star.stop(true, true);
          
          
                      y = (25 + (Math.floor(Math.random() * 5)))
                      x = (20 + (Math.floor(Math.random() * 5)))
          
                      star.animate({top: y + "%", left: x + "%"}, 1200);
              }
              for (var i = 8; i < 16; i++) {
          
                  star = $("#" + i);   
                  
                  star.stop(true, true);
                      
                   
          
                      y = (45 + (Math.floor(Math.random() * 5)))
                      x = (13 + (Math.floor(Math.random() * 5)))
          
                      star.animate({top: y + "%", left: x + "%"}, 1200);
              }
              for ( var i = 16; i < 24; i++) {
                     
                  star = $("#" + i);   
                  
                  star.stop(true, true);
                      y = (65 + (Math.floor(Math.random() * 5)))
                      x = (20 + (Math.floor(Math.random() * 5)))
          
                      star.animate({top: y + "%", left: x + "%"}, 1200);
          
                  }
                  for (var i = 24; i < 32; i++) {
                   
                      star = $("#" + i);   
                  
                  star.stop(true, true); 
                      y = (25 + (Math.floor(Math.random() * 5)))
                      x = (5 + (Math.floor(Math.random() * 5)))
          
                      star.animate({top: y + "%", left: x + "%"}, 1200);
                  }
                  
                  for (var i = 32; i < 40; i++) {
          
                      if (i === s) {
                          console.log("done")
                      } else {
                    
                          star = $("#" + i);   
                  
                          star.stop(true, true); 
                      y = (65 + (Math.floor(Math.random() * 5)))
                      x = (5 + (Math.floor(Math.random() * 5)))
          
                      star.animate({top: y + "%", left: x + "%"}, 1200);
                  } 
              }
          
              
          }
          
          
          
          var moveit = function () {
          
          
          
          
              
          
              for (var i = 0; i < s; i++) {
          
          
                      t += 0.05;
                          
                      r = 100;
                      var xcenter = (width/2);
                      var ycenter = (height/2);
                      var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
                      var newTop = Math.floor(ycenter + (r * Math.sin(t)));
          
                      
                      if (k < 1000) {
          
                          $('#' + i).animate({
                              top: newTop,
                              left: newLeft,
                          }, 1, function() {
                              moveit();
          
                              k++;
                              
                          })
          
          
                      } 
                
          
          
                      }
                      
          
          };
          
          
          
          
          var reactorSpeed = function() {
          
          
          
              $('.color').css(
                  '-webkit-animation', 'spin1 0.3s infinite linear',
                  '-moz-animation', 'spin1 0.3s infinite linear',
                  '-o-animation','spin1 0.3s infinite linear',
                  '-ms-animation','spin1 0.3s infinite linear',
                  'animation', 'spin1 0.3s infinite linear');  
          
          
             
          
          }
                  
          
          
          
          var starsAnimationX = function() {
          
              console.log('ok!')
          
              for (var i =0; i < s; i++) {
          
          
                  theta = (Math.random() * (2 * Math.PI));
          
                  star = $("#" + i);     
                  
                  star.css("position", "absolute")
                  
                  console.log(theta);
          
                  
          
                  x = ((0.5 * width) + ((100) * (Math.cos(theta))));
          
                  y = ((0.5 * height) + ((100) * (Math.sin(theta))));
          
                  
          
                 
               
          
                  star.animate({top: y, left: x}, 1000);
          
                  
          
                  
                  // if (0 < xPos < 40) {
                  //     star.animate({right: '40%'});
                  //     xPos = 50;
                  // }
          
                  // else if (100 > xPos > 60) {
                  //     star.animate({left : '60%'})
                  //     xPos = 50;
                  // }
          
                  // else if (100 > yPos > 50) {
                  //     star.animate({bottom: '50%'});
                  //     yPos = 50;                
                  // }
          
                  // else if (0 < yPos > 50) {
                  //     star.animate({top: "50%"});
                  //     yPos = 50;
                  // }
              }
          
          
          }
          
          
          
          
          
          
          
          
          
          for (var i = 0; i < s; i++) {
          
          
          var iDiv = document.createElement('span');
          iDiv.id = i;
          iDiv.className = 'dot';
          
          var randomX =0;
          var randomY =0;
          
          randomX = Math.floor((100 * Math.random()) - 20);
          randomY = Math.floor(100 * Math.random());
          
          iDiv.setAttribute('x-pos', randomX);
          iDiv.setAttribute('y-pos', randomY);
          
          
          
          iDiv.style.position = "relative";
          iDiv.style.margin = 0;
          iDiv.style.padding = 0;
          iDiv.style.left = randomX + "%";
          iDiv.style.top = randomY + "%";
          
          document.getElementById("starfield").appendChild(iDiv); 
          
          
          
          }
          
          
          
          setTimeout(function() {
          
          
          document.querySelector('.align').remove();
          document.querySelector('.align2').remove()
                     
          starsAnimationX();
          
          }, 3000);
          
          var moveTimer = setTimeout(function() {
          setTimeout(moveit, 1000);
          setInterval(reactorSpeed, 1000)
          
          }, 4000);
          
          setTimeout( function () {
          
          clearInterval(moveTimer);    
          
          aggregateTimer = setTimeout(starAggregate, 1000);
          setTimeout(superBright, 1400);
          
          
          }, 6000)
              }
          
          }; 
      }

      render() {
          return(
              
            <div id="starfield">
  <div className="namediv"><span className="name">Jano Roze</span><br></br><span className="title">STEM Disciplinarian <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"&"} Full-Stack Developer</span>
  </div>

  <div style={{display: 'none'}} id="DIV_1">
	<div id="DIV_2">
		<div id="DIV_3">
			<div id="DIV_4">
				<div id="DIV_5">
					<i className = 'mdi mdi-speedometer' id="I_6"></i>
				</div>
			</div>
			<div id="DIV_7">
				<div id="DIV_8">
					Fast
				</div>
				<div id="DIV_9">
					Fast load times and lag free interaction.
				</div>
			</div>
		</div>
		<div id="DIV_10">
			<div id="DIV_11">
				<div id="DIV_12">
					<i className='mdi mdi-cellphone-link' id="I_13"></i>
				</div>
			</div>
			<div id="DIV_14">
				<div id="DIV_15">
					Responsive
				</div>
				<div id="DIV_16">
					Layouts that work on any device.
				</div>
			</div>
		</div>
	</div>
	<div id="DIV_17">
		<div id="DIV_18">
			<div id="DIV_19">
				<div id="DIV_20">
					<i className = 'mdi mdi-lightbulb-outline' id="I_21"></i>
				</div>
			</div>
			<div id="DIV_22">
				<div id="DIV_23">
					Intuitive
				</div>
				<div id="DIV_24">
					Easy to use, intuitive, UX/UI.
				</div>
			</div>
		</div>
		<div id="DIV_25">
			<div id="DIV_26">
				<div id="DIV_27">
					<i className='mdi mdi-rocket' id="I_28"></i>
				</div>
			</div>
			<div id="DIV_29">
				<div id="DIV_30">
					Dynamic
				</div>
				<div id="DIV_31">
					Making pages come to life.
				</div>
			</div>
		</div>
	</div>
</div>

            <div className="hero-logo-circles">
                    <div className="blue1 blue1-rotate color"></div>
                    <div className="blue2 color"></div>
                    <div className="red1 color"></div>
                    <div className="red2 color"></div>
                    <div className="yellow1 color"></div>
                    <div className="yellow2 color"></div>
                    <div className="orange1 color"></div>
                    <div className="orange2 color"></div>
                    <div className="green1 color"></div>
                    <div className="green2 color"></div>
                </div>


    <ul className="align">
      <li>
        <figure className='book'>

          

          <ul className='hardcover_front1' id="left_cover">
            
            <li>
              <div className="coverDesign1">
                
                
              </div>
            </li>
            
          </ul>
    

        </figure>
  </li>
      </ul>

      
      <ul className="align2">
        <figure className='book2'>
            <ul className='hardcover_front2' id="right_cover">
                
                <li>
                  <div className="coverDesign2">
                    
                    
                  </div>
                </li>
                
              </ul> 

        </figure>
      
    </ul>
    </div>
          )
      }



}

export default Intro