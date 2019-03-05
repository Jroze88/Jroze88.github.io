import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import $ from 'jquery'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import encoder from './decoder.js'
import axios from 'axios';
import ClickyGame from './clickygame'
import border from './bordersmall.gif'
import Encoder from './decoder'







class TournamentReport extends Component {
    constructor(props) {
        super(props);

    
        this.state = {
        
              rawResults: [],
              activeTournament: [],
              otherTournaments: {},
              theseUnits : [],
              renderUnits: false

            
          }
        }

        componentDidMount = () => {

            let clientSize = $('.col-md-9').clientTop
            console.log(clientSize)
        }

          otherTournamentsPopulate = () => {

            let tableOfPlayers = []
            
            let table = []
            
            let events = []

            let event =[]
            

            const playerstanding = {
                color: 'whitesmoke',
                fontSize: '0.8em'
            }

            const otherevents = {
                width: '100%',
            }

            const resultsStyle = {
                backgroundImage: `url(${border})`,
                backgroundSize: `100% 100%`,
                padding: '2em'
            }
    

            

                    // Outer loop to create players with html
                    for (let i = 0; i < this.state.otherTournaments.length; i++) {

                        
                        
                        let eventTitle = `Event: TEST${i}`
                        table = []
                        

                        let eventDate = this.state.otherTournaments[i].tournamentDate
                        tableOfPlayers = []
                        
                        

                        for (let k = 0; k < this.state.otherTournaments[i].players.length; k++) {

                            let player = this.state.otherTournaments[i].players[k].name

                            tableOfPlayers.push(<li style={playerstanding}>#{k + 1} {player}</li>)

                        }

                        
                        
                        table.push(<div style={playerstanding}>{eventTitle}</div>)

                        table.push(<div style={playerstanding}>{eventDate}</div>)
                        
                        table.push(<ul>{tableOfPlayers}</ul>)

                        event.push(<div style={resultsStyle} className='results'>{table}</div>)
                    }
                    
                    events.push(<div >{event}</div>)
                    
            return events
  }



  superHighLevelEncryptionAlgorithm = (arr) => {

    let totalArray = []

    for (let i = 0; i < arr.length; i++) {

        

        let decodedthing = Encoder[arr[i]]

        totalArray.push(decodedthing)
 


            if (i === arr.length - 1) {

                this.setState({
                    theseUnits : totalArray,
                    renderUnits : true
                }, function() {
                    console.log(this.state)
                })

            
            }


            }



  }
  



    componentWillMount = () => {



        $('body').css('overflowY', 'scroll')

        axios.get("/get/tournamentresults").then(response => { 


          
            console.log(response.data)

            this.setState({
                rawResults : response.data,
                activeTournament: response.data[0]
            },
            function() {

                this.superHighLevelEncryptionAlgorithm(response.data[0].players[0].army1Encoded)
                
            })

            response.data.splice(0, 1)

            
       
            this.setState({
                otherTournaments: this.state.otherTournaments = response.data
            })
            console.log(this.state)


          }).catch(error => {
            console.log(error.response)
        });

          
         


    }



    render() {
  
        
        const playerstanding = {
            color: 'whitesmoke'
        }



        const otherevents = {
            width: '100%',
            backgroundImg: `url(${border})`
        }

        const num = this.state.theseUnits

        return(
            <Container flex>
                <Row>
                    <Col style={{paddingRight: '0'}} md={3}>
                 {this.otherTournamentsPopulate()}
                                              

             
             
                    </Col>
                    <Col md={9}>
                    <ul className='list'>

                   
                        { this.state.theseUnits.map((element, i) =>    <ClickyGame key={i} unit = {element} />)}
                
           
                    </ul>
            </Col>
            </Row>
            </Container>
        
    )
}

}


export default TournamentReport