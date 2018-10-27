import React, { Component}  from 'react';
import './clickygame.css'
import $ from 'jquery';



class ClickyGame extends Component {


      state = {
            score: 0
      }

      componentDidMount() {
            $(document).ready(function() {

            

                  $('.stack').click(function() {
        
        $(".card").each(function(e) {
      
          setTimeout(function() {
            $(".card").eq(e).attr("class", "card");
          }, e * 150)
          
        });
        
      });
      
      $('.spread').click(function() {
        
        $(".card").each(function(e) {
      
          setTimeout(function() {
            $(".card").eq(e).attr("class", "card ani" + e);
          }, e * 150)
          
        });
        
      });
      
                  $('.flip-container').on('click', function() {

                        
                              
                            
                                  $(this).css("-webkit-transform","rotateY(180deg)");
                                  $(this.firstChild).css("-webkit-transform","rotateY(180deg)");
                               
                                  $(this.firstChild.nextSibling).css("-webkit-transform","rotateY(180deg)");
                              
                        
                     






                  })
      
      
      
      
      
              })
      }



    render() {

        return(
            <div>
                  <div className="announcement">

                 Click a card to flip! 
                  
                  </div>
                  <div className="scorediv">

                  Score: {this.state.score}

                  </div>


            <div className="grid">

        <ul className="list">
          <li className="card ani1">
            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
          <li className="card ani2">

            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
          <li className="card ani3">
  
            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
          <li className="card ani4">
  
            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
          <li className="card ani5">
      
               <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
          <li className="card ani6">
     
            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
            </li>
          <li className="card ani7">
      
            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
          <li className="card ani8">
      
            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
          <li className="card ani0">
        
            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
          <li className="card ani9">
         
            <div className="flip-container">
                 <div  className="flipper">
		                  <div  className="front">
                        front of card
		                  </div>
		                  <div  className="back">
                        back of card
		            </div>
	            </div>
                  </div>
          </li>
        </ul>
        
        <button className="stack">Stack</button>
        <button className="spread">Spread</button>
        
      </div>
      </div>


        )
    }}

    export default ClickyGame