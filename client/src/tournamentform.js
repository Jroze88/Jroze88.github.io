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





class ReportForm extends Component {
    constructor(props, context) {
        super(props, context);

    
        this.state = {
        
              tournamentName : '',
              TournamentMonth : null,
              TournamentYear: null,
              TournamentDay : null,
              numberOfPlayers : 0,
              players : [],
              currentPlayer : null,
              playerName : '',
              playerVP : 0,
              playerPD : 0,
              playerStanding : 0,
              playerArmyType : '',
              playerW : 0,
              playerL : 0,
              playerD : 0,
              trackStats : false,
              playerArmy1 : [],
              playerArmy2 : [],
              toggleVis : false
            
          }
        }
    
//       getMessageValidationState() {

//         if (this.state.msgcounter >= 10) return 'success';
//         else if (this.state.msgcounter > 5) return 'warning';
//         else if (this.state.msgcounter > 0) return 'error';
//         return null;
//       }

//       getEmailValidationState() {
//         const emailcont = this.state.email
//         if (this.state.email === '') return null
//         else if (emailcont.includes('@')) return 'success';
//       }

componentDidMount = () => {
  const navb = document.querySelector('nav.navbar')


  // document.body.style.backgroundColor = 'darkgray'
  document.body.style.backgroundImage = `url(${mapbg})`
  document.body.style.overflowY = 'scroll'
  document.body.style.backgroundSize = '100% 100%'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundAttachment = 'attached'
  navb.style.display = 'none'

  const starf = document.querySelector('#starfield')

  starf.style.display = 'none'
}

componentWillUnmount = () => {
  const navb = document.querySelector('nav.navbar')
  document.body.style.backgroundImage = null
  document.body.style.overflowY = 'hidden'
  document.body.style.backgroundSize = null
  document.body.style.backgroundPosition = null
  document.body.style.backgroundRepeat =  null
  navb.style.display = 'block'
}

sendResults = (tournamentResults) => {

  axios.post("/post/tournamentresults", tournamentResults).then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });

  // setTimeout(function() {

  //   alert('Results Logged')
  //     window.location.reload();

  // }, 1200)
      
   


}
    
      handleNameChange = e => {
        this.setState({ 
            playerName: e.target.value
         });
        
      }

      handleVPChange = e => {
        this.setState({ 
            playerVP: e.target.value
         });
        
      }

      handlePDChange = e => {
        this.setState({ 
            playerPD: e.target.value
         });
        
      }

      handleWinChange = e => {
        this.setState({ 
            playerW: e.target.value
         });
        
      }

      handleLossChange = e => {
        this.setState({ 
            playerL: e.target.value
         });
        
      }

      handleDrawChange = e => {
        this.setState({ 
            playerD: e.target.value
         });
        
      }

      handleArmychange = e => {
        if (e.target.value !== '---') {
        this.setState({ 
            playerArmyType: e.target.value
         });
        }
        
      }

      handleStandingChange = e => {
        this.setState({ 
            playerStanding: e.target.value
         });
        
      }

//       handleEmailChange = e => {
//         this.setState({ 
//             email: e.target.value
//          });
//       }

//       handleMessageChange = e => {
//         this.setState({ 
//             message: e.target.value,
//             msgcounter : this.state.msgcounter + 1
//          });
//       }

handlePlayerDelete = e => {
  e.preventDefault()
  let arrayCopy = [...this.state.players]; // make a separate copy of the array
 

 let index = e.target.id
  if (index !== -1) {
     arrayCopy.splice(index, 1);
   this.setState({players: arrayCopy});
  }

  console.log(this.state.players)
}

compareBy(key) {
  return function (a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };
}

sortBy(key) {
  let arrayCopy = [...this.state.players];
  arrayCopy.sort(this.compareBy(key));
  this.setState({players: arrayCopy});
}



handleSubmit = e => { 

        e.preventDefault()

        let army1 = $('.army1').val()
        let army2 = $('.army2').val()

        this.setState({
          playerArmy1 : army1,
          playerArmy2 : army2
        })

        if (this.state.playerName && this.state.playerArmyType && this.state.tournamentName && this.state.playerStanding && this.state.playerArmy1) {

        this.setState({
          numberOfPlayers : this.state.numberOfPlayers + 1
        })



    
          
          let currentPlayer  = {
          name : this.state.playerName,
          placement : this.state.playerStanding,
          wins : this.state.playerW,
          losses : this.state.playerL,
          draws : this.state.playerD,
          army : this.state.playerArmyType,
          VP : this.state.playerVP,
          PD : this.state.playerPD,
          army1 : this.state.playerArmy1,
          army2 : this.state.playerArmy2
          }

          console.log(this.state)


        

        this.setState({
           players : this.state.players.concat(currentPlayer)
        })

        setTimeout(function() {
          console.log(this.state)

          this.setState({
            currentPlayer : null,
            playerName : '',
            playerVP : 0,
            playerPD : 0,
            playerStanding : 0,
            playerArmyType : '---',
            playerW : 0,
            playerL : 0,
            playerD : 0,
            trackStats : false,
            playerArmy1 : '',
            playerArmy2 : ''
          })

        }.bind(this), 800)

        

      
      }


}






handleDBSend = () => {

  let tournamentResults = {
    tournamentName : '',
    tournamentDate : '',
    players : []
  }

  console.log(tournamentResults)


  tournamentResults = {
    tournamentName : this.state.tournamentName,
    tournamentDate : this.state.tournamentDay + '/' + this.state.tournamentMonth + '/' + this.state.TournamentYear,
    players : this.state.players
  }

  console.log(tournamentResults)

  setTimeout(function() {

    this.sendResults(tournamentResults)
  }, 1000)
  

}

tournamentNameSet = (e)=> {
  if (e.target.value.length > 3) {
  this.setState({ 
    tournamentName: e.target.value.toUpperCase()
 });
}
}

tournamentDaySet = (e)=> {
  if (e.target.value !== 'Day') {
  this.setState({ 
    TournamentDay: e.target.value
 });
}
}

tournamentYearSet = (e)=> {
  if (e.target.value !== 'Year') {
  this.setState({ 
    
    TournamentYear: e.target.value
 });
}
}

tournamentMonthSet = (e)=> {
  if (e.target.value !== 'Month') {
  this.setState({ 
    TournamentMonth: e.target.value
 });
}
}



toggleVisibility = () => {
  if (this.state.tournamentName !== '') {
  this.setState({
    toggleVis : true
  })
}

  console.log(this.state.tournamentName)
}

  handleArmy1 = e => {


    let army1 = e.clipboardData.getData('text/plain')

    let finalList1= []

    let army1List = army1.split(/(\u2022)/)

    let army1ListBreaks = []

    let army1ListBreaksPrime = []


    for (let i = 0; i < army1List.length; i++) {

      let tempList1 = army1List[i].split(/(\n)/g)

      for (let k = 0; k < tempList1.length; k++) {

        if (tempList1[k].length !== 0 && tempList1[k].length !== 1) {
          army1ListBreaksPrime.push(tempList1[k])
        }

      }




    }


    


  


    setTimeout(function() {

      console.log(army1ListBreaksPrime)

      


      this.setState({
        playerArmy1 : army1ListBreaksPrime
      })

      
      
    }.bind(this), 1000)

    
  }

  handleArmy2 = e => {



    let army2 = e.clipboardData.getData('text/plain')

    let finalList2= []

    let army2List = army2.split(/(\u2022)/)

    let army2ListBreaks = []

    let army2ListBreaksPrime = []


    for (let i = 0; i < army2List.length; i++) {

      let tempList2 = army2List[i].split(/(\n)/g)

      for (let k = 0; k < tempList2.length; k++) {

        if (tempList2[k].length !== 0 && tempList2[k].length !== 1) {
          army2ListBreaksPrime.push(tempList2[k])
        }

      }




    }


    


  


    setTimeout(function() {

      console.log(army2ListBreaksPrime)

      


      this.setState({
        playerArmy2 : army2ListBreaksPrime
      })
      
    }.bind(this), 1000)

    
  }



//   handleSubmit = e => {

//     e.preventDefault();

//     let rname = ''
//     let remail = ''
//     let rmessage = ''
    

//     rname = this.state.name
//     remail = this.state.email
//     rmessage = this.state.message


//     console.log(rmessage)
    


//     axios({
//       method: "POST", 
//       url:"/sendmail", 
//       data: {
//           name: rname,   
//           email: remail,  
//           messsage: rmessage
//       }
//   }).then((response)=>{
//       if (response.data.msg === 'success'){
//           alert("Message Sent."); 
//           this.resetForm()
//       }else if(response.data.msg === 'fail'){
//           alert("Message failed to send.")
//       }
//   })

//   this.resetForm()

// }


// resetForm(){
//   this.setState({
     
//           name : '',
//           email : '',
//           message: '',
//           nmcounter : 0,
//           mlcounter : 0,
//           msgcounter : 0
        
      
//   })
// }


  render() {
      const formstyle = {
        background: '#262427',
        padding: '10px',
        color: 'white'


          
      }

      const lighttext = {
        color: 'grey',
        fontSize: '0.7em'
      }


      const headerS = {
        marginTop: 0,
        marginBottom: 0
      }



      const table = {
        marginTop: '3%',
        
      }

      // const notScroll = {
      //   backgroundImg :`url(${border})`,
      //   backgroundSize: '100% 100%',
      //   backgroundRepeat: 'no-repeat',
      //   color: 'white',
      //   padding: '5%',
      //   paddingTop: '5%',
      //   fontSize: '0.8em',
      //   marginBottom: '10%',
      //   visibility: 'hidden'
      // }

      const scroll = {
        backgroundImage :`url(${border})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        padding: '5%',
        paddingTop: '5%',
        fontSize: '0.8em',
        marginBottom: '10%',

        
      }

      const buttonStyle = {
        backgroundImage: `url(${waxButton})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        height: '9em',
        width: '9em',
        backgroundColor: '#fbf6f200',
        border: 'none'

      }

      const checkformstyle = {
        color: 'whitesmoke',
        textAlign: 'center',
        margin: '5px'
      }

      const titleStyle = {
        fontSize: '2.5em',
        color: 'red',
        textAlign: 'center',
        display: 'block',
        fontFamily: 'Shadows Into Light'
        
      }

      const notTitleStyle = {
        fontSize: '2.5em',
        color: 'yellow',
        textAlign: 'center',
        display: 'none'
        
      }

      const crowButton = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${crow})`,
        backgroundSize: 'contain',
        color: 'red',
        backgroundColor: '#ffffff00',
        border: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        cursor: 'pointer'

      }

      const cursor = {
         cursor: 'grabbing'
      }

      const crowButtonStyle = {
        visibility: 'hidden',
        width: '100%',
        height: '100%'
      }


        


    


   return (

     <div>
      <Row>
        <br />
        <br />   

      <Col md = {1}></Col>
          <Col md={8} sm={12}>
          <Table responsive style={table}  striped bordered hover variant="dark">
  <thead>
    <tr>
      <th style = {cursor}  onClick={() => this.sortBy('placement')} > <span style={lighttext}>Click to sort &#8594;</span> <br />#  </th>
      <th  style = {cursor}  onClick={() => this.sortBy('name')} >Player Name</th>
      <th style = {cursor}   onClick={() => this.sortBy('wins')} >Final Record</th>
      <th style = {cursor}   onClick={() => this.sortBy('army')} >Army</th>
      <th  style = {cursor}  onClick={() => this.sortBy('VP')} >VP - DP</th>
      <th>Edit</th>
    </tr>
  </thead>

  
    
   
   {this.state.players.length === 0 ? (
     <span>Please Enter Tournament Date/Name <br />  then fill out the form below to add players</span>
   ) :
   null}
   <tbody>

    
  
    {/* <tr style={table}>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
</tbody>
{this.state.players.map((person, index) => {

console.log(person)

return <tr><td>{`${person.placement}`}</td><td>{`${person.name}`}</td><td>{`${person.wins} - ${person.losses} - ${person.draws}`}</td><td>{`${person.army}`}</td><td>{`${person.VP} - ${person.PD}`}</td><td><Button id={index} onClick={e => this.handlePlayerDelete(e)} variant="danger">Delete</Button></td></tr>

})}

</Table>;
</Col>
<Col md = {2}> <br />
        <br /> <button onClick={this.handleDBSend} style = {crowButton }><img style={crowButtonStyle} src={crow}></img></button></Col>
</Row>
<Row>
     
    
      <Col style = {this.state.toggleVis ? scroll : {visibility : 'hidden'}} md={{ span: 8, offset: 2 }} sm={12}>
      <div style={{visibility: 'hidden'}}>Title</div>
      <div  style =  {this.state.toggleVis ? titleStyle : notTitleStyle}>{this.state.tournamentName}</div>
      <InputGroup style={{maxWidth: '800px'}} >
      <Form.Control onChange={this.tournamentNameSet}  style = {{visibility: this.state.toggleVis ? 'hidden' : 'visible'}} 
      placeholder="Event Name"
      aria-label="Tournament Name"
      aria-describedby="basic-addon2"
    /><br />
        <Form.Control onChange={this.tournamentMonthSet} as="select" style = {{visibility: this.state.toggleVis ? 'hidden' : 'visible'}} 
        
placeholder="Month"
value = {this.state.tournamentMonth}
    >     
    <option>Month</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
    <option>11</option>
      <option>12</option>
      
      </Form.Control>
      <Form.Control className='datestyle' onChange={this.tournamentDaySet} as="select" style = {{visibility: this.state.toggleVis ? 'hidden' : 'visible'}} 
placeholder="Day"
value = {this.state.tournamentDay}
    >
     <option>Day</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
    <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
      <option>21</option>
      <option>22</option>
      <option>23</option>
      <option>24</option>
      <option>25</option>
      <option>26</option>
      <option>27</option>
      <option>28</option>
      <option>29</option>
      <option>30</option>
      <option>31</option>
  </Form.Control>
    <Form.Control className='datestyle' onChange={this.tournamentYearSet} as="select" style = {{visibility: this.state.toggleVis ? 'hidden' : 'visible'}} 
placeholder="Year" 
value = {this.state.tournamentYear}
    >
          <option>Year</option>
          <option>2018</option>
      <option>2019</option>
      <option>2020</option>
      </Form.Control>
    <InputGroup.Append>
      <Button className='btn-info' onClick={this.toggleVisibility}  style = {{fontSize : '0.7em'}} style = {{visibility: this.state.toggleVis ? 'hidden' : 'visible'}} variant="primary">Add </Button>
    </InputGroup.Append>
  </InputGroup>
      <Form   onSubmit={this.handleSubmit.bind(this)}>
      <Form.Label style={headerS} style={{visibility: 'hidden'}}>New Player:</Form.Label>
  <Form.Row>
  <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>Standing</Form.Label>
      <Form.Control onChange = {this.handleStandingChange} value={this.state.playerStanding} as="select">
      <option>-</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  style={formstyle}as={Col} controlId="formGridText">
      <Form.Label style={headerS}>Player Name</Form.Label>
      <Form.Control onChange= {this.handleNameChange} type="text" value = { this.state.playerName} placeholder="Name" />
    </Form.Group>


  <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>  Wins</Form.Label>
      <Form.Control onChange={this.handleWinChange} value={this.state.playerW} as="select">
      <option>-</option>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      </Form.Control>
    </Form.Group>
    <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>Losses</Form.Label>
      <Form.Control value={this.state.playerL} onChange={this.handleLossChange} as="select">
      <option>-</option>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      </Form.Control>
    </Form.Group>
    <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>Draws</Form.Label>
      <Form.Control value = {this.state.playerD} onChange={this.handleDrawChange}  as="select">
      <option>-</option>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label style={checkformstyle} >Track Seasonal <br />
      stats?</Form.Label>
    <Form.Check style={checkformstyle} aria-label="option 1" />
    </Form.Group>

  </Form.Row>

  <Form.Row>
  <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>Army</Form.Label>
      <Form.Control value={this.state.playerArmyType} onChange={this.handleArmychange} as="select">
      <option>---</option>
      <option>House Stark</option>
      <option>House Lannister</option>
      <option>Free Folk</option>
      <option>Nights Watch</option>
      <option>Neutral</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  style={formstyle}as={Col} controlId="formGridPassword">
      <Form.Label style={headerS}>Total VP</Form.Label>
      <Form.Control onChange={this.handleVPChange} value={this.state.playerVP} type="text" placeholder="VP" />
    </Form.Group>
    <Form.Group  style={formstyle}as={Col} contVProlId="formGridPassword">
      <Form.Label style={headerS}>Total Points Destroyed</Form.Label>
      <Form.Control onChange={this.handlePDChange} value={this.state.playerPD} type="text" placeholder="Points" />
    </Form.Group>
  </Form.Row>

  <Form.Group  id="formGridTextArea">
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text  style={formstyle}>Copy/Paste ASOIAF Builder<br />
                                          List Here: (1st)
    </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control value={this.state.playerArmy1} onPaste={this.handleArmy1} className='army1' as="textarea" aria-label="With textarea" />
  </InputGroup>
  </Form.Group>
  <Form.Group id="formGridTextArea">
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text  style={formstyle}>Copy/Paste ASOIAF Builder<br />
                                          List Here: (2nd)
    </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control value={this.state.playerArmy2} onPaste={this.handleArmy2} className='army2' as="textarea" aria-label="With textarea" />
  </InputGroup>
  </Form.Group>

  <button style={buttonStyle}>
    Add Player
  </button>
</Form>
      </Col>
      </Row>
      </div>


    )}
};


export default ReportForm;