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
import {TransitionGroup, CSSTransition} from 'react-transition-group'





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
              renderCombatUnits: false,
              renderCommander: false,
              commander : {},
              NCUs : [],
              combatUnits : [],
              renderNCUs  : false


            
          }
        }

        componentDidMount = () => {

            let clientSize = $('.col-md-9').clientTop
            console.log(clientSize)
            $('#sticky-footer').css('display', 'none')
        }

          otherTournamentsPopulate = () => {

            let tableOfPlayers = []
            
            let table = []
            
            let events = []

            let event =[]
            

            const playerstanding = {
                color: 'whitesmoke',
                fontSize: '0.5em',
                textAlign: 'left'
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

                        
                        
                        let eventTitle = this.state.otherTournaments[i].tournamentName
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



  superHighLevelEncryptionAlgorithm = (obj) => {

        let arr = []

        const NCUdivider = obj.encoded.indexOf('NonCombatUnits')
        const combatDivider = obj.encoded.indexOf('CombatUnits')

        for (let i = 0; i <combatDivider; i++) {
            if (obj.encoded[i].includes('Commander')) {

                let encoderArg = obj.encoded[i].toLowerCase()
                encoderArg = encoderArg.replace('commander', '')

                this.setState({
                    commander : {
                        code : Encoder[encoderArg],
                        name : obj.unEncoded[i],
                        renderCommander : true
                    }
                })

            }
        }




   
        let NCUs = []
        let combatUnits = []
 
  

    for (let i = combatDivider + 1; i < NCUdivider; i++) {


        if (obj.encoded[i].includes('with')) {

            let thisAttachment = obj.encoded[i].toLowerCase()

            combatUnits[combatUnits.length-1].attachment =  {
                name : obj.unEncoded[i],
                code : Encoder[thisAttachment],
            }
            combatUnits[combatUnits.length-1].hasAttachment = true
            
            

        } else {


       let thisUnit = {
        name : obj.unEncoded[i],
        code : Encoder[obj.encoded[i].toLowerCase()],
        attachment : null,
        hasAttachment : false
       } 

       combatUnits.push(thisUnit)
    }
    }



    for (let i = NCUdivider + 1; i < obj.encoded.length - 1; i++) {

        let encoderArg = obj.encoded[i].toLowerCase()

        let thisNCU = {
            code : Encoder[encoderArg],
            name : obj.unEncoded[i],
            renderNCUs : true
        }

        NCUs.push(thisNCU)
    }

   this.setState({

       NCUs : NCUs,
       renderNCUs: true,
       combatUnits : combatUnits,
       renderCombatUnits: true
   })
    

   console.log(this.state)


 
}



    componentWillMount = () => {




        $('body').css('overflowY', 'scroll')

        axios.get("/get/tournamentresults").then(response => { 


                console.log(response.data[0].players[0].army1Encoded)
            


                this.setState({                  
                    activeTournament: response.data[0],
                    activeList : {
                        encoded : response.data[0].players[0].army1Encoded,
                        unEncoded : response.data[0].players[0].army1
                    },
                    otherTournaments: response.data
                }, function() {
                    this.superHighLevelEncryptionAlgorithm(this.state.activeList)
                    
                })


         


          }).catch(error => {
            console.log(error.response)
        });

          
         


    }



    render() {

       

                const defaultStyle = {
                transition: `opacity 300ms ease-in-out`,
                opacity: 0,
                }

                const transitionStyles = {
                entering: { opacity: 0 },
                entered:  { opacity: 1 },
                };
            


        return(
            <Container flex>
                <Row  style={{maxHeight: '50vh'}}>
                    <Col style={{maxHeight: '50vh', paddingRight: '0', overflowY : 'scroll'}} md={2}>
                 {this.otherTournamentsPopulate()}
                                              

             
             
                    </Col>
                    <Col style={{color: 'white'}} md={5}>
                    <ul className='list'>
                    <span>{this.state.commander.name} </span>
                    <TransitionGroup className = 'commanderCards'>
                  
      


{this.state.commander.code === undefined || this.state.commander === undefined  ? ''
:
                            <CSSTransition
                            key = {1}
                            unmountOnExit
                            classNames="star1"
                            on={this.state.renderCommander}
                         
                          >

                          
                        
                                   
                                    <li className= 'star1 __card' style={{height: '260px', width: '190px',  transition: `all  ${2 + 0.5}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`}}>
                                    <div className=  "flip-container" >

                                    <div className="flipper">

                                    <div style = {{backgroundImage : `url(${images[(this.state.commander.code + 'b.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'}} className="front "  >

                                    </div>
                                    <div  style=  {{backgroundImage : `url(${images[(this.state.commander.code + 'f.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'} } className = 'back' >

                                    </div>
                                    </div>
                                    </div>
                                    </li>

                                    </CSSTransition>}
                                   
                   </TransitionGroup>
                   </ul>
                   
                    </Col>
                    <Col md={5}>
                        <ul className = 'list'>
                    <TransitionGroup className="cardsTransition">  



{ this.state.NCUs.map((element, i) =>       


    element.code === undefined || element === undefined  ? ''
    :

    <CSSTransition
    key={i}
   unmountOnExit
    classNames="star"
    in={this.state.renderCombatUnits}
 
  >
              <li className= 'star __card' style={element.code > 20000 ? {height: '260px', width: '190px',  transition: `all ${2 + 0.5*i}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`} :
                 {height: '260px', width: '190px',  transition: `all  ${2 + 0.5*i}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`}}  
                  >
                <div className=  "flip-container" onClick={this.__cardClick}>

                    <div className="flipper">
                {console.log(element)}
                        <div style = {element.code > 20000 ? {backgroundImage : `url(${images[(element.code + 'f.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'} : {backgroundImage : `url(${images[(element.code + 'f.jpg')]})`, backgroundSize: '200% 100%', backgroundRepeat: 'no-repeat', height: '260px', width: '190px'}} className="front "  >
                        
                        </div>
                        <div  style=  {element.code > 20000 ? {backgroundImage : `url(${images[(element.code + 'b.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'} : {backgroundImage : `url(${images[(element.code + 'b.jpg')]})`, backgroundSize: '200% 100%', backgroundRepeat: 'no-repeat', height: '260px', width: '190px'}} >
                            
                    </div>
                </div>
                    </div>
                </li>
                </CSSTransition>)}

                            
                </TransitionGroup>               
                </ul>
                    </Col>
            </Row>
            <Row>
                <Col xs={12}>
            <ul className='list'>

            <TransitionGroup className="cardsTransition">  



{ this.state.combatUnits.map((element, i) =>       


   element.code === undefined || element === undefined  ? ''
   :
    
    <CSSTransition
    key={i}
   unmountOnExit
    classNames="star"
    in={this.state.renderCombatUnits}
 
  >
              <li className= 'star __card' style={element.code > 20000 ? {height: '260px', width: '190px',  transition: `all ${2 + 0.5*i}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`} :
                 {height: '260px', width: '190px',  transition: `all  ${2 + 0.5*i}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`}}  
                  >
                <div className=  "flip-container" onClick={this.__cardClick}>

                    <div className="flipper">
                {console.log(element)}
                        <div style = {element.code > 20000 ? {backgroundImage : `url(${images[(element.code + 'f.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'} : {backgroundImage : `url(${images[(element.code + 'f.jpg')]})`, backgroundSize: '200% 100%', backgroundRepeat: 'no-repeat', height: '260px', width: '190px'}} className="front "  >
                        
                        </div>
                        <div  style=  {element.code > 20000 ? {backgroundImage : `url(${images[(element.code + 'b.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'} : {backgroundImage : `url(${images[(element.code + 'b.jpg')]})`, backgroundSize: '200% 100%', backgroundRepeat: 'no-repeat', height: '260px', width: '190px'}} >
                            
                    </div>
                </div>
                    </div>
                </li>
                </CSSTransition>)}

                            
                </TransitionGroup>               
                                    



                        </ul>
                        </Col>
            </Row>
            </Container>
        
    )
}

}


export default TournamentReport