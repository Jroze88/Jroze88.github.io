import React, { Component}  from 'react';
import './clickygame.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import $ from 'jquery';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'



class ClickyGame extends Component {

  constructor(props) {
    super(props);
      this.state = {
            animate: false,
            positionsTop: [],
            positionsLeft: [],
            transStyles: []
          };
        }

        stackCards = () => {
          console.log(this.state)
        }


     

      componentDidMount = () => {

        $('.front').on( "click", function(e) {
        console.log(this)
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
    
            }, 1890)

        })

        $('.front').mouseover(function(e) {


         $(e.target).addClass('zoomed')
    
           
        
            setTimeout(function() {

              
              $(e.target).removeClass('zoomed');
    
            }, 6090)

        })

        // let ost = $('.__card').offsetTop

        // let osp = $('.__card').offsetParent
        // let osh = $('.__card').offsetHeight
        
        // let osw = $('.__card').offsetWidth
        // let osr = $('.__card').offsetRight

      //   let arrayThings = $('.__card')

      //   let topArray = []

      //   let leftArray = []

      //   for (let i  = 0; i < arrayThings.length; i++ ) {

      //     topArray.push(arrayThings[i].offsetTop)
      //     leftArray.push(arrayThings[i].offsetLeft)



      //   }

      //   // console.log(osh)
      //   // console.log(ost)
      //   // console.log(osw)
      //   // console.log(osr)
      //   // console.log('-------------')
      //   // console.log(osp)

      //   setTimeout(function() {

      //     console.log(topArray)
      //     this.setState({
      //       positionsTop :  this.state.positionsTop.concat(topArray)
      //     })
      //     this.transitionStylesBuild(topArray)
      //   }.bind(this), 1000)


      //   this.setState({
      //     animate: true
      //   })
      //   }

      // dealCards = () => {
      //   this.setState({
      //     animate: false
      //   })
      // }
      }



    render() {

   

         
          //   entering: { transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)', transform: 'translateX(-100%)'},
          //   entered:  { transform: 'translateX(0)' },
          //   // exiting:  { transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)', transform: 'translateX(-100px)'},
          //   // exited: { transform: 'translateX(0%)' },
          // };

          const cardWhole = {
            width: '300px',
            height: '250px',
            display: 'inline-box',
            padding: '0.8em',
            margin: '10px'
          }


        

        return(
          <CardGroup>
          <Card style={cardWhole}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            <li className={`__card ani${this.props.aniIndex}`}>
            <div className=  "flip-container" >
            
                 <div  className="flipper">
             
                      <div  style={{backgroundImage: `url(./${this.props.unitName}front.png)`}} className="front ">
                      
                      </div>
                      <div  style={{backgroundImage: `url(./${this.props.unitName}back.png)`}} className="back">
                          
                </div>
              </div>
                  </div>
          </li>
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </CardGroup>

 
      
      )




     


        
    }}



    export default ClickyGame