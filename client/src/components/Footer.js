import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import './footer.css';
import $ from 'jquery';



class Footer extends Component {

    componentDidUpdate() {

    
        if (window.location.pathname !== '/' || '' || '/home' || '/Home') {
            $('#root').css("background-image", 'url("/img/wallpaper.png")');
            $('#root').css('background-size', 'cover')
            $('body').css('background-color', 'rgb(68, 65, 65)')
        }

        if (window.location.pathname === '/about/learn') {
          $('footer').css('visibility', 'hidden')
          
        } else {
            $('footer').css('visibility', 'visible') 
           
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

      
        if (window.location.pathname !== '/' || '' || '/home' || '/Home') {
            $('#root').css("background-image", 'url("/img/wallpaper.png")');
            $('#root').css('background-size', 'cover')
            $('body').css('background-color', 'rgb(68, 65, 65)')
        }

        if (window.location.pathname === '/about/learn') {
          $('footer').css('visibility', 'hidden')
          
        } else {
            $('footer').css('visibility', 'visible') 
           
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

            
    <footer className="page-footer">


    <div className='text-center py-3 footertext'>
        <strong>Let's talk!</strong><br></br>
        Wanna get in touch or talk about a project?<br></br>
        Feel free to contact me via email at <a href="mailto:Jroze.Contact@example.com?Subject=Hello!" target="_top">Jroze.Contact@Gmail.com</a><br></br>
        Or by clicking the <a href='/contact'>Contact</a> link!
    </div>
  
    <div className="footer-copyright cp text-center py-3">© 2018 Copyright:
      <a href="https://github.com/Jroze88/Jroze88.github.io"> Jano Roze</a>
    </div>
    
  
  </footer>

        )}

     
    }



export default Footer;