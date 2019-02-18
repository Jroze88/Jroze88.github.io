import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
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

  <Navbar.Brand href="#home">
      <img
        src={require("./logo.svg")}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>

  <Nav pullRight>
    <Nav.Link eventKey={1} href="/home">
      Home
    </Nav.Link>
    <Nav.Link eventKey={2} href="/contact">
      Contact
    </Nav.Link>
    <Nav.Link eventKey={3} href="/projects">
      Projects
    </Nav.Link>
    <NavDropdown eventKey={4} title="More Info" id="basic-nav-dropdown">
    <NavDropdown.Item href="/cv" eventKey={4.1}>Resume/CV</NavDropdown.Item>
      <NavDropdown.Item href="/skilltree" eventKey={4.2}>Skills Breakdown</NavDropdown.Item>
            <NavDropdown.Item divider />
      <NavDropdown.Item href='https://github.com/Jroze88' eventKey={4.3}>Github</NavDropdown.Item>
      <NavDropdown.Item href='http://www.linkedin.com/in/jano-roze' eventKey={4.4}>LinkedIn</NavDropdown.Item>
      
    </NavDropdown>
    <NavDropdown eventKey={5} title="Odds and Ends" id="basic-nav-dropdown">
      <NavDropdown.Item href="/name" eventKey={5.1}>Myers-Briggs</NavDropdown.Item>
      <NavDropdown.Item href="/clickygame" eventKey={5.2}>Card Flipper</NavDropdown.Item>

    </NavDropdown>
  </Nav>
</Navbar>


)}
}



export default NavTabs;