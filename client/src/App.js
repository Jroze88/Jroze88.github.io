import React, { Component } from 'react'
import './App.css';

import NavTabs from './components/NavTabs'
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Article from "./components/pages/Articles"
import Projects from "./components/pages/Projects"
import Home from "./components/pages/Home"
import ClickyGame from './components/pages/clickygame'
import QuizQuestion from './components/pages/QuizQuestion'
import Name from './components/pages/nameprompt'
import Main from "./components/pages/Main";
import Randomtables from "./components/pages/randomtables";

       /* <Route exact path="/friendquiz" component={QuizQuestion} /> */

class App extends Component {




  render() {
    return (
      <Router>
      <div>
        <NavTabs />
        <Route exact path ="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/contact" exact component={Contact} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/friendfinder" component={QuizQuestion} />
        <Route exact path='/name' component={Name}/> 
        <Route exact path="/clickygame" component={ClickyGame} />
        <Route exact path='/NYTsearch' component={Main} />
        <Route exact path='/randomtables' component={Randomtables} />
      </div>
    </Router>


  );
  }
}

export default App;
