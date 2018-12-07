import React, { Component } from 'react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import $ from 'jquery';
import logo from '../logo.svg';



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

    

    const styles ={
      logoStyle : {
      width: '30%',
      height: '30%',
      padding: '10px'
    },
    navStuff : {
      position: 'relative',
      width: '100vw',
      left: '0',
      marginBottom : '0'
    }
  }


return (

<Navbar style={styles.navStuff} inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand pullLeft>

    <img style={styles.logoStyle} src={logo} className="brand" alt="" />

    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="/home">
      Home
    </NavItem>
    <NavItem eventKey={2} href="/contact">
      Contact
    </NavItem>
    <NavItem eventKey={3} href="/projects">
      Projects
    </NavItem>
    <NavDropdown eventKey={4} title="More Info" id="basic-nav-dropdown">
    <MenuItem href="/cv" eventKey={4.1}>Resume/CV</MenuItem>
      <MenuItem href="/skilltree" eventKey={4.2}>Skills Breakdown</MenuItem>
      
    </NavDropdown>
    <NavDropdown eventKey={5} title="Odds and Ends" id="basic-nav-dropdown">
      <MenuItem href="/name" eventKey={5.1}>Myers-Briggs</MenuItem>
      <MenuItem href="/clickygame" eventKey={5.2}>Card Flipper</MenuItem>
      <MenuItem divider />
      <MenuItem href='https://github.com/Jroze88' eventKey={5.3}>Github</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>


)}
}



export default NavTabs;