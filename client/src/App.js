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
// import About from "./components/pages/About"
// import Contact from "./components/pages/Contact"
// import Article from "./components/pages/Articles"
// import Projects from "./components/pages/Projects"
import Home from "./components/pages/Home"
import Intro from './components/pages/Intro'
// import ClickyGame from './components/pages/clickygame'
// import QuizQuestion from './components/pages/QuizQuestion'
// import Name from './components/pages/nameprompt'
// import Main from "./components/pages/Main";
// import Randomtables from "./components/pages/randomtables";
// import Footer from './components/Footer';
// import VideoTest from './components/pages/videotest'

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
        {/* <Footer /> */}

               <Route exact path ="/" component={Intro} />
               <Route exact path ="/home" component={Home} />
                  {/* <Route path="/about" component={About} />
                  <Route exact path="/contact" exact component={Contact} />
                  <Route exact path="/articles" component={Article} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/friendfinder" component={QuizQuestion} />
                  <Route exact path='/name' component={Name}/> 
                  <Route exact path="/clickygame" component={ClickyGame} />
                  <Route exact path='/NYTsearch' component={Main} />
                  <Route exact path='/randomtables' component={Randomtables} />
                  <Route exact path='/videotest' component={VideoTest} /> */}
             <Footer />
             </div>      
    </Router>

    );
  }
}

export default App;
