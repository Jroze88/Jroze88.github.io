import React, { Component}  from 'react';
import './clickygame.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import $ from 'jquery';
import Button from 'react-bootstrap/Button'
import { Transition } from 'react-transition-group';


class ClickyGame extends Component {

  constructor(props) {
    super(props);
      this.state = {
            animate: false
          };
        }


     

      stackCards = () => {
        this.setState({
          animate: true
        })
      }

      dealCards = () => {
        this.setState({
          animate: false
        })
      }






    render() {

        const unitArray = ['crannog', 'crannog', 'crannog', 'crannog', 'crannog', 'crannog', 'crannog']
  
      const flipstyles = {
        height: '150px',
        width: '250px'
      }


          const transitionStyles = {
            entering: { transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)', transform: 'translateX(100px)'},
            entered:  { transform: 'translateX(100px)' },
            // exiting:  { transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)', transform: 'translateX(-100px)'},
            // exited: { transform: 'translateX(0%)' },
          };

        return(
            <div >
        
{/* 
         style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }} */}




         <Button onClick={this.dealCards}>Deal</Button>
         <Button onClick={this.stackCards}>Stack</Button>

 
         {/* <Transition in={this.state.animate} timeout={1100}>
         {state => (
              <li  style={transitionStyles[state]} className= {' __card'}>
              <div className=  "flip-container" onClick={this.__cardClick}>
              
                   <div  className="flipper">
               
                        <div  className="front ">
                        
                        </div>
                        <div  className="back">
                            
                  </div>
                </div>
                    </div>
            </li>
        )}
              </Transition> */}
                  

        
                  
  
          
               
         
                  <ul className="list">

              {unitArray.map((person, index) => {
              return(  <li style={flipstyles} key={index} className= {' __card'}>
              <div className=  "flip-container" style={flipstyles} onClick={this.__cardClick}>
              
                   <div className="flipper">
               
                        <div style={flipstyles} style={{backgroundImage: `url(./${person}front)` }}  className="front ">
                        
                        </div>
                        <div style={flipstyles} style={{backgroundImage: `url(./${person}back)` }} className="back">
                            
                  </div>
                </div>
                    </div>
            </li>)

})}
      
     
          
          


       
         
         
        </ul>

        
   


      </div>

        )
    }}



    export default ClickyGame