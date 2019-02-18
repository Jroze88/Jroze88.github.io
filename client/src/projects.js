import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card, {Title} from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'




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
    const rowstyle = {
        margin: '20px'
    }
    const title = {
      color: 'white',
      fontSize : '2em'
    }
    const projectPanels = {
        overflow : 'hidden'
       
    }
    const colstyle = {
      overflow : 'hidden',
      marginTop : '5vh'
    }
    const subtext = {
      color : 'white'
    }
    return(

<Container>
  <Row Style={rowstyle}>
  <h2 style={title}>Projects:</h2>
    <Col style={colstyle} xs={12} lg={4}>
  
   
      
      

         <Card bg="warning">
        <Card.Header>
            <Card.Title><a href='https://runeskype.herokuapp.com/dm'>Video Chatroom with Boardgame Support</a><small> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Latest)</small></Card.Title>

          </Card.Header>
            <Card.Body>
            <div className ='wrap'>
            <iframe type='text/html'style={projectPanels} className='frame' src="https://runeskype.herokuapp.com/dm" />
            </div><br></br>
      <Card.Toggle componentClass="a"><Button>
          Show Technologies
        </Button></Card.Toggle>
            </Card.Body>
            <Card.Collapse>
          <Card.Footer id="collapsible-Card-example-1" >
          <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Tech (Under Development)</th></tr>
                    </thead>
                    <tbody>
                            <tr>
                              <td>Node/Express Server</td>
                            </tr>
                            <tr>
                              <td>DOM Managerment completely with React</td>
                            </tr>
                            <tr>
                              <td>Firebase Real-Time Chat</td>
                            </tr>
                            <tr>
                              <td>GCloud User Uploads</td>
                            </tr>
                            <tr>
                              <td>Twilio Live Video Stream Chatrooms</td>
                            </tr>
                            <tr>
                              <td>Chance.js Randomization Events</td>
                            </tr>
                            <tr>
                              <td>Hard-coded User Map 'embeds'</td>
                            </tr>
                            <tr>
                              <td>Heroku Deployment</td>
                            </tr>
                            <tr>
                              <td>WebRTC Peer-to-Peer Realtime Communication</td><br></br>::In the works::
                            </tr>
                       </tbody>
               
    
              </Table>
          </Card.Footer>
          </Card.Collapse>
        </Card>
        

    </Col>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Card bg="warning" expanded={this.state.open}>
        <Card.Header>
            <Card.Title><a href='https://evansimonross.github.io/Fly-in-Soup/'>NYC Restaurant Health Inspect Grade Map</a></Card.Title>

          </Card.Header>
            <Card.Body>
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://evansimonross.github.io/Fly-in-Soup/" />
            </div><br></br>
      <Card.Toggle componentClass="a"><Button >
          Show Technologies
        </Button></Card.Toggle>
            </Card.Body>
            <Card.Collapse>
          <Card.Footer id="collapsible-Card-example-1" >
          <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Tech</th></tr>
                    </thead>
                    <tbody>
                            <tr>
                              <td>Bootstrap</td>
                            </tr>
                            <tr>
                              <td>Node</td>
                            </tr>
                            <tr>
                              <td>NYC Board of Health API</td>
                            </tr>
                            <tr>
                              <td>MapBox API</td>
                            </tr>
                            <tr>
                              <td>Geocoding</td>
                            </tr>
                            <tr>
                              <td>User Authentication</td>
                            </tr>
                        </tbody>
                
            
              </Table>
          </Card.Footer>
          </Card.Collapse>
        </Card>

    </Col>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Card bg="warning" expanded={this.state.open}>
        <Card.Header>
            <Card.Title> <a href='https://jroze88.github.io/TriviaGame/'>Lord of the Rings timed Riddle Game</a></Card.Title>

          </Card.Header>
            <Card.Body>
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/TriviaGame/" />
            </div><br></br>
      {/* <Card.Toggle componentClass="a"><Button>
          Show Technologies
        </Button></Card.Toggle> */}
            </Card.Body>
            {/* <Card.Collapse>
          <Card.Footer id="collapsible-Card-example-1" >
          <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Tech</th></tr>
                    </thead>
                    <tbody>
                            <tr>
                              <td>Animations</td>
                            </tr>
                            <tr>
                              <td>jQuery</td>
                            </tr>
                            <tr>
                              <td>Web App Timing</td>
                            </tr>
                        </tbody>
                
            
              </Table>
          </Card.Footer>
          </Card.Collapse> */}
        </Card>

    </Col>
  </Row>
  <Row Style={rowstyle}>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Card bg="warning" expanded={this.state.open}>
        <Card.Header>
            <Card.Title> <a href='https://jroze88.github.io/Word-Guess-Game/'>Video Game Themed Hang Man</a></Card.Title>

          </Card.Header>
            <Card.Body >

                <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/Word-Guess-Game/" />
            </div><br></br>
      {/* <Card.Toggle componentClass="a"><Button>
          Show Technologies
        </Button></Card.Toggle> */}
            </Card.Body>
            {/* <Card.Collapse>
          <Card.Footer id="collapsible-Card-example-1" >
          <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Tech</th></tr>
                    </thead>
                    <tbody>
                            <tr>
                              <td>Dynamic HTML Generation</td>
                            </tr>
                            <tr>
                              <td>Gihpy API</td>
                            </tr>
                            <tr>
                              <td>LocalStorage</td>
                            </tr>
                        </tbody>
               
    
              </Table>
          </Card.Footer>
          </Card.Collapse> */}
        </Card>

    </Col>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Card bg="warning" expanded={this.state.open}>
        <Card.Header>
            <Card.Title><a href='https://jroze88.github.io/unit-4-game/'>Simple My Hero Academia RPG</a></Card.Title>

          </Card.Header>
            <Card.Body>

            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/unit-4-game/" />
            </div><br></br>
      {/* <Card.Toggle componentClass="a"><Button >
          Show Technologies
        </Button></Card.Toggle> */}
            </Card.Body>
            {/* <Card.Collapse>
          <Card.Footer id="collapsible-Card-example-1" >
          <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Tech</th></tr>
                    </thead>
                    <tbody>
                            <tr>
                              <td>Constructor Classes</td>
                            </tr>
                            <tr>
                              <td>Embedded Object Properties</td>
                            </tr>
                            <tr>
                              <td>CSS Animations</td>
                            </tr>
                            <tr>
                              <td>jQuery</td>
                            </tr>
                            <tr>
                              <td>jQuery Modals</td>
                            </tr>
                        </tbody>
               
    
              </Table>
          </Card.Footer>
          </Card.Collapse> */}
        </Card>

    </Col>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Card bg="warning" expanded={this.state.open}>
        <Card.Header>
            <Card.Title><a href='https://jroze88.github.io/GifTastic/'>Social Media Reaction Gif Generator </a></Card.Title>

          </Card.Header>
            <Card.Body >
            <a href='https://jroze88.github.io/GifTastic/'>
                <div className ='wrap'>
                
            <iframe type='text/html' onClick={(e) => {this.handleReDirect(e)}} className="" style={projectPanels} className='frame' src="https://jroze88.github.io/GifTastic/" />
            </div>
            </a><br></br>
      <Card.Toggle componentClass="a"><Button>
          Show Technologies
        </Button></Card.Toggle>
            </Card.Body>
            <Card.Collapse>
          <Card.Footer id="collapsible-Card-example-1" >
          <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Tech</th></tr>
                    </thead>
                    <tbody>
                            <tr>
                              <td>Dynamic HTML Generation</td>
                            </tr>
                            <tr>
                              <td>Gihpy API</td>
                            </tr>
                            <tr>
                              <td>LocalStorage</td>
                            </tr>
                        </tbody>
                

              </Table>
          </Card.Footer>
          </Card.Collapse>
        </Card>

    </Col>
  </Row>


<Row>
    <Col xs={12} lg={4} center>
    <small style={subtext}>Portfolio Page styled, written and generated completely with React</small>
    </Col>
 
</Row>
</Container>
/* <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          Show Technologies
        </Button>
        <br />
        <Card id="collapsible-Card-example-1" expanded={this.state.open}>
          <Card.Collapse>
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card.Body>
          </Card.Collapse>
        </Card>

        <p>You can also make the Card heading toggle the collapse.</p>

        <Card id="collapsible-Card-example-2" defaultExpanded>
          <Card.Header>
            <Card.Title toggle>
              Title that functions as a collapse toggle
            </Card.Title>
          </Card.Header>
          <Card.Collapse>
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card.Body>
          </Card.Collapse>
        </Card>

        <p>Or use a Card.Toggle component to customize</p>

        <Card id="collapsible-Card-example-3" defaultExpanded>
          <Card.Header>
            <Card.Title>Title that functions as a collapse toggle</Card.Title>
            <Card.Toggle componentClass="a">My own toggle</Card.Toggle>
          </Card.Header>
          <Card.Collapse>
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card.Body>
          </Card.Collapse>
        </Card>
      </div> */



)}
    }
export default Projects