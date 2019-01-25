import React, { Component } from 'react'
import './App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import NavTabs from './components/NavTabs'
import Footer from './components/Footer'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Contact from "./components/pages/contact"
// import Article from "./components/pages/Articles"
import Projects from "./components/pages/projects"
import Home from "./components/pages/Home"
import Intro from './components/pages/Intro'
import ClickyGame from './components/pages/otherpages/clickygame'
import QuizQuestion from './components/pages/otherpages/QuizQuestion'
import Name from './components/pages/otherpages/nameprompt'
import CV from './components/pages/cs'
import Skilltree from './components/pages/skilltree'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


class App extends Component {
  render() {

    const style = {
      body : {
        
      }
    }


    return (

 
      <Router>
      <div>
      <NavTabs />
        

               <Route exact path ="/" component={Intro} />
               <Route exact path ="/home" component={Home} />
                  <Route exact path="/contact" exact component={Contact} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path='/name' component={Name}/> 
                  <Route exact path="/clickygame" component={ClickyGame} />
                  <Route exact path ='/friendfinder' component={QuizQuestion} />
                  <Route exact path ='/cv' component = {CV} />
                  <Route exact path ='/skilltree' component = {Skilltree} />
                  <Footer />
                  
             </div>      
    </Router>

    );
  }
}

export default App;
