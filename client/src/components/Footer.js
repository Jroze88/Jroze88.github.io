import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import './footer.css';
import $ from 'jquery';



class Footer extends Component {

    componentDidUpdate() {

        if (window.location.pathname === '/' || '' || '/home' || '/Home') {
            $('body').css("background-image", 'url("/img/black.jpg")');
            $('body').css('background-size', 'cover')
            $('body').css('background-attachment', 'fixed');
            $('body').css('background-position', ' center');
            $('body').css('background-repeat', ' no-repeat');
            $('body').css('background-size', ' cover');     
            $('body').css('overflow', 'hidden')       

        
        }

    
        if (window.location.pathname !== '/' || '' || '/home' || '/Home') {
            $('body').css("background-image", 'url("/img/wallpaper.png")');
            $('body').css('background-size', 'cover')
            $('body').css('background-attachment', 'fixed');
            $('body').css('background-position', ' center');
            $('body').css('background-repeat', ' no-repeat');
            $('body').css('background-size', ' cover');
            $('footer').css('display', 'block');
            $('body').css('overflow-y', 'scroll') 
        }


        if (window.location.pathname === '/about/learn') {
            $('footer').css('visibility', 'hidden')

            
          } else {
              $('footer').css('visibility', 'visible') 
              $('body').css('background-attachment', 'fixed');
             
          }

        


        if (window.location.pathname === '/projects') {
            $('body').css('background-image', 'url("/img/supernova.jpg")')
            $('footer').css('bottom', '-50vh')
            $('.contactdiv').css('top', '65vh');
            $('.edge').css('position', 'relative')
            $('.edge').css('left', '-8%')
            $('.leftedge').css('position', 'relative')
            $('.leftedge').css('left', '8%')
            $('.int').css('left', '15%')
        } else {
            $('.contactdiv').css('top', '90vh');
        }


      }

      componentDidMount() {

        if (window.location.pathname === '/' || '' || '/home' || '/Home') {
            $('body').css("background-image", 'url("/img/black.jpg")');
            $('body').css('background-size', 'cover')
            $('body').css('background-attachment', 'fixed');
            $('body').css('background-position', ' center');
            $('body').css('background-repeat', ' no-repeat');
            $('body').css('background-size', ' cover');     
            $('body').css('overflow', 'hidden')       

        
        }

    
        if (window.location.pathname !== '/' || '' || '/home' || '/Home') {
            $('body').css("background-image", 'url("/img/wallpaper.png")');
            $('body').css('background-size', 'cover')
            $('body').css('background-attachment', 'fixed');
            $('body').css('background-position', ' center');
            $('body').css('background-repeat', ' no-repeat');
            $('body').css('background-size', ' cover');
            $('footer').css('display', 'block');
            $('body').css('overflow-y', 'scroll') 
        }

        if (window.location.pathname === '/about/learn') {
          $('footer').css('visibility', 'hidden')

          
        } else {
            $('footer').css('visibility', 'visible') 
            $('body').css('background-attachment', 'fixed');
           
        }



        if (window.location.pathname === '/projects') {
            $('body').css('background-image', 'url("/img/supernova.jpg")')
            $('footer').css('bottom', '-50vh')
            $('.contactdiv').css('top', '65vh');
            $('.edge').css('position', 'relative')
            $('.edge').css('left', '-8%')
            $('.leftedge').css('position', 'relative')
            $('.leftedge').css('left', '8%')
            $('.int').css('left', '15%')
        } else {
            $('.contactdiv').css('top', '90vh');
        }


      }




    render() {

        return(

            
    <footer style={{display: 'none'}} className="page-footer">


    <div className='text-center py-3 footertext'>
        <strong>Let's talk!</strong><br></br>
        Wanna get in touch or talk about a project?<br></br>
        Feel free to contact me via email at <a className='footerlink' href="mailto:Jroze.Contact@example.com?Subject=Hello!" target="_top">Jroze.Contact@Gmail.com</a><br></br>
        Or by clicking the <a className='footerlink' href='/contact'>Contact</a> link!
    </div>
  
    <div className="footer-copyright footertext cp text-center py-3">© 2018 Copyright:
      <a className='footerlink' href="https://github.com/Jroze88/Jroze88.github.io"> Jano Roze</a>
    </div>
    
  
  </footer>

        )}

     
    }



export default Footer;