import React, { Component } from 'react';

import $ from 'jquery'
import axios from 'axios';
import border from './bordersmall.gif'
import Encoder from './decoder'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import dropdownBG from './BGText.png'
import { Page, Grid, StoreCard, Table, Card, Badge } from "tabler-react";
import Button from 'react-bootstrap/Button'
import SiteWrapper from "./SiteWrapper.react";
import Dropdown from 'react-bootstrap/Dropdown'
import bgimg from './588c4ba75cbd6dd9fe3c5bfafaaccdea.jpg'
import StickyFooter from 'react-sticky-footer'
import { ResponsiveEmbed } from 'react-bootstrap';
import playerBG from './BtGold.png'
import listBG from './bordersmall.gif'






function importAll (r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
    return images;

}

const images = importAll(require.context('./gotimg', false, /\.(png|jpe?g|svg)$/))


class TournamentReportMobile extends Component {
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
              renderNCUs  : false,
              isMobile : false
              


            
          }
        }

        componentWillMount = () => {
            document.body.style.backgroundImage = `url(${bgimg})`;
        }

        populateList = () => {



                /// in case some lists go through unparsed
            if (!Array.isArray(this.state.activeList.unEncoded)) {



              

                let listToParse = this.state.activeList.unEncoded

                let listtoParseArray = listToParse.split(/(\u2022)/)

                let parsedList = []

                for (let i = 0; i < listtoParseArray.length; i++) {

                    let tempList1 = listtoParseArray[i].split(/(\n)/g)
              
                    for (let k = 0; k < tempList1.length; k++) {
              
                      if (tempList1[k].length !== 0 && tempList1[k].length !== 1) {
                         tempList1[k] =  tempList1[k].replace(/,/g, '')
                        parsedList.push(tempList1[k])
                      }
              
                    }
              
              
              
              
                  }

                  this.setState({
                      activeList : {
                          unEncoded : parsedList
                      }
                  })


                    let armyList = []

                    let thisLine = <li data={`${0}`}  onClick = {this.swapLists} style={{fontSize: '0.8em', listStyleType: 'none', textAlign: 'center', textDecoration: 'underline'}}>`{this.state.activePlayer.name}'s {this.state.activeList.unEncoded[0]}`</li>
                armyList.push(thisLine)

                
            if (this.state.activeList.length < 4) {
                armyList.push('------')
                return armyList
            }
        
                
        
                for (let i = 1; i < this.state.activeList.unEncoded.length - 1; i++) {
        
        
                    if (this.state.activeList.unEncoded[i].includes('with')) {
                        let thisLine = <li data={`${i}`} style={{fontSize: '0.8em', textAlign: 'center',  listStyleType: 'none'}}>=>{this.state.activeList.unEncoded[i]}</li>
                        armyList.push(thisLine)
                    } else if (this.state.activeList.unEncoded[i].includes('Faction')) {
                        let thisLine = <li data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li>
                    armyList.push(thisLine)
                    }  else  if (this.state.activeList.unEncoded[i].includes('Commander')) {
                        let thisLine = <li data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li>
                    armyList.push(thisLine)
                    } else  if (this.state.activeList.unEncoded[i].includes('Points')) {
                        let thisLine = <li  data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li>
                    armyList.push(thisLine)
                    } else  if (this.state.activeList.unEncoded[i].includes(':')) {
                        let thisLine = <li  data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li>
                    armyList.push(thisLine)
                    } else  if (this.state.activeList.unEncoded[i].includes(':')) {
                        let thisLine = <li  data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li>
                    armyList.push(thisLine)
                    }
                    else {
                        let thisLine = <li data={`${i}`} style={{fontSize: '0.8em'}}>{this.state.activeList.unEncoded[i]}</li>
                    armyList.push(thisLine)
                    }
        
        
                    
                }
        
        
                return armyList
                  





            }
            else {
 
                    let armyList = []

            let thisLine = <li data={`${0}`}  onClick = {this.swapLists} style={{fontSize: '0.8em', listStyleType: 'none', textAlign: 'center', textDecoration: 'underline'}}>`{this.state.activePlayer.name}'s {this.state.activeList.unEncoded[0]}`</li>
        armyList.push(thisLine)

        

        for (let i = 1; i < this.state.activeList.unEncoded.length - 1; i++) {


            if (this.state.activeList.unEncoded[i].includes('with')) {
                let thisLine = <li data={`${i}`} style={{fontSize: '0.8em', textAlign: 'center',  listStyleType: 'none'}}>=>{this.state.activeList.unEncoded[i]}</li>
                armyList.push(thisLine)
            } else if (this.state.activeList.unEncoded[i].includes('Faction')) {
                let thisLine = <li data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li>
            armyList.push(thisLine)
            }  else  if (this.state.activeList.unEncoded[i].includes('Commander')) {
                let thisLine = <li data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li>
            armyList.push(thisLine)
            } else  if (this.state.activeList.unEncoded[i].includes('Points')) {
                let thisLine = <li  data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li>
            armyList.push(thisLine)
            } else  if (this.state.activeList.unEncoded[i].includes(':')) {
                let thisLine = <span><br></br><li  data={`${i}`} style={{textDecoration: 'underline', fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList.unEncoded[i]}</li></span>
            armyList.push(thisLine)
            } 
            else {
                let thisLine = <li data={`${i}`} style={{fontSize: '0.8em', margin: '0.8em'}}>{this.state.activeList.unEncoded[i]}</li>
            armyList.push(thisLine)
            }


            
        }


        return armyList
                
            }

      

                
        
            




        }




        populateList2 = () => {


            /// in case some lists go through unparsed
        if (!Array.isArray(this.state.activeList2.unEncoded)) {



          

            let listToParse = this.state.activeList2.unEncoded

            let listtoParseArray = listToParse.split(/(\u2022)/)

            let parsedList = []

            for (let i = 0; i < listtoParseArray.length; i++) {

                let tempList1 = listtoParseArray[i].split(/(\n)/g)
          
                for (let k = 0; k < tempList1.length; k++) {
          
                  if (tempList1[k].length !== 0 && tempList1[k].length !== 1) {
                     tempList1[k] =  tempList1[k].replace(/,/g, '')
                    parsedList.push(tempList1[k])
                  }
          
                }
          
          
          
          
              }

              this.setState({
                  activeList2 : {
                      unEncoded : parsedList
                  }
              })


                let armyList = []

                let thisLine = <li data={`${0}`}  onClick = {this.swapLists} style={{fontSize: '0.8em', listStyleType: 'none', textAlign: 'center', textDecoration: 'underline'}}>`{this.state.activePlayer.name}'s {this.state.activeList2.unEncoded[0]}`</li>
            armyList.push(thisLine)

            if (this.state.activeList2.length < 4) {
                armyList.push('------')
                return armyList
            }
    
            
    
            for (let i = 1; i < this.state.activeList2.unEncoded.length - 1; i++) {
    
    
                if (this.state.activeList2.unEncoded[i].includes('with')) {
                    let thisLine = <li data={`${i}`} style={{fontSize: '0.8em', textAlign: 'center',  listStyleType: 'none'}}>=>{this.state.activeList2.unEncoded[i]}</li>
                    armyList.push(thisLine)
                } else if (this.state.activeList2.unEncoded[i].includes('Faction')) {
                    let thisLine = <li data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li>
                armyList.push(thisLine)
                }  else  if (this.state.activeList2.unEncoded[i].includes('Commander')) {
                    let thisLine = <li data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li>
                armyList.push(thisLine)
                } else  if (this.state.activeList2.unEncoded[i].includes('Points')) {
                    let thisLine = <li  data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li>
                armyList.push(thisLine)
                } else  if (this.state.activeList2.unEncoded[i].includes(':')) {
                    let thisLine = <li  data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li>
                armyList.push(thisLine)
                } else  if (this.state.activeList2.unEncoded[i].includes(':')) {
                    let thisLine = <li  data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li>
                armyList.push(thisLine)
                }
                else {
                    let thisLine = <li data={`${i}`} style={{fontSize: '0.8em'}}>{this.state.activeList2.unEncoded[i]}</li>
                armyList.push(thisLine)
                }
    
    
                
            }
    
    
            return armyList
              





        }
        else {

                let armyList = []

        let thisLine = <li data={`${0}`}  onClick = {this.swapLists} style={{fontSize: '0.8em', listStyleType: 'none', textAlign: 'center', textDecoration: 'underline'}}>`{this.state.activePlayer.name}'s {this.state.activeList2.unEncoded[0]}`</li>
    armyList.push(thisLine)

    

    for (let i = 1; i < this.state.activeList2.unEncoded.length - 1; i++) {


        if (this.state.activeList2.unEncoded[i].includes('with')) {
            let thisLine = <li data={`${i}`} style={{fontSize: '0.8em', textAlign: 'center',  listStyleType: 'none'}}>=>{this.state.activeList2.unEncoded[i]}</li>
            armyList.push(thisLine)
        } else if (this.state.activeList2.unEncoded[i].includes('Faction')) {
            let thisLine = <li data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li>
        armyList.push(thisLine)
        }  else  if (this.state.activeList2.unEncoded[i].includes('Commander')) {
            let thisLine = <li data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li>
        armyList.push(thisLine)
        } else  if (this.state.activeList2.unEncoded[i].includes('Points')) {
            let thisLine = <li  data={`${i}`} style={{fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li>
        armyList.push(thisLine)
        } else  if (this.state.activeList2.unEncoded[i].includes(':')) {
            let thisLine = <span><br></br><li  data={`${i}`} style={{textDecoration: 'underline', fontSize: '0.8em' , textAlign: 'center',  listStyleType: 'none'}}>{this.state.activeList2.unEncoded[i]}</li></span>
        armyList.push(thisLine)
        } 
        else {
            let thisLine = <li data={`${i}`} style={{fontSize: '0.8em', margin: '0.8em'}}>{this.state.activeList2.unEncoded[i]}</li>
        armyList.push(thisLine)
        }


        
    }


    return armyList
            
        }

  

            
    
        




    }



        windowCheck = () => {
            if (window.innerWidth <= 500) {
                this.setState({
                    isMobile : true
                },function() {
                    $('#sticky-footer').css('display', 'none')
                    $('body').css('overflowY', 'hidden')
                })
                
            } else {
                this.setState({
                    isMobile : false
                },function() {
                    $('#sticky-footer').css('display', 'block')
                    $('body').css('overflowY', 'scroll')
                })
            }
        }

        componentDidMount = () => {

            let clientSize = $('.col-md-9').clientTop
            console.log(clientSize)
         

            

        }



        swapLists = (e) => {

            let tournamentNumber = e.target.getAttribute('dataactivetournament')
            let playerNumber = e.target.getAttribute('dataactiveplayer')
            console.log(tournamentNumber)


            console.log(this.state.otherTournaments)

            this.setState({
                renderCombatUnits : false,
                renderNCUs : false,
                renderCommander : false,
                commander : {},
                activeList : false,
                combatUnits : [],
                NCUs : [],
                activeTournament : this.state.allTournaments[tournamentNumber]
            })

            setTimeout(() => {

                

                // this.setState({    
                //     allTournaments : response.data,              
                //     activeTournament: response.data[0],
                //     activePlayer : response.data[0].players[0],
                //     activeList : {
                //         encoded : response.data[0].players[0].army1Encoded,
                //         unEncoded : response.data[0].players[0].army1
                //     },
                //     otherTournaments: response.data
                // }, function() {
                //     this.superHighLevelEncryptionAlgorithm(this.state.activeList)
                    
                // })

           

                let targetPlayer = this.state.allTournaments[tournamentNumber].players[playerNumber]

                this.setState({
                    
      
                    activePlayer : targetPlayer
                    
                })
              }, 600)

              setTimeout(() => {
                this.setState({

                    activeList : {
                        encoded : this.state.activePlayer.army1Encoded,
                        unEncoded : this.state.activePlayer.army1
                    },
                    activeList2 : {
                        encoded : this.state.activePlayer.army2Encoded,
                        unEncoded : this.state.activePlayer.army2
                    }
                }, function() {
                    this.superHighLevelEncryptionAlgorithm(this.state.activeList)
                    this.superHighLevelEncryptionAlgorithm(this.state.activeList2)
                })
               
              }, 1200)





        }

          otherTournamentsPopulate = () => {

            let tableOfPlayers = []
            
            let table = []
            
            let events = []

            let event =[]
            

            const playerstanding = {
                color: 'black',
                fontSize: '0.8em',
                textAlign: 'center',
                userSelect: 'none',
                mouseOver: 'pointer',
                backgroundColor : '#00000000'
            }

            const otherevents = {
                width: '100%',
            }

            const resultsStyle = {
                backgroundImage: `url(${border})`,
                backgroundSize: `100% 100%`,
                padding: '1em'
            }

        //     <Grid.Col lg={3}>
        //     <StoreCard
        //       title="Apple iPhone 7 Plus 256GB Red Special Edition"
        //       subtitle="Apple"
        //       price="$499"
        //       imgUrl={testimg}
        //     />
        //     <StoreCard
        //       title="GoPro HERO6 Black"
        //       subtitle="GoPro"
        //       price="$599"
        //       imgUrl={testimg}
        //     />
        //   </Grid.Col>
    

            

                    // Outer loop to create players with html
                    for (let i = 0; i < this.state.otherTournaments.length; i++) {

                        
                        
                        let eventTitle = this.state.otherTournaments[i].tournamentName
                        table = []
                        

                        let eventDate = this.state.otherTournaments[i].tournamentDate
                        tableOfPlayers = []
                        
                        

                        for (let k = 0; k < this.state.otherTournaments[i].players.length; k++) {

                            let player = this.state.otherTournaments[i].players[k].name

                         
                            
                        

                            tableOfPlayers.push( <Dropdown.Item style={{padding: '1em', backgroundImage : `url(${playerBG})`, backgroundColor: '#00000000', backgroundRepeat: 'none', backgroundSize : '100% 100%'}} href="#"><li dataActiveTournament = {i} dataActivePlayer = {k} onClick = {(e) => this.swapLists(e)} style={playerstanding}>#{k + 1} {player} - {this.state.otherTournaments[i].players[k].army}</li></Dropdown.Item>)

                        }



                        
                        
                        table.push(<div style={playerstanding}>{eventTitle}</div>)

                        table.push(<div style={playerstanding}>{eventDate}</div>)
                        
                        table.push(<ul>{tableOfPlayers}</ul>)

                        event.push(                         <Dropdown  style={{width: '100%'}}>
                            <Dropdown.Toggle style={{padding: '1em', color: 'black', width: '100%', backgroundImage : `url(${dropdownBG})`, backgroundColor: '#00000000', backgroundRepeat: 'none', backgroundSize : '100% 100%'}} id="dropdown-basic">
                            <div >{eventTitle}</div>
                            <div >{eventDate}</div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{width: '100%', backgroundColor : '#00000000'}}>
                                    {tableOfPlayers}
                            </Dropdown.Menu>
                        </Dropdown>)
                    }
                    
                    events.push(table)
                    console.log(events)
            return <div className='card' >{event}</div>
  }



  superHighLevelEncryptionAlgorithm = (obj) => {

        let arr = []

        const NCUdivider = obj.encoded.indexOf('NonCombatUnits')
        const combatDivider = obj.encoded.indexOf('CombatUnits')

        for (let i = 0; i <combatDivider; i++) {
            if (obj.encoded[i].includes('Commander')) {

                let encoderArg = obj.encoded[i].toLowerCase()
                encoderArg = encoderArg.replace('commander', '')

                // this.setState({
                //     commander : {
                //         code : Encoder[encoderArg],
                //         name : obj.unEncoded[i],
                        
                //     }
                // })

            }
        }

        setTimeout(() => {
            this.setState({
                renderCommander : true
            })
        }, 1000)




   
        let NCUs = []
        let combatUnits = [{}]
 
  

    for (let i = 2; i < NCUdivider; i++) {


        if (obj.encoded[i].includes('with')) {

             

                let thisAttachment = obj.encoded[i].toLowerCase()

            thisAttachment = thisAttachment.replace('with', '')



                combatUnits[combatUnits.length-1].attachment =  {
                    name : obj.unEncoded[i],
                    code : Encoder[thisAttachment],
                }
                combatUnits[combatUnits.length-1].hasAttachment = true

            } else {

                let encodeArg = obj.encoded[i]
                encodeArg = encodeArg.toLowerCase()
                console.log(encodeArg)


       let thisUnit = {
        name : obj.unEncoded[i],
        code : Encoder[encodeArg],
        attachment : null,
        hasAttachment : false
       } 

       console.log(thisUnit)

        if (thisUnit.code !== undefined) {
            combatUnits.push(thisUnit)
        }

       
    }
    }



    for (let i = NCUdivider + 1; i < obj.encoded.length - 1; i++) {

        let encoderArg = obj.encoded[i].toLowerCase()

        let thisNCU = {
            code : Encoder[encoderArg],
            name : obj.unEncoded[i],
            
        }

        NCUs.push(thisNCU)
    }

//    this.setState({

//        NCUs : NCUs,
//        renderNCUs: true,
//        combatUnits : combatUnits,
       
//    })

   setTimeout(() => {
    this.setState({
        renderCombatUnits: true
    })
   }, 1000)
    

   console.log(this.state)
   $('.front').mouseover(function(e) {


    $(e.target).addClass('zoomed')

      
   
       setTimeout(() => {

         
         $(e.target).removeClass('zoomed');

       }, 6090)

   })

 
}


superHighLevelEncryptionAlgorithm2 = (obj) => {

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
                    
                }
            })

        }
    }

    setTimeout(() => {
        this.setState({
            renderCommander : true
        })
    }, 1000)





    let NCUs = []
    let combatUnits = [{}]



for (let i = 2; i < NCUdivider; i++) {


    if (obj.encoded[i].includes('with')) {

         

            let thisAttachment = obj.encoded[i].toLowerCase()

        thisAttachment = thisAttachment.replace('with', '')



            combatUnits[combatUnits.length-1].attachment =  {
                name : obj.unEncoded[i],
                code : Encoder[thisAttachment],
            }
            combatUnits[combatUnits.length-1].hasAttachment = true

        } else {

            let encodeArg = obj.encoded[i]
            encodeArg = encodeArg.toLowerCase()
            console.log(encodeArg)


   let thisUnit = {
    name : obj.unEncoded[i],
    code : Encoder[encodeArg],
    attachment : null,
    hasAttachment : false
   } 

   console.log(thisUnit)

    if (thisUnit.code !== undefined) {
        combatUnits.push(thisUnit)
    }

   
}
}



for (let i = NCUdivider + 1; i < obj.encoded.length - 1; i++) {

    let encoderArg = obj.encoded[i].toLowerCase()

    let thisNCU = {
        code : Encoder[encoderArg],
        name : obj.unEncoded[i],
        
    }

    NCUs.push(thisNCU)
}

this.setState({

   NCUs : NCUs,
   renderNCUs: true,
   combatUnits : combatUnits,
   
})

setTimeout(() => {
this.setState({
    renderCombatUnits: true
})
}, 1000)


console.log(this.state)
$('.front').mouseover(function(e) {


$(e.target).addClass('zoomed')

  

   setTimeout(() => {

     
     $(e.target).removeClass('zoomed');

   }, 6090)

})


}



    componentWillMount = () => {

        window.addEventListener('resize', this.windowCheck);

        this.windowCheck()


        $('body').css('overflowY', 'scroll')

        axios.get("/get/tournamentresults").then(response => { 


                console.log(response.data[0].players[0].army1Encoded)

               


                this.setState({    
                    allTournaments : response.data,              
                    activeTournament: response.data[0],
                    activePlayer : response.data[0].players[0],
                    activeList : {
                        encoded : response.data[0].players[0].army1Encoded,
                        unEncoded : response.data[0].players[0].army1
                    },
                    activeList2 : {
                        encoded : response.data[0].players[0].army2Encoded,
                        unEncoded : response.data[0].players[0].army2
                    },
                    otherTournaments: response.data
                }, function() {
                    this.superHighLevelEncryptionAlgorithm(this.state.activeList)
                    this.superHighLevelEncryptionAlgorithm2(this.state.activeList2)
                    
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



        <SiteWrapper >
        <Page.Content style={{backgroundImage : `url(${bgimg})`}}  title="Live Tournament Results (Beta)">
          <Grid.Row>
              <Grid.Col className = 'listDisplay' md={4}>
              <div style={{textAlign: 'left', userSelect : 'none', padding: '3em', backgroundSize : '100% 100%', backgroundImage : `url(${listBG})`}} className = 'armylist'>{this.state.activeList ? this.populateList() : ''}</div>
            </Grid.Col>
            <Grid.Col className = 'listDisplay' md={4}>
              <div style={{textAlign: 'left', userSelect : 'none', padding: '3em', backgroundSize : '100% 100%', backgroundImage : `url(${listBG})`}} className = 'armylist'>{this.state.activeList2 ? this.populateList2() : ''}</div>
            </Grid.Col>
            <Grid.Col md={4}>
            {this.otherTournamentsPopulate()}
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
        
          </Grid.Row>
        </Page.Content>
        {/* <StickyFooter
    bottomThreshold={99999}
    normalStyles={{
    backgroundColor: "#343a40",
    padding: "0.5em",
    fontSize: '0.5em',
    color: '#738597'
    }}
    stickyStyles={{
    backgroundColor: "#343a40",
    padding: "0.5em",
    width: '100vw',
    fontSize: '0.5em',
    color: '#738597'
    }}
>
<div>
Copyright &copy; <a style={{color: 'lightblue'}} href="https://cmon.com/products">CMON</a> A Song of Ice and Fire, <a style={{color: 'lightblue'}} href="https://asoiafcc.com">OnTheTableGaming</a>, <a style={{color: 'lightblue'}} href="/home">Jano Roze</a>. List generation by <a style={{color: 'lightblue'}} href='https://asoiafbuilder.com'>ASOIAFBuilder</a>
</div>
</StickyFooter> */}
      </SiteWrapper>)
        
    }
}




export default TournamentReportMobile