import React, { Component}  from 'react';
import './clickygame.css'
import $ from 'jquery';

class ScoreCounter extends Component {

  render() {
    return(
      <p>Score :{this.props.score}</p>

    )
  }
  
}

class ClickyGame extends Component {

  constructor(props) {
    super(props);
      this.state = {
            score: 0,
            flipped : ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm0'],
            animate: false,
            lastPicked : ''
          };
        }




        shuffleCards = () => {


          this.setState({animate : true})
          
          setTimeout(function() {
            this.resetShuffle()
          }.bind(this), 1500)


        }

        resetShuffle = () => {this.setState({animate: false})}



     

      






      componentDidMount() {

      const addPoints = () => { 
        setTimeout(function() {
          this.setState({ score : defaultScore})
          console.log(this.state.score)
           }.bind(this), 200)
      }

      let defaultScore =0;
       const removeFlippedCard =() => {
        setTimeout(function() {
          this.setState({ flipped: this.state.flipped.map(function(x, f) { return cards[f] }),
                          lastPicked : [flippedCard]})
          console.log(this.state.lastPicked)
          console.log(this.state.flipped)
        }.bind(this), 2000)
      }
       const initiateShuffle =() => {
          setTimeout(function() {
            this.setState({animate: true})
          }.bind(this), 2000)
        }


        let cards = this.state.flipped;
        let randomCards =[];
        let flippedCard = [];
        let cardBacks = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm0']

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

        randomCards = shuffle(cardBacks);

            
  
            
            $('.back').each(function(e) {   
  
  
              $('.back').eq(e).addClass(randomCards[e]);
  
          });

      


      

/////////////////////////////////
       
const stack =() => {        
        $(".card").each(function(e) {
      
          setTimeout(function() {
            $(".card").eq(e).attr("class", "card");
          }, e * 150)
          
        });       
      }


/////////////////////////////////////
      
const spread =()=> {
        
        $(".card").each(function(e) {
      
          setTimeout(function() {
            $(".card").eq(e).attr("class", "card ani" + e);
          }, e * 150)


          
        });
        
      }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      




      $('.front').on('click', function(e) {

       

          
          

       flippedCard = $(this.nextSibling).attr('class').replace('back ', '');

       let index = 0;
       index = cards.indexOf(flippedCard)

       console.log(index)

       if (index >= 0) {
        defaultScore += 100;
        addPoints()

      cards.splice(cards.indexOf(flippedCard), 1)
      console.log(cards)
      
      
      

       
      $(this.parentElement.parentElement).addClass('flip');
      $(this.parentElement).addClass('flip');
      $(this.nextElementSibling).addClass('flip');

        $(this.parentElement.parentElement).css('-webkit-transform', 'rotateY(180deg)');
        $(this.parentElement).css('-webkit-transform', 'rotateY(180deg)');
        // $(this).css('-webkit-transform', 'rotateY(180deg)');
        $(this.nextElementSibling).css('-webkit-transform', 'rotateY(180deg)');


        

        
        setTimeout(function() {

          $('.flip').css('-webkit-transform', '');
          $('.flip').removeClass('flip');

        }, 1990)


        setTimeout(function () {
          initiateShuffle()
          removeFlippedCard()
        }, 2000)



        setTimeout(function() {
          spread()
        }, 5200)
      }

      else {

        $(this.parentElement.parentElement).css('-webkit-transform', 'rotateY(180deg)');
        $(this.parentElement).css('-webkit-transform', 'rotateY(180deg)');
        // $(this).css('-webkit-transform', 'rotateY(180deg)');
        $(this.nextElementSibling).css('-webkit-transform', 'rotateY(180deg)');

        setTimeout(function() {
          alert('Better Luck Next Time!')
        }, 1000)

        setTimeout(function() {
          window.location.reload();
        }, 2000)

      }
            
            






      })

                    
                     






      
      
      
      
           
 
    };




    render() {

        return(
            <div>
                  <div className="announcement">

                 Feeling lucky? Click a card to reveal it. Don't reveal the same card twice.
                  
                  </div>
                  <div className="scorediv">

                  <ScoreCounter score = {this.state.score} />

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