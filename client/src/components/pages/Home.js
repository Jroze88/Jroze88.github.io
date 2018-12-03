import React, { Component } from 'react';
import $ from 'jquery'
import { Carousel } from 'react-bootstrap'
import About from './about'


class Home extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
      const style = {
        cardbg : {
          backgroundImage : 'url("/carousel.png"), url("/img/black.jpg")',
          width : '100vw',
          height : '95vh'
        },
        textstyle : {
          color : 'white',
          fontSize : '2em',
          textAlign : 'center',
          backgroundColor : 'rgba(0, 0, 0, 0.425)'
        },
        subtext : {
          color : '#808080',
          fontSize : '0.7em',
          textAlign : 'center'
        }
      }
  
      return (
        
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item style = {style.cardbg}>
            <About subtext = {style.subtext} textstyle = {style.textstyle} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item  style = {style.cardbg}>
            <img width={'100%'} height={'90%'} style={{visibility: 'hidden'}} alt="900x500" src="/carousel.png" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style = {style.cardbg}>
            <img width={'100%'} height={'90%'} style={{visibility: 'hidden'}} alt="900x500" src="/carousel.png" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
   
      );
    }
  }
  
export default Home
              
//   <div style={{display: 'none'}} id="DIV_1">
//   <div id="DIV_2">
//       <div id="DIV_3">
//           <div id="DIV_4">
//               <div id="DIV_5">
//                   <i className = 'mdi mdi-speedometer' id="I_6"></i>
//               </div>
//           </div>
//           <div id="DIV_7">
//               <div className='squaretext' id="DIV_8">
//                   Complete
//               </div>
//               <div className='squaretext' id="DIV_9">
//                   Start-to-finish Website or Mobile App deployment.
//               </div>
//           </div>
//       </div>
//       <div id="DIV_10">
//           <div id="DIV_11">
//               <div id="DIV_12">
//                   <i className='mdi mdi-cellphone-link' id="I_13"></i>
//               </div>
//           </div>
//           <div id="DIV_14">
//               <div className='squaretext'  id="DIV_15">
//                   Scaling
//               </div>
//               <div className='squaretext'  id="DIV_16">
//                   Large-scale distribution infrastructure.
//               </div>
//           </div>
//       </div>
//   </div>
//   <div id="DIV_17">
//       <div id="DIV_18">
//           <div id="DIV_19">
//               <div id="DIV_20">
//                   <i className = 'mdi mdi-lightbulb-outline' id="I_21"></i>
//               </div>
//           </div>
//           <div id="DIV_22">
//               <div className='squaretext'  id="DIV_23">
//                   Intuitive
//               </div>
//               <div className='squaretext'  id="DIV_24">
//                   Easy to use, intuitive, UX/UI.
//               </div>
//           </div>
//       </div>
//       <div id="DIV_25">
//           <div id="DIV_26">
//               <div id="DIV_27">
//                   <i className='mdi mdi-rocket' id="I_28"></i>
//               </div>
//           </div>
//           <div id="DIV_29">
//               <div className='squaretext'  id="DIV_30">
//                   Dynamic
//               </div>
//               <div className='squaretext'  id="DIV_31">
//                   Making pages come to life.
//               </div>
//           </div>
//       </div>
//   </div>
// </div>
