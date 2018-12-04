import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import axios from 'axios';


class Contact extends Component {
    constructor(props, context) {
        super(props, context);

    
        this.state = {
            userInfo : {
              name : '',
              email : '',
              message: '',
              nmcounter: 0,
              mlcounter : 0,
              msgcounter : 0
            }
          }
        }
    
      getMessageValidationState() {

        if (this.state.msgcounter > 10) return 'success';
        else if (this.state.msgcounter > 5) return 'warning';
        else if (this.state.msgcounter > 0) return 'error';
        return null;
      }
    
      handleNameChange(e) {
        this.setState({ 
            name: e.target.value,
            nmcounter : this.state.nmcounter + 1
         });
        
      }

      handleEmailChange(e) {
        this.setState({ 
            email: e.target.value
         });
      }

      handleMessageChange(e) {
        this.setState({ 
            message: e.target.value,
            msgcounter : this.state.msgcounter + 1
         });
      }



  handleSubmit = e => {

    e.preventDefault();

    let rname = ''
    let remail = ''
    let rmessage = ''
    

    rname = this.state.name
    remail = this.state.email
    rmessage = this.state.message


    console.log(rmessage)
    


    axios({
      method: "POST", 
      url:"/sendmail", 
      data: {
          name: rname,   
          email: remail,  
          messsage: rmessage
      }
  }).then((response)=>{
      if (response.data.msg === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.msg === 'fail'){
          alert("Message failed to send.")
      }
  })

  this.resetForm()

}


resetForm(){
  this.setState({
        userInfo : {
          name : '',
          email : '',
          message: '',
          nmcounter : 0,
          mlcounter : 0,
          msgcounter : 0
        
      }
  })
}


  render() {
      const formstyle = {
          card : {
          marginTop : '10%',
          color : 'white'
          }
      }
    const FieldGroup = function({ id, label, help, ...props })  {
        return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            
          </FormGroup>
        );
    }

   return (

        <div className="textdiv row">
        <div className="col-md-4"></div>
    
      <div  style = {formstyle.card}  id="aboutinfo"className="col-md-4">
      <h1>Let's Talk!</h1>
        <Form >

    
    <FieldGroup
      id="forminlineText"
      type="text"
      placeholder="Enter text"
      onChange = {(e) => this.handleNameChange(e)}
    />
    <FieldGroup
      id="forminlineEmail"
      type="email"
      placeholder="Enter Email"
      onChange = {(e) => this.handleEmailChange(e)}
    /><br></br><br></br>

    <FormGroup
    validationState={this.getMessageValidationState()}   
    controlId="formBasicText">
      <FormControl componentClass="textarea"
       onChange = {(e) => this.handleMessageChange(e)} 
      
        placeholder="Shoot me a message:" />
        <FormControl.Feedback />
    </FormGroup>
    
        
    
        <Button type="submit">Submit</Button>
      </Form>
      </div>
      <div className="col-md-4"></div>
      </div>
/* //         <div>
//       <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
// <div className='row nameaddressrow'>

// <div className='col-md-8 form-group'>
        
//         <h1>Get in touch!</h1>

//         <label style={{display: 'none'}} htmlFor="name">Name</label>
//         <input placeholder="Name" type="text" autocomplete="new-password" className="form-control" id="name" />
//         <label style={{display: 'none'}} className = 'emailabel'>Email address</label>
//         <input placeholder="Email Address" type="email" autocomplete="new-password" className='form-control' id="email" aria-describedby="emailHelp" />


//     </div>
//     <div className='col-md-4'></div>
//     </div>
// <div className = 'row'>
// <div className='col-md-8'>
// <div className="form-group">
//         <label style={{display: 'none'}} htmlFor="message">Message</label>
//         <textarea placeholder="Message:" className="form-control message" autocomplete="new-password" rows="5" id="message"></textarea>
//     </div>
//     </div>
//     <div className='col-md-4'></div>
//     </div>
//     <div className = 'row'>
// <div className='col-md-8 form-group'>
// <button type="submit" className="btn submitform btn-primary">Submit</button>
//     </div>
//     <div className='col-md-4'></div>

//     </div>
// </form>
// </div> */

    )}
};


export default Contact;