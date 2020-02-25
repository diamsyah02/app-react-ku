import React from 'react';
import logo from './logo.svg';
import './App.css';

import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Education from './components/Education';
import Skill from './components/Skill';
import Portofolio from './components/Portofolio';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <div className="all">
        <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo" width="60"/>
            Diamsyah.com
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav><Link to={'/'} className="nav-link"> Home </Link></Nav>
              <Nav><Link to={'/profile'} className="nav-link">Profile</Link></Nav>
              <Nav><Link to={'/education'} className="nav-link">Education</Link></Nav>
              <Nav><Link to={'/skill'} className="nav-link">Skill</Link></Nav>
              <Nav><Link to={'/portofolio'} className="nav-link">Portofolio</Link></Nav>
              <Nav><Link to={'/experience'} className="nav-link">Experience</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br/><br/><br/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/education' component={Education} />
            <Route path='/skill' component={Skill} />
            <Route path='/portofolio' component={Portofolio} />
            <Route path='/experience' component={Experience} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
