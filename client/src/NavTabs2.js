import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'




class NavTabs extends Component {


  state = {
    menu : 'up'
  }


  render() {

    const title = {
      color: 'white',
      fontSize : '1.0em',
      textAlign: 'center'
    }

    const styles = {
      maxWidth: '230px',
      maxHeight: 'auto',
      marginTop: '20%'
    }

    const NavStyle = {
      overflow: 'visible',
      height: '80px'
    }


return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">News</Nav.Link>
      <Nav.Link href="#pricing">Media</Nav.Link>
      <NavDropdown title="Armies" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">House Lannister</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">House Stark</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Neutral Units</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Tournaments</Nav.Link>
      <Nav.Link href="#pricing">Links</Nav.Link>
      
    </Nav>
    </Navbar.Collapse>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  
</Navbar>


)}
}



export default NavTabs;