import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import $ from 'jquery'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import encoder from './decoder.js'
import axios from 'axios';
import Figure from 'react-bootstrap/Figure'
import border from './bordersmall.gif'
import Encoder from './decoder'
import Transition from 'react-transition-group'





function importAll (r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
    return images;

}

const images = importAll(require.context('./gotimg', false, /\.(png|jpe?g|svg)$/))


class TournamentReport extends Component {
    constructor(props) {
        super(props);

    
        this.state = {
        
              rawResults: [],
              activeTournament: [],
              otherTournaments: {},
              theseUnits : [{}],
              thisCommander : '',
              theseNCUs: [],
              renderUnits: false,
              unitsWithAttachments: [],
              attachmentNames: []

            
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
                fontSize: '0.5em'
            }

            const otherevents = {
                width: '100%',
            }

            const resultsStyle = {
                backgroundImage: `url(${border})`,
                backgroundSize: `100% 100%`,
                padding: '1em'
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
      
        
    let combatUnits = [{}]
    let NCUs = []
    this.setState ({
        thisCommander : arr[1]
    })

    let k = 100

    

    for (let i = 4; i < arr.length; i++) {

        
       

        if (arr[i].includes('non-combat')) {

            console.log(arr[i])

            this.setState({
                theseUnits : combatUnits
            })

            k = i
            

        }

        if (i < k) {

        
        if (this.state.unitsWithAttachments.includes(i)) {

            
        
        let decodedthing = {
            unit : Encoder[arr[i]],
            attachment :  Encoder[arr[i + 1]]
        } 
        combatUnits.push(decodedthing)
                console.log(decodedthing)

         } else if (this.state.unitAttachments.indexOf(arr[i]) > 0) {
            console.log(arr[i] + ' is an attachment')
        } else {

            let decodedthing = {
                unit : Encoder[arr[i]]
            }

            combatUnits.push(decodedthing)

        }

    } else {

        let decodedthing = {
            unit : Encoder[arr[i]]
        } 

        NCUs.push(decodedthing)
    }

        



    } 
    
    this.setState({
        theseUnits : combatUnits,
        theseNCUs : NCUs,
        renderUnits : true
    }, function() {
        console.log(this.state)
    })



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

                let attachments = []
                let attachmentNames = []

                for (let i = 0; i < response.data[0].players[0].army1.length; i++ ) {

                    if (response.data[0].players[0].army1[i].includes('with')) {
                        let attachment = i - 1
                        attachments.push(attachment)

                        let attachmentName = response.data[0].players[0].army1Encoded[i]
                        attachmentNames.push(attachmentName)

                    }

                }

                this.setState({
                    unitsWithAttachments : attachments,
                    unitAttachments : attachmentNames
                }, function() {
                    this.superHighLevelEncryptionAlgorithm(response.data[0].players[0].army1Encoded)
                })

               
                
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


            


        return(
            <Container flex>
                <Row  style={{maxHeight: '50vh'}}>
                    <Col style={{maxHeight: '50vh', paddingRight: '0', overflowY : 'scroll'}} md={2}>
                 {this.otherTournamentsPopulate()}
                                              

             
             
                    </Col>
                    <Col md={10}>
                    
            </Col>
            </Row>
            <Row>
                <Col xs={12}>
            <ul className='list'>

                   
{ this.state.theseUnits.map((element, i) =>       


    i !== 0 ?
    
               
                <li className= ' __card' style={element.unit > 20000 ? {height: '260px', width: '190px'} : {height: '260px', width: '190px'}}  >
                <div className=  "flip-container" onClick={this.__cardClick}>

                    <div className="flipper">
                {console.log(element)}
                        <div style = {element.unit > 20000 ? {backgroundImage : `url(${images[(element.unit + 'f.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'} : {backgroundImage : `url(${images[(element.unit + 'f.jpg')]})`, backgroundSize: '200% 100%', backgroundRepeat: 'no-repeat', height: '260px', width: '190px'}} className="front "  >
                        
                        </div>
                        <div  style=  {element.unit > 20000 ? {backgroundImage : `url(${images[(element.unit + 'b.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'} : {backgroundImage : `url(${images[(element.unit + 'b.jpg')]})`, backgroundSize: '200% 100%', backgroundRepeat: 'no-repeat', height: '260px', width: '190px'}} >
                            
                    </div>
                </div>
                    </div>
                </li>

                            
                            
                                    




                    :  ''  )}


                        </ul>
                        </Col>
            </Row>
            </Container>
        
    )
}

}


export default TournamentReport