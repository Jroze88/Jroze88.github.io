import React, { Component}  from 'react';
import './clickygame.css'
import $ from 'jquery';



class ClickyGame extends Component {

  constructor(props) {
    super(props);
      this.state = {
            score: 0,
            flipped : [],
            animate: false
          };
        }



      
        cardClick(e) {

          console.log(e.target)
          console.log($(this))



              
              

             
        
        }

        // shuffleCards = () => this.setState({animate : true})


      

     

      






      componentDidMount() {

       
        // const initiateShuffle =() => {
        //   setTimeout(function() {
        //     this.setState({animate: true})
        //   }.bind(this), 2000)
        // }
        let cards = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm0'];
        let randomCards =[];

        const shuffle = function(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;
        
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        
          return array;
        }

        if ($('.input').checked === false) {
          console.log('woot')
        }

        randomCards = shuffle(cards);

            
  
            
            $('.back').each(function(e) {   
  
  
              $('.back').eq(e).addClass(randomCards[e]);
  
          });

      


      

/////////////////////////////////
       
        $('.stack').click(function() {
        
        $(".card").each(function(e) {
      
          setTimeout(function() {
            $(".card").eq(e).attr("class", "card");
          }, e * 150)
          
        });
        
      });


/////////////////////////////////////
      
      $('.spread').click(function() {
        
        $(".card").each(function(e) {
      
          setTimeout(function() {
            $(".card").eq(e).attr("class", "card ani" + e);
          }, e * 150)
          
        });
        
      });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      




      $('.front').on('click', function(e) {

        $(this.parentElement.parentElement).css('-webkit-transform', 'rotateY(180deg)');
        $(this.parentElement).css('-webkit-transform', 'rotateY(180deg)');
        // $(this).css('-webkit-transform', 'rotateY(180deg)');
        $(this.nextElementSibling).css('-webkit-transform', 'rotateY(180deg)');

        // setTimeout(function () {
        //   initiateShuffle()
        // }, 2000)

   
   


            
            






      })

                    
                     






      
      
      
      
           
 
    };




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
          <li className= {`card ${this.state.animate ? " " : " ani1 "}`}>
            <div className=  "flip-container" onClick={this.cardClick}>
            
                 <div  className="flipper">
             
		                  <div  className="front ">
                      
		                  </div>
		                  <div  className="back">
                          
		            </div>
	            </div>
                  </div>
          </li>
          <li className= {`card ${this.state.animate ? " " : " ani2 "}`}>

            <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back ">
                          
		            </div>
	            </div>
                  </div>
          </li>
          <li className= {`card ${this.state.animate ? " " : " ani3 "}`}>
  
            <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back ">
                          
		            </div>
	            </div>
                  </div>
          </li>
          <li className= {`card ${this.state.animate ? " " : " ani4 "}`}>
  
            <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back">
                          
		            </div>
	            </div>
                  </div>
          </li>
          <li className= {`card ${this.state.animate ? " " : " ani5 "}`}>
      
               <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back">
                          
		            </div>
	            </div>
                  </div>
          </li>
          <li className= {`card ${this.state.animate ? " " : " ani6 "}`}>
     
            <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back">
                          
		            </div>
	            </div>
                  </div>
            </li>
          <li className= {`card ${this.state.animate ? " " : " ani7 "}`}>
      
            <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back ">
                          
		            </div>
	            </div>
                  </div>
          </li>
          <li className= {`card ${this.state.animate ? " " : " ani8 "}`}>
      
            <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back ">
                          
		            </div>
	            </div>
                  </div>
          </li>
          <li className= {`card ${this.state.animate ? " " : " ani9 "}`}>
        
            <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back  ">
                          
		            </div>
	            </div>
                  </div>
          </li>
          <li className= {`card ${this.state.animate ? " " : " ani0 "}`}>
         
            <div className=  "flip-container" onClick={this.cardClick}>
                 <div  className="flipper">
		                  <div  className="front">
                         
		                  </div>
		                  <div  className="back">
                          
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