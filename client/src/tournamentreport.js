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
              theseUnits : [{}],
              thisCommander : '',
              theseNCUs: [],
              renderCombatUnits: false,
              renderCommander: false,
              unitsWithAttachments: [],
              attachmentNames: [],
              theseNCUsNames : []

            
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


    let k = 100

    

    for (let i = 4; i < arr.length; i++) {


        if (arr[i].includes(`/\r/`)) {
            arr[i] = arr[i].replace(`/\r/`, '')
        }


       

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

         } else if (this.state.attachmentNames.indexOf(arr[i]) > 0) {
            console.log(arr[i] + ' is an attachment')
            continue
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

        this.setState({
            theseNCUsNames : this.state.theseNCUsNames.push(this.state.activeTournament.players[0].army1[i])
        })

        NCUs.push(decodedthing)
    }

        



    } 
    
    this.setState({
        theseUnits : combatUnits,
        theseNCUs : NCUs,
        renderCombatUnits : true
    }, function() {
        console.log(this.state)
    })



  }

  



    componentWillMount = () => {

        let commanderIndex;
        let commanderIndexName;
        let commanderfilter
        let commanderfilter1



        $('body').css('overflowY', 'scroll')

        axios.get("/get/tournamentresults").then(response => { 


          
            console.log(response.data)

            
         
                console.log(this.state.activeTournament)
                let attachments = []
                let attachmentNames = []

                for (let i = 0; i < response.data[0].players[0].army1.length; i++ ) {

                    if (response.data[0].players[0].army1[i].includes('with')) {
                        let attachment = i - 1
                        attachments.push(attachment)

                        let attachmentName = response.data[0].players[0].army1Encoded[i]
                        attachmentNames.push(attachmentName)

                    }

                    if (response.data[0].players[0].army1[i].includes('ommander')) {
                        let commanderIndex = i
                     
                            
                            commanderfilter = Encoder[response.data[0].players[0].army1Encoded[i]]        
                            
                            commanderIndex = commanderfilter
                            this.setState({
                                thisCommander : commanderIndexName,
                                thisCommanderCode : commanderIndex,
                                renderCommander : true,
                                        })
                    
                   
                    }

                    if (response.data[0].players[0].army1Encoded[i].includes('faction')) {
                        this.setState({
                            thisCommanderCode : Encoder[response.data[0].players[0].army1Encoded[i+1]]
                        })
                    }

                }





            
                
            


                this.setState({
                    unitsWithAttachments : attachments,
                    attachmentNames : attachmentNames,                   
                    rawResults : response.data,
                    activeTournament: response.data[0]
                }, function() {
                    this.superHighLevelEncryptionAlgorithm(response.data[0].players[0].army1Encoded)
                })

        
            
       
            this.setState({
                otherTournaments: response.data
            })
            console.log(this.state)


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
                    <Col style={{color: 'white'}} md={3}>
                    <ul className='list'>
                    <span>{this.state.thisCommander} </span>
                    <TransitionGroup className = 'commanderCards'>
                    {this.state.renderCommander ? (
                            <CSSTransition
                     
                            timeout={19000}
                            classNames="star1"
                            on={this.state.renderCommander}
                            exit={!this.state.renderUnits}
                          >
                        
                                   
                                    <li className= 'star1 __card' style={{height: '260px', width: '190px',  transition: `all  ${2 + 0.5}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`}}>
                                    <div className=  "flip-container" >

                                    <div className="flipper">

                                    <div style = {{backgroundImage : `url(${images[(this.state.thisCommanderCode + 'b.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'}} className="front "  >

                                    </div>
                                    <div  style=  {{backgroundImage : `url(${images[(this.state.thisCommanderCode + 'f.jpg')]})`, backgroundSize: '100% 100%', height: '260px', width: '190px'} } className = 'back' >

                                    </div>
                                    </div>
                                    </div>
                                    </li>

                                    </CSSTransition>
                                    ) :
                                    null}
                   </TransitionGroup>
                   </ul>
                   
                    </Col>
                    <Col md={4}>
                        <ul className = 'list'>
                        <span>{this.state.theseNCUsNames.length ? this.state.theseNCUsNames.map((element, i) => `${element}`)
                        :'' } </span>
                    <TransitionGroup className="cardsTransition">  



{ this.state.theseNCUs.map((element, i) =>       


    i !== 0 ?
    
    <CSSTransition
    key={i}
    timeout={19000}
    classNames="star2"
    in={this.state.renderUnits}
    exit={!this.state.renderUnits}
  >
              <li className= 'star2 __card' style={element.unit > 20000 ? {height: '260px', width: '190px',  transition: `all ${2 + 0.5*i}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`} :
                 {height: '260px', width: '190px',  transition: `all  ${2 + 0.5*i}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`}}  
                  >
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
                </CSSTransition> : '')}

                            
                </TransitionGroup>               
                </ul>
                    </Col>
            </Row>
            <Row>
                <Col xs={12}>
            <ul className='list'>

            <TransitionGroup className="cardsTransition">  



{ this.state.theseUnits.map((element, i) =>       


   element.unit === undefined || element === undefined  ? ''
   :
    
    <CSSTransition
    key={i}
    timeout={19000}
    classNames="star"
    in={this.state.renderUnits}
    exit={!this.state.renderUnits}
  >
              <li className= 'star __card' style={element.unit > 20000 ? {height: '260px', width: '190px',  transition: `all ${2 + 0.5*i}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`} :
                 {height: '260px', width: '190px',  transition: `all  ${2 + 0.5*i}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`}}  
                  >
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