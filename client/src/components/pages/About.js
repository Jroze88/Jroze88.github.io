import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import './about.css';



const About = props => (
  <div>
  <div className="textdiv row">
    <div className="col-md-2"></div>

  <div id="aboutinfo" className="col-md-8">
  <div className = 'abouttext' >
    <h1>Hello! My name is Jano Roze</h1><br></br><br></br>
    <p>
      I am a Laboratory Researcher and Full Stack Developer. As an impassioned
      problem solver, I draw upon a wide [array] of my own experiences and the insights of my peers to employ unique,
      practical solutons. I enjoy working on various side projects and keeping up to date on the latest innovations in science and technology.
      Please feel free to reach out by clicking the 'Contact' link in the navbar above!
    </p>
    <br></br>
    <br></br>
    Relevant Technologies: HTML, CSS, Javascript, jQuery, Node,<br></br>
    Express, React, Vue, MongoDB, MySQL, ECMA6+, React-Native, Twilio, <br></br>
    Heroku Deployment, WebRTC, Python, Django
  </div>
  </div>
  <div className="col-md-2"></div>

  </div>
  <div className="contactdiv row">

  <div className ="col-md-12">
  

    <Link to={`${props.match.url}/learn`} role="button"  style={{
      textDecoration : 'none'
  }}  className="btn learnmore btn-link">
      Learn More
    </Link>{" "}
    <Link to="/about" role="button"  style={{
      textDecoration : 'none'
  }}  className="btn learnless btn-link">
      Learn Less
    </Link>
    <Route path={`${props.match.url}/learn`} component={Learn} />
    </div>
    </div>
  </div>
);

export default About;