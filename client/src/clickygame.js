import React, { Component}  from 'react';
import './clickygame.css'
import cardF from './10101f.jpg'
import cardB  from './10101b.jpg'
import $ from 'jquery';



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

      const cardWhole = {
        backgroundSize: '100% 100%',
        backgroundImage: `url(/10101f)` 
      } 

     

     

      return(
            <li className= ' __card'>
              <div className=  "flip-container" onClick={this.__cardClick}>
              
                   <div className="flipper">
               
                        <div style={{backgroundImage : require(`./gotimg/${this.props.unit}F`)}}  className="front ">
                        
                        </div>
                        <div  style={{backgroundImage : require(`./gotimg/${this.props.unit}B`)}} className="back">
                            
                  </div>
                </div>
                    </div>
            </li>

       
     )}

      }


    export default ClickyGame