import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import './navtabs.css';



const NavTabs = props => (

<ul>

<nav className="col-md-12 navbar fixed-top navbar-expand-md navbar-light bg-faded">

<div className="collapse navbar-collapse bg-transparent" id="navbarNav">

  <ul className="navbar-nav">
    <li className ="nav-item">

      <a className="navbar-brand" href="https://reactjs.org/">
    <img src={logo} className="brand" alt="" />
  </a>
    
    </li>
    <li className="nav-item active">
                          <Link
                          to="/projects"
                          className={
                            window.location.pathname === "/projects" ? "nav-link active" : "nav-link"
                          }
                        >
                          Projects
                        </Link>
    </li>
    <li className="nav-item active">
                <Link
                          to="/articles"
                          className={
                            window.location.pathname === "/articles" ? "nav-link active" : "nav-link"
                          }
                        >
                          Articles
                </Link>
    
    </li>
    <li className="nav-item active">
                <Link
                          to="/contact"
                          className={
                            window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                          }
                        >
                          Contact
                </Link>
    
    </li>
    <li className="nav-item active">
                <Link
                          to="/about"
                          className={
                            window.location.pathname === "/about" ? "nav-link active" : "nav-link"
                          }
                        >
                          About
                </Link>
    
    </li>


    </ul>
</div>
</nav>
</ul>

)




export default NavTabs;