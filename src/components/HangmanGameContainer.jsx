import React, {Component} from 'react';
import HangmanGame from './HangmanGame';
import '../App.css';
import {connect} from 'react-redux';
import {Input} from './Input';
import {newGame, makeGuess} from '../actions/game';

class HangmanGameContainer extends Component {
  componentDidMount() {
    this.props.newGame()
  }
  render() {
    return (<div>
      <HangmanGame word={this.props.hangman.word} guesses={this.props.hangman.guesses}/>
      <h2>Pick A Letter</h2>
      <Input makeGuess={this.props.makeGuess} guesses={this.props.hangman.guesses}/>
      <br/>
      <button onClick={this.props.newGame} className="button">
        <span>Play Again! &#8594;</span>
      </button>
    </div>)
  }
}
const mapStateToProps = (state) => {return {hangman: state.hangman}}

export default connect(mapStateToProps, {newGame, makeGuess})(HangmanGameContainer)
