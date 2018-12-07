import React, { Component } from 'react';
import {  Table, Panel,Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
import '../../index.css'




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
    return(

<Grid>
  <Row Style={rowstyle}>
  <h2 style={title}>Projects:</h2>
    <Col style={colstyle} xs={12} lg={4}>
  
   
      
      

         <Panel bsStyle="warning">
        <Panel.Heading>
            <Panel.Title>Video Chatroom with Boardgame Support<small> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Latest)</small></Panel.Title>

          </Panel.Heading>
            <Panel.Body>
            <div className ='wrap'>
            <iframe type='text/html'style={projectPanels} className='frame' src="https://runeskype.herokuapp.com/dm" />
            </div><br></br>
      <Panel.Toggle componentClass="a"><Button>
          Show Technologies
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
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
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>
        

    </Col>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Panel bsStyle="warning" expanded={this.state.open}>
        <Panel.Heading>
            <Panel.Title>NYC Restaurant Health Inspect Grade Map</Panel.Title>

          </Panel.Heading>
            <Panel.Body>
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://evansimonross.github.io/Fly-in-Soup/" />
            </div><br></br>
      <Panel.Toggle componentClass="a"><Button >
          Show Technologies
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
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
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Panel bsStyle="warning" expanded={this.state.open}>
        <Panel.Heading>
            <Panel.Title>Lord of the Rings timed Riddle Game</Panel.Title>

          </Panel.Heading>
            <Panel.Body>
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/TriviaGame/" />
            </div><br></br>
      <Panel.Toggle componentClass="a"><Button>
          Show Technologies
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
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
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
  </Row>
  <Row Style={rowstyle}>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Panel bsStyle="warning" expanded={this.state.open}>
        <Panel.Heading>
            <Panel.Title>Video Game Themed Hang Man</Panel.Title>

          </Panel.Heading>
            <Panel.Body >

                <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/Word-Guess-Game/" />
            </div><br></br>
      <Panel.Toggle componentClass="a"><Button>
          Show Technologies
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
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
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Panel bsStyle="warning" expanded={this.state.open}>
        <Panel.Heading>
            <Panel.Title>Simple My Hero Academia RPG</Panel.Title>

          </Panel.Heading>
            <Panel.Body>

            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/unit-4-game/" />
            </div><br></br>
      <Panel.Toggle componentClass="a"><Button >
          Show Technologies
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
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
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
    <Col style={colstyle} xs={12} lg={4}>


        <br />
        <Panel bsStyle="warning" expanded={this.state.open}>
        <Panel.Heading>
            <Panel.Title>Social Media Reaction Gif Generator</Panel.Title>

          </Panel.Heading>
            <Panel.Body >
            <a href='https://jroze88.github.io/GifTastic/'>
                <div className ='wrap'>
                
            <iframe type='text/html' onClick={(e) => {this.handleReDirect(e)}} className="" style={projectPanels} className='frame' src="https://jroze88.github.io/GifTastic/" />
            </div>
            </a><br></br>
      <Panel.Toggle componentClass="a"><Button>
          Show Technologies
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
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
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
  </Row>


<Row>
    <Col xs={12} lg={4} center>
    <small>Portfolio Page styled, written and generated completely with React</small>
    </Col>
 
</Row>
</Grid>
/* <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          Show Technologies
        </Button>
        <br />
        <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <p>You can also make the Panel heading toggle the collapse.</p>

        <Panel id="collapsible-panel-example-2" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Title that functions as a collapse toggle
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <p>Or use a Panel.Toggle component to customize</p>

        <Panel id="collapsible-panel-example-3" defaultExpanded>
          <Panel.Heading>
            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>
            <Panel.Toggle componentClass="a">My own toggle</Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div> */



)}
    }
export default Projects