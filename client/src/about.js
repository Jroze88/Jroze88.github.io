import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'



const About = props => (


  <Row className="textdiv">

  <Col md={{ span: 8, offset: 2 }} sm={12}  id="aboutinfo" >
  <div className = 'abouttext' style={props.textstyle}>
    <h1>Hello!<br></br> My name is Jano Roze...</h1><br></br><br></br>
    <p>
      I am a Laboratory Researcher and Full Stack Developer. As an impassioned
      problem solver I am equally comfortable drawing upon a wide [array] of my own experiences, employing the insights of my peers or
      independently hacking away at new technologies to create practical solutons. A strong generalist; I am comfortable working in a 
       wide range of topics and 'learning on the fly.' Please feel free to reach out by clicking the 'Contact' link above!
    </p>
    <br></br>
    <br></br>
    <div className='techtext'>
    Relevant Technologies: HTML, CSS, Javascript, jQuery, Node,<br></br>
    Express, React for Web and Mobile Apps, Vue, Python, Django, MongoDB, MySQL, ECMA6+,<br></br>
    Twilio, Heroku, Firebase, GCloud, WebRTC
    </div>
  </div>
  </Col>

 

  </Row>

);

export default About;
