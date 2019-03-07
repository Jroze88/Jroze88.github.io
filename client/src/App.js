import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavTabs from './NavTabs';
import ReportForm from './tournamentform';
import Home from './Home';
import ClickyGame from './clickygame'
import Contact from "./contact"
import Projects from "./projects"
import Intro from './Intro'
// import CV from './cs'
// import Skilltree from './skilltree'
import starfallBG from './starfallbg'
import TournamentReport from './tournamentreport'
import test from './test'
import Footer from './Footer'




class App extends Component {




  render() {

    return (

      <Router>
      <div className='main'>
      <NavTabs />
        

               {/* 
                  <Route exact path='/name' component={Name}/> 

                  <Route exact path ='/friendfinder' component={QuizQuestion} />
                   */}
                  <Route exact path="/asoiaf" exact component={ReportForm} />
                  <Route exact path ="/Home" component={Home} />
                  {/* <Route exact path ='/cv' component = {CV} />
                  <Route exact path ='/skilltree' component = {Skilltree} /> */}
                  <Route exact path ="/" component={Intro} />
                  <Route exact path ="/report" component={TournamentReport} />
                  <Route exact path="/contact" exact component={Contact} />
                  <Route exact path="/projects" component={Projects} />
                   <Route exact path="/clickygame" component={ClickyGame} /> 
                  <Route exact path = '/starfallbg' component={starfallBG} />
                  <Route exact path = '/test' component={test} />
                  
        
             </div>      
     </Router>
    );
  }
}

export default App
