import React, { Component } from 'react';
import API from "../../utils/API";
import List from '../List/List'
import ListItem from '../List/ListItem'
import './articles.css'
import $ from 'jquery';




class Articles extends Component {


    state = {
        articles : [],
        articles1 : []
    }

    clickHandler(e) {

      e.preventDefault()




      API.getCurrent()
      .then(res => {

        this.setState({ articles: res.data });

       

      
      })
      .catch(err => console.log(err));  



      API.getUpcoming()
      .then(res => {

        this.setState({ articles1: res.data });
      })
      .catch(err => console.log(err));

      console.log(this.state)

      document.querySelector('.btn').remove();

  }

 


    
    render() {
        return(
            <div className="textdiv row">
            <div className="col-md-1"></div>
            <div className="col-md-5 current">
            
            <h1> Current Events!</h1>
            {this.state.articles.length ? (
            <List>
            {this.state.articles.map(articles => (
              <ListItem key={articles._id} >
              <div className = "eventdiv" style={{backgroundImage : `url('https://www.gosugamers.net/${articles.banner}')`}}>
                <a href={articles.link}>
                
                    <strong>{articles.title}</strong> <br></br> 
                </a>
              </div>
              </ListItem>
                ))}
              </List>
         
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
            <div className = "col-md-5 upcoming">
            <h1> Upcoming!</h1>
            {this.state.articles1.length ? (
            <List>
                {this.state.articles1.map(articles1 => (
                  <ListItem key={articles1._id}>
              <div className = "eventdiv" style={{backgroundImage : `url('https://www.gosugamers.net/${articles1.banner}')`}}>
                <a href={articles1.link}>
                
                    <strong>{articles1.title}</strong> <br></br> 
                </a>
              </div>
                  </ListItem>
                ))}
              </List>
         
              ) : (
                <h3>No Results to Display</h3>
              )}
            
            
            
            
            </div>
            <div className="col-md-1"></div>
            <div className="row contactdiv">
            <div className="col-md-4"></div>
            <div className="col-md-4 button">
                
                <button className="btn btn-danger" onClick={(e) => this.clickHandler(e)}>Go Fetch!</button>
            
            
            </div>
            <div className="col-md-4"></div>           
            
            
            </div>
          </div>
        )
    };
};

export default Articles