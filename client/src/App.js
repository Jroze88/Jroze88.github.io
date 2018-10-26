import React, { Component } from 'react'
import './App.css';

import NavTabs from './components/NavTabs'
import { BrowserRouter as Router, Route } from "react-router-dom"
// import NavTabs from "./components/NavTabs";
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Article from "./components/pages/Articles"
import Projects from "./components/pages/Projects"
import Home from "./components/pages/Home"

class App extends Component {




  render() {
    return (
      <Router>
      <div>
        <NavTabs />
        <Route exact path ="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>


  );
  }
}

export default App;
