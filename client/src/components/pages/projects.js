import React, { Component } from 'react';
import { Panel,Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
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
    const projectPanels = {
        overflow : 'hidden'
    }
    return(

<Grid>
  <Row className='textdiv' Style={rowstyle}>
    <Col xs={12} lg={4}>
    {/* <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {this.props.modalBody}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal> */}
    <Panel.Heading>
            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>

          </Panel.Heading>

        <br />
        <Panel expanded={this.state.open}>
          
            <Panel.Body >
            <a href='https://jroze88.github.io/GifTastic/'>
                <div className ='wrap'>
                
            <iframe type='text/html' onClick={(e) => {this.handleReDirect(e)}} className="" style={projectPanels} className='frame' src="https://jroze88.github.io/GifTastic/" />
            </div>
            </a>
      <Panel.Toggle componentClass="a"><Button>
          Click to toggle
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
    blah blah<br></br>
    blah
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
    <Col xs={12} lg={4}>
    <Panel.Heading>
            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>

          </Panel.Heading>

        <br />
        <Panel >
          
            <Panel.Body>
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://evansimonross.github.io/Fly-in-Soup/" />
            </div>
      <Panel.Toggle componentClass="a"><Button >
          Click to toggle
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
    blah blah<br></br>
    blah
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
    <Col xs={12} lg={4}>
    <Panel.Heading>
            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>

          </Panel.Heading>

        <br />
        <Panel >
          
            <Panel.Body>
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/TriviaGame/" />
            </div>
      <Panel.Toggle componentClass="a"><Button>
          Click to toggle
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
    blah blah<br></br>
    blah
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
  </Row>
  <Row className='textdiv' Style={rowstyle}>
    <Col xs={12} lg={4}>
    <Panel.Heading>
            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>

          </Panel.Heading>

        <br />
        <Panel expanded={this.state.open}>
          
            <Panel.Body >
                <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/Word-Guess-Game/" />
            </div>
      <Panel.Toggle componentClass="a"><Button>
          Click to toggle
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
    blah blah<br></br>
    blah
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
    <Col xs={12} lg={4}>
    <Panel.Heading>
            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>

          </Panel.Heading>

        <br />
        <Panel >
          
            <Panel.Body>
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://jroze88.github.io/unit-4-game/" />
            </div>
      <Panel.Toggle componentClass="a"><Button >
          Click to toggle
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
    blah blah<br></br>
    blah
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
    <Col xs={12} lg={4}>
    <Panel.Heading>
            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>

          </Panel.Heading>

        <br />
        <Panel >
          
            <Panel.Body>
            <div className ='wrap'>
            <iframe type='text/html' className="" style={projectPanels} className='frame' src="https://runeskype.herokuapp.com/dm" />
            </div>
      <Panel.Toggle componentClass="a"><Button>
          Click to toggle
        </Button></Panel.Toggle>
            </Panel.Body>
            <Panel.Collapse>
          <Panel.Footer id="collapsible-panel-example-1" >
    blah blah<br></br>
    blah
          </Panel.Footer>
          </Panel.Collapse>
        </Panel>

    </Col>
  </Row>
</Grid>

/* <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          Click to toggle
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