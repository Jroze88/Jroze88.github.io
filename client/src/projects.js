import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'




class Projects extends Component {
    constructor(props, context) {
        super(props, context);

    
        this.state = {
        
             stuff : ''
            
          }
        }

        handleReDirect = (e) => {
            e.preventDefault()
            window.location.href= e.target.src
        }

render(){


  const cardStyle = {
    margin: '2em'
  }

  const projectPanels = {
    
  }

    return(

<Container flex>
  <Row>
    
  <Card style = {cardStyle} style={{ width: '20em' }}>
  <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://evansimonross.github.io/Fly-in-Soup/" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Dropdown as={ButtonGroup}>
  <Button variant="success">Split Button</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<iframe type='text/html' onClick={(e) => {this.handleReDirect(e)}} className="" style={projectPanels} className='frame' src="https://jroze88.github.io/GifTastic/" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Dropdown as={ButtonGroup}>
  <Button variant="success">Split Button</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<iframe type='text/html'style={projectPanels} className='frame' src="https://janoroze.herokuapp.com/asoiaf" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Dropdown as={ButtonGroup}>
  <Button variant="success">Split Button</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<iframe type='text/html'style={projectPanels} className='frame' src="https://runeskype.herokuapp.com/dm" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Dropdown as={ButtonGroup}>
  <Button variant="success">Split Button</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </Card.Body>
</Card>

</Row>


  </Container>
  
            /* <div className ='wrap'>
            <iframe type='text/html'style={projectPanels} className='frame' src="https://runeskype.herokuapp.com/dm" />
            </div><br></br> */
           
            /* <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://evansimonross.github.io/Fly-in-Soup/" />
            </div><br></br> */
    
            /* <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/TriviaGame/" />
            </div><br></br> */
           
                /* <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/Word-Guess-Game/" />
            </div><br></br> */
/* 
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/unit-4-game/" />
            </div><br></br> */

           
            /* <a href='https://jroze88.github.io/GifTastic/'>
                <div className ='wrap'>
                
            <iframe type='text/html' onClick={(e) => {this.handleReDirect(e)}} className="" style={projectPanels} className='frame' src="https://jroze88.github.io/GifTastic/" />
            </div> */
          




)}
    }
export default Projects