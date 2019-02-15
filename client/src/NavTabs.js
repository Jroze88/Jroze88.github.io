import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
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
      marginTop: '15%'
    }

    const NavStyle = {
      overflow: 'visible',
      height: '80px'
    }


return (

  <Navbar style = {NavStyle} bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img className='d-none d-lg-block' src='logo.png' style={styles} /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form className='d-none d-md-inline' inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>


)}
}



export default NavTabs;