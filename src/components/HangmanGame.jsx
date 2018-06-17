import React from 'react';
import * as coreLogic from '../lib/game';
import Header from './Header';
import '../App.css';
import winnerImg from '../images/winner.png';
import loserImg from '../images/loser.png';

export default function HangmanGame(props) {

  const canKeepGuessing = !coreLogic.gameFinished(props.word, props.guesses) && !coreLogic.wrongGuessLimit(props.word, props.guesses)
  const winner = coreLogic.isWinner(props.word, props.guesses)
  if (canKeepGuessing) {
    return (<div>
      <Header/>
      <h1>{coreLogic.showGuess(props.word, props.guesses)}&nbsp;= A Random Word</h1>
      <h4>Wrong Guesses:{coreLogic.wrongGuessCount(props.word, props.guesses)}<br/>
        <small>6 * is Game Over</small>
      </h4>
      <hr/>
      <h2>You've guessed:{props.guesses}</h2>
      <hr/>
      <h3>the word is not <i>{coreLogic.randomWord()}</i>
      </h3>
    </div>)
  } else if (winner) {
    return (<div>
      <Header/>
      <h1>You win!</h1>
      <img src={winnerImg} alt="meaningfullTxt"/>
    </div>)
  } else {
    return (<div>
      <Header/>
      <h2>Game over..</h2>
      <img src={loserImg} alt="meaningfullTxt"/>
    </div>)
  }
}
