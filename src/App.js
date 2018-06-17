import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import WelcomeContainer from './components/WelcomeContainer'
import HangmanGameContainer from './components/HangmanGameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={WelcomeContainer} />
        <Route exact path="/hangman" component={HangmanGameContainer} />
      </div>
    );
  }
}
export default App;
