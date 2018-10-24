import React, { Component } from 'react';



class Articles extends Component {




    render() {
        return(
            <div className="textdiv row">
            <div className="col-md-6 current">
            <h1> Current Events!</h1>

            </div>
            <div className = "col-md-6 upcoming">
            <h1> Upcoming!</h1>
            
            
            
            
            </div>
          </div>
        )
    };
};

export default Articles