import React, { Component } from 'react';
import './app.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavTabs from './NavTabs';
import ReportForm from './contact';
import Home from './Home';
// import Contact from "./pages/contact"
// import Projects from "./pages/projects"
// import Intro from './pages/Intro'
// import CV from './components/pages/cs'
// import Skilltree from './components/pages/skilltree'


class App extends Component {




  render() {

    return (

      <Router>
      <div className='main'>
      <NavTabs />
        

               {/* <Route exact path ="/" component={Intro} />
               
                  <Route exact path="/contact" exact component={Contact} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path='/name' component={Name}/> 
                  <Route exact path="/clickygame" component={ClickyGame} />
                  <Route exact path ='/friendfinder' component={QuizQuestion} />
                  <Route exact path ='/cv' component = {CV} />
                  <Route exact path ='/skilltree' component = {Skilltree} /> */}
                  <Route exact path="/asoiaf" exact component={ReportForm} />
                  <Route exact path ="/" component={Home} />
                  {/* <Footer /> */}
             </div>      
     </Router>
    );
  }
}

export default App
