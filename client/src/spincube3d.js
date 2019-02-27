import React, { Component } from 'react';



class spincube3d extends Component {


    componentDidMount = () => {

        // function showHideThumb() {
        //     var re = window.location.href.match(/fullpage|boomerang|debug/);
        //     if (re.length) {
        //       $('#thumb').remove();
        //     }
        //   }
          
          function handleResize() {
            $em = $('.emscripten');
            $bod = $('body');
            $em.width($bod.width());
            $em.height($bod.height());
          }
          debouncedResize = debounce(handleResize, 500, false);
          $(window).on('resize', debouncedResize);
        //   showHideThumb();
          handleResize();
          
          
          // Utils
          function debounce(func, wait, immediate) {
              var timeout;
              return function() {
                  var context = this, args = arguments;
                  var later = function() {
                      timeout = null;
                      if (!immediate) func.apply(context, args);
                  };
                  var callNow = immediate && !timeout;
                  clearTimeout(timeout);
                  timeout = setTimeout(later, wait);
                  if (callNow) func.apply(context, args);
              };
          };
          
          
          /***************************
          /* Here be generated code
          /***************************/
          
          var Module = {
              TOTAL_MEMORY: 536870912,
              errorhandler: null,			// arguments: err, url, line. This function must return 'true' if the error is handled, otherwise 'false'
              compatibilitycheck: null,
              dataUrl: "//cdn.rawgit.com/teolitto/StarfallDemo/6d5f5beb/WebOutput.data",
              codeUrl: "//cdn.rawgit.com/teolitto/StarfallDemo/master/WebOutput.js",
              memUrl: "//cdn.rawgit.com/teolitto/StarfallDemo/6d5f5beb/WebOutput.mem",
            };
          
          $.getScript('//rawgithub.com/teolitto/StarfallDemo/master/unityLoader.js');
    }


//     @import url(https://fonts.googleapis.com/css?family=Raleway:100);

// html, body {
//   width: 100%;
//   height: 100%;
//   background: #000;
// }

// #thumb {
//   display: block;
//   position: absolute;
//   z-index: 1000;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/StarfallThumb.jpg');
//   background-size: cover;
//   background-position: 50% 50%;
// }

// .loader {
//   background: #000;
//   display: block;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: 999;
//   p.loadText {
//     font-family: Raleway, helvetica, arial, sans-serif;
//     display: block;
//     color: #eee;
//     font-size: 20px;
//     text-align: center;
//     margin-top: 30px;
//   }
// .bar {
//   position: relative;
//   margin: 20px auto;
//   width: 50%;
//   height: 18px;
//   border-radius: 20px;
//   .glow {
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 10%;
//     height: 100%;
//     border-radius: 20px;
//     background: #fff;
//     box-shadow: inset 0px 0px 5px 2px rgba(35,253,233,1),0px 0px 25px 12px rgba(0,210,255,0.2);
//   }
//   .base {
//     height: 100%;
//     width: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     border-radius: 20px;
//     box-shadow: inset 0px 0px 9px 2px rgba(255,255,255,0.1);
//   }
// }
// }

// .emscripten {
//   z-index: 5;
// }
// .overlay {
//   display: block;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 900;
//   top: 0;
//   left: 0;
//   img {
//     height: 40px;
//     position: absolute;
//     bottom: 10px;
//     right: 10px;
//     cursor: pointer;
//     opacity: 0.5;
//     border-radius: 13px;
//     border: solid 1px #333;
//   }
// }


    render() {
  
      return (
        <div>
 
        <div id="thumb"></div>

<div id="loader" class="loader">
  <p id="loadText" class="loadText">Wait for it...</p>
  <div id="loadBar" class="bar">
    <div id="barGlow" class="glow"></div>
    <div id="barBase" class="base"></div>
  </div>
</div>
<canvas class="emscripten" id="canvas" oncontextmenu="event.preventDefault()" height="600px" width="960px"></canvas>
<div class="overlay">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/fullScreen3.png" alt="" class="fullscreen" onclick="SetFullscreen(1);"/>
</div>
</div>
      )}

      }

      export default spincube3d