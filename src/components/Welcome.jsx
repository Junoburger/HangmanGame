import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'


export default function WelcomePage() {


    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">The Hanged Man</h1>
      </header>
      <h2>Welcome to the hangman game<br/>
        <small>Guess the word or  get hung</small>
      </h2>

      <Link to={'/hangman'} className="button">
        <span>Start Playing! &#8594;</span>
      </Link>

    </div>)

}
