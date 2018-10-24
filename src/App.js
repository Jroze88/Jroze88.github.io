import React, { Component } from 'react';
import './App.css';

import NavTabs from './components/NavTabs'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Article from "./components/pages/Articles"
import Projects from "./components/pages/Projects"

class App extends Component {




  render() {
    return (
      <Router>
      <div>
        <NavTabs />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/articles" component={Article} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>


  );
  }
}

export default App;
