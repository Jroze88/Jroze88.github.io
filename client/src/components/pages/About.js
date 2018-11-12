import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import './about.css';

const About = props => (
  <div>
  <div className="textdiv row">
    <div className="col-md-2"></div>

  <div id="aboutinfo" className="col-md-8">
    <h1>Hello!</h1><br></br><br></br>
    <p>
      My name is Jano Roze, I am a Laboratory Researcher and Full Stack Developer. I am an enpassioned
      problem solver, drawing upon a wide [array] of my own experiences and the insights of my peers to employ unique,
      practical solutons. 
    </p>
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
  }}  className="btn btn-link">
      Learn Less
    </Link>
    <Route path={`${props.match.url}/learn`} component={Learn} />
    </div>
    </div>
  </div>
);

export default About;