import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/' component={Home} />
      </Switch>
    );
  }
}

export default App;
