import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button  from 'react-bootstrap/Button'
import axios from 'axios';
import border from './border.gif'
import waxButton from './waxbutton.png'
import crow from './crowicon.gif'
import $ from 'jquery'
import mapbg from './map.jpg'





class TournamentReport extends Component {
    constructor(props) {
        super(props);

    
        this.state = {
        
              tournamentResults: null
            
          }
        }




    componentWillMount() {

        axios.get("/get/tournamentresults", tournamentResults).then(response => { 
            console.log(response)
          })
          .catch(error => {
              console.log(error.response)
          });



    }


    render() {


        return(
            <div></div>
        )
    }


}


export default TournamentReport