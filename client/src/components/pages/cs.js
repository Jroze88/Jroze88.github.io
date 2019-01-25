import React, { Component } from 'react';
import {  Table, Panel,Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'




class CV extends Component {





    render() {

        const imgstyle = {
            maxHeight: '80%',
            maxWidth: '80%'
        }
        return (


            <Row>
                <Col md={2}></Col>
                <Col xs={10} md={10}>
                
                <img style={imgstyle} src='/img/res1.jpg' />
           
                
                </Col>
                <Col md={2}></Col>
            </Row>


        )
    }
}


export default CV