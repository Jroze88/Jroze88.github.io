import React, { Component } from 'react';
import './about.css';
import API from "../../utils/API";
import axios from 'axios';

class Contact extends Component {


  state = {
    userInfo : {
      name : '',
      email : '',
      message: ''
    }
  }


  handleSubmit = e => {

    e.preventDefault();

    let rname = ''
    let remail = ''
    let rmessage = ''
    

    rname = document.getElementById('name').value;
    remail = document.getElementById('email').value;
    rmessage = document.getElementById('message').value;


 
    axios({
      method: "POST", 
      url:"http://localhost:3001/sendmail", 
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

}


resetForm(){
  document.getElementById('contact-form').reset();
}


  render() {


    return(
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
<div className='row nameaddressrow'>

<div className='col-md-8 form-group'>

        <label for="name">Name</label>
        <input type="text" autocomplete="new-password" className="form-control" id="name" />
        <label className = 'emailabel'>Email address</label>
        <input type="email" autocomplete="new-password" className='form-control' id="email" aria-describedby="emailHelp" />


    </div>
    <div className='col-md-4'></div>
    </div>
<div className = 'row'>
<div className='col-md-8'>
<div className="form-group">
        <label for="message">Message</label>
        <textarea className="form-control" autocomplete="new-password" rows="5" id="message"></textarea>
    </div>
    </div>
    <div className='col-md-4'></div>
    </div>
    <div className = 'row'>
<div className='col-md-8 form-group'>
<button type="submit" className="btn submitform btn-primary">Submit</button>
    </div>
    <div className='col-md-4'></div>

    </div>
</form>

    )}
};

export default Contact;