import React, { Component}  from 'react';
import './nameprompt.css'




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
}



render() {
    return(

        <div>
    <div className="announcerow row">
    <div className = "col-3"></div>
    <div className = "col-4"><h1> Enter your name to get started!</h1></div>
    <div className = "col-3"></div>
    </div>


    <div className ="row namerow">
    <div className="col-3"></div>

    <div className="col-3">
    <input type="text" id="INPUT_1"
     value={this.state.name}
     name="name"
     onChange={this.handleInputChange}
     type="text"
     placeholder=" Name"
      required="required"/>

  </div>

 
        <div className="col-3"><a
                          href="/friendfinder"
                          className={
                            window.location.pathname === "/friendfinder" ? "nav-link active" : "nav-link"
                          }
                        > <button className="btn btn-danger" onClick={this.handleFormSubmit}>Submit</button>
                        </a>
                        </div>
    </div>

  </div>  

    )}
}


    export default NamePrompt