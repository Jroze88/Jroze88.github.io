import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import brownbg from './brownbg.jpg'


class Home extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
        width: window.innerWidth
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
          width : '100vw',
          height : '95vh',
          backgroundColor: `#252934`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        },
        textStyle : {
          color : 'white',
          fontSize : '2em',
          textAlign : 'center',
          backgroundColor : 'rgba(0, 0, 0, 0.425)',
          padding : '10px',
          marginTop : '10vh',
          marginBottom : '10px'
        },
        subtext : {
          color : '#808080',
          fontSize : '0.7em',
          textAlign : 'center'
        },
        textStyleMobile :{
          color : 'white',
          fontSize : '1em',
          textAlign : 'center',
          backgroundColor : 'rgba(0, 0, 0, 0.425)',
          padding : '10px',
          marginTop : '10vh',
          marginBottom : '10px'
        },
        numbers : {
          fontSize : '0.9em'
        },
        carousel : {
          marginTop : '10vh'
        }
      }
  
      return (
    
<Carousel activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect} keyboard={true}
        interval={0}>
  <Carousel.Item style={style.cardbg}>
  <About />
    <Carousel.Caption>
      <h3>- _ _</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  style={style.cardbg}>
        <Contact />

    <Carousel.Caption>
      <h3>_ - _</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={style.cardbg}>
        <Projects />

    <Carousel.Caption>
      <h3></h3>

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