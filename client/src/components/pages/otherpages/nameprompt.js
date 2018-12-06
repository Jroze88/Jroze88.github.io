import React, { Component}  from 'react';
import './nameprompt.css'
import {Grid, Row, Col, Button } from 'react-bootstrap'




class NamePrompt extends Component {


    state = {
        name : ""
    }


handleInputChange = event => {

    let value = event.target.value;




    // Updating the input's state
    this.setState({
      name : value
    });



}

handleFormSubmit = event => {
  
    let userName = this.state.name
    window.localStorage.setItem('friendfinderuser', userName)
    window.location.href = "/friendfinder";
}



render() {
    const formstyle = {
            
        marginTop : '8%',
        color : 'white',
        backgroundColor : 'white',
        padding: '30px',
        borderRadius : '25px'

        }
        const textstyle = {
            color : 'black',
            padding: '30px',
            margin: '30px'
        }
    return(

       <Grid style={formstyle}>

      <Row>
   
    <Col md={4}></Col>
    <Col xs = {12} md={4}><h1 style={textstyle}> Enter your name to get started!</h1></Col>
    <Col md={4}></Col>
    </Row>


    <Row>
    <Col md={4}></Col>

     <Col xs={6} md={4}>
    <input type="text" id="INPUT_1"
     value={this.state.name}
     name="name"
     onChange={this.handleInputChange}
     onSubmit={this.handleFormSubmit}
     type="text"
     placeholder=" Name"
      required="required"/><br></br><br></br><br></br>
<Button  onClick={this.handleFormSubmit}>Submit</Button>
 </Col>

 
 <Col xs = {6} md={4}>
    
                         
                          
                        
                  
                     
                        </Col>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        </Row>
                        </Grid>

    )}
}


    export default NamePrompt