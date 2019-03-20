import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import asoiaflogo from './logo.png'
import { CardGroup } from 'react-bootstrap';




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
    margin: '10px',
    maxWidth: '400px',
    padding: '0.8em',
    display: 'inline-block',
    backgroundColor: 'grey'
  }

  const asoiafcardStyle = {
    margin: '10px',
    maxWidth: '820px',
    height: 'auto',
    backgroundColor: 'grey'
  }


  const projectPanels = {
    
  }

  const asoiafpic = {
    cursor: 'Pointer'
  }

  const dndcard = {
    margin: '10px',
    maxWidth: '820px'
  }

  const oTTGlink = {
    border: 'solid black'
  }

  const projectcontain = {
    width: '100vw',
    margin: 0,
    padding: '2vh 4vw 2vh 8vw',
    backgroundColor: '#cdcdcd'
  }

    return(


        <Row style={projectcontain}>
         


<Card style = {asoiafcardStyle}>
<a style = {asoiafpic} src="https://janoroze.herokuapp.com/asoiaf" ><img style= {{maxWidth: '350px'}}src={asoiaflogo} /></a>
  <Card.Body>
    <Card.Title style={{color: 'black'}}>Tournament Reporting for CMON's<br></br>Game of Thrones </Card.Title>
    <Card.Text style={{color: 'black'}}>
      Client for populating DB with nationwide results<br></br>
      including player lists, unit breakdown, etc
      for reporting to <br></br> On the Table Gaming's <a style={oTTGlink} href='https://asoiafcc.com'>ASOIAFcc.com</a> 
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






       
    
       <Card className='dndcard'  style={dndcard}>
     <iframe type='text/html'style={projectPanels} className='frame' src="https://runeskype.herokuapp.com/dm" />
       <Card.Body>
         <Card.Title style={{color: 'black'}}>Rune Skype</Card.Title>
         <Card.Text style={{color: 'black'}}>
           Video Chat App for Board Games/RolePlaying Games (Beta)
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
     
     
     <CardGroup>
     
     <Card style = {cardStyle} >
       <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://evansimonross.github.io/Fly-in-Soup/" />
       <Card.Body>
         <Card.Title style={{color: 'black'}}>Fly In Soup</Card.Title>
         <Card.Text style={{color: 'black'}}>
           Interactive Map for NYC.gov <br></br>Restaurant Health Inspection Grades
         </Card.Text>
         <Dropdown as={ButtonGroup}>
       <Button variant="success" >Split Button</Button>
     
       <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
     
       <Dropdown.Menu>
         <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
         <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
         <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
       </Card.Body>
     </Card>
          
     <Card style = {cardStyle}>
     <iframe type='text/html' onClick={(e) => {this.handleReDirect(e)}} className="" style={projectPanels} className='frame' src="https://jroze88.github.io/GifTastic/" />
       <Card.Body>
         <Card.Title style={{color: 'black'}}>Favorite Reaction Gifs Manager</Card.Title>
         <Card.Text style={{color: 'black'}}>
           <br></br>
         ¯\_(ツ)_/¯ 
         <br></br>
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
     </CardGroup>
     
     <Card style = {asoiafcardStyle}>
<a style = {asoiafpic} src="https://janoroze.herokuapp.com/report" ><img style= {{maxWidth: '350px'}}src={asoiaflogo} /></a>
  <Card.Body>
    <Card.Title style={{color: 'black'}}>Animated Live Reporting of Tournament Results<br></br>Game of Thrones </Card.Title>
    <Card.Text style={{color: 'black'}}>
      Live pulls results from DB<br></br>
      Encodes results <br></br>
      Populates cards for every unit automatically<a style={oTTGlink} href='https://asoiafcc.com/tournament-results/'>https://asoiafcc.com/tournament-results/</a> 
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



  
            /* <div className ='wrap'>
            <iframe type='text/html'style={projectPanels} className='frame' src="https://runeskype.herokuapp.com/dm" />
            </div>      */
           
            /* <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://evansimonross.github.io/Fly-in-Soup/" />
            </div>      */
    
            /* <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/TriviaGame/" />
            </div>      */
           
                /* <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/Word-Guess-Game/" />
            </div>      */
/* 
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/unit-4-game/" />
            </div>      */

           
            /* <a href='https://jroze88.github.io/GifTastic/'>
                <div className ='wrap'>
                
            <iframe type='text/html' onClick={(e) => {this.handleReDirect(e)}} className="" style={projectPanels} className='frame' src="https://jroze88.github.io/GifTastic/" />
            </div> */
          




)}
    }
export default Projects