import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'



const About = props => (


  <Row className="textdiv">

  <Col md={{ span: 8, offset: 2 }} sm={12}  id="aboutinfo" >
  <div className = 'abouttext' style={props.textstyle}>
    <span className='hellomynameis'><h1>Hello!</h1><br></br> <h2> My name is Jano Roze...</h2><br></br><br></br></span>
    <p>
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
     dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
      id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
       optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
         non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
          doloribus asperiores repellat."
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
