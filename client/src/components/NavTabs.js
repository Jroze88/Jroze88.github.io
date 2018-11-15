import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import './navtabs.css';
import $ from 'jquery';



class NavTabs extends Component {


  state = {
    menu : 'up'
  }

  clickHandler(e) {
    e.preventDefault()

    if (this.state.menu === 'up') {

    $('.dropdown-menu').css('display', 'block')
      this.setState({
        menu : 'down'
      })

    } else if (this.state.menu === 'down') {
      $('.dropdown-menu').css('display', 'none')
      this.setState({
        menu : 'up'
      })
    }


  }

  render() {
return (

<ul>

<nav className="col-md-12 navbar fixed-top navbar-expand-md navbar-light bg-faded">

<div className="collapse navbar-collapse bg-transparent" id="navbarNav">

  <ul className="navbar-nav">
    <li className ="nav-item">

      <a className="navbar-brand" href="https://reactjs.org/">
    <img src={logo} className="brand" alt="" />
  </a>
    
    </li>
    <li className="nav-item  active">
                          <Link
                          to="/projects"
                          className={
                            window.location.pathname === "/projects" ? "imp nav-link active" : "imp nav-link"
                          }
                        >
                          Projects
                        </Link>
    </li>

    <li className="nav-item  active">
                <Link
                          to="/contact"
                          className={
                            window.location.pathname === "/contact" ? "imp nav-link active" : "imp nav-link"
                          }
                        >
                          Contact
                </Link>
    
    </li>
    <li className="nav-item text-center  active">
                <Link
                          to="/about"
                          className={
                            window.location.pathname === "/about" ? "nav-link imp active" : " imp nav-link"
                          }
                        >
                          About
                </Link>
    
    </li>
    <span style={{color: 'white'}} className="navbar-text">
    &nbsp; Quick Additions:
  </span>
    <li className="nav-item active">
                <Link
                          to="/articles"
                          className={
                            window.location.pathname === "/articles" ? "nav-link active" : "nav-link"
                          }
                        >
                          eSports Tracker
                </Link>
    
    </li>
    <li className="nav-item active">
                <Link
                          to="/nameprompt"
                          className={
                            window.location.pathname === "/nameprompt" || "/friendfinder" ? "nav-link active" : "nav-link"
                          }
                        >
                          Myers-Briggs Quiz
                </Link>
    
    </li>
    <li className="nav-item active">
                <Link
                          to="/clickygame"
                          className={
                            window.location.pathname === "/clickygame" ? "nav-link active" : "nav-link"
                          }
                        >
                          React Card Clicker
                </Link>
    
    </li>
    <li className="nav-item dropdown">
        <a onClick={(e) => this.clickHandler(e)} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#"> LOTR Riddles</a>
          <a className="dropdown-item" href="#">&#8594;Reaction Gifs</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">&#8594;NYC Health Inspections</a>
        </div>
      </li>


    </ul>
</div>
</nav>
</ul>

)}
}



export default NavTabs;