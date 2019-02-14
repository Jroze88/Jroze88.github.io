import React, { Component } from 'react';
import './app.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavTabs from './NavTabs';
import ReportForm from './contact';
import Home from './Home'


class App extends Component {




  render() {

    return (

      <Router>
      <div>
      <NavTabs />
      <Route exact path="/asoiaf" exact component={ReportForm} />
      <Route exact path ="/" component={Home} />

      </div>      
     </Router>

    );
  }
}

export default App
