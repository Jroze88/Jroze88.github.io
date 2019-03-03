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
              theseUnits: []
            
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

    for (let i = 0; i < arr.length; i++) {

        let decodedthing = Encoder[arr[i]]


        setTimeout(function() {

            if (decodedthing) {
                this.setState({
                    theseUnits : this.theseUnits.concat(decodedthing)
                })
            } 


        }, 1000)



  }
  }



    componentWillMount = () => {



        $('body').css('overflowY', 'scroll')

        axios.get("/get/tournamentresults").then(response => { 
    

            let result = []

            for (let i = 0; i < response.data.length; i++) {


               result.push(response.data[i])
             
                this.superHighLevelEncryptionAlgorithm(response.data.activeTournament["0"].players["0"].army1Encoded)

                   
                
            }

          

            this.setState({
                rawResults : this.state.rawResults.concat(result)
            },
            function() {
                
                this.setState({
                    activeTournament: this.state.activeTournament.concat(result[0])
                }, function() {

                    result.splice(0, 1)
                    this.setState({
                        otherTournaments: this.state.otherTournaments = result
                    })
                    console.log(this.state)
                })

            })

            


          }).catch(error => {
            console.log(error.response)
        });

          
         


    }



    render() {
        const unitArray = ['crannog', 'crannog', 'crannog', 'crannog', 'crannog', 'crannog', 'crannog', 'crannog', 'crannog', 'crannog']
        
        const playerstanding = {
            color: 'whitesmoke'
        }

        const otherevents = {
            width: '100%',
            backgroundImg: `url(${border})`
        }


        return(
            <Container flex>
                <Row>
                    <Col md={3}>
                 {this.otherTournamentsPopulate()}
                                              

             
             
                    </Col>
                    <Col className = 'card-area' md={9}>
                <ul className='list'>
                {unitArray.map((person, index) => {
                    return(
                <ClickyGame key={index} aniIndex={index} unitName={person} />
                    )}
            )}
            </ul>
            </Col>
            </Row>
            </Container>
        
    )
}

}


export default TournamentReport