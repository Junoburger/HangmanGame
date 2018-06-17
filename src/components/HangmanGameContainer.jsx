import React, {Component} from 'react';
import {connect} from 'react-redux';
import HangmanGame from './HangmanGame';
import '../App.css';
import {newGame, makeGuess} from '../actions/game';
import {Input} from './Input';

class HangmanGameContainer extends Component {
  componentDidMount() {
    this.props.newGame()
  }
  render() {
    return (<div>
      <HangmanGame word={this.props.reducers.word} guesses={this.props.reducers.guesses}/>
      <h2>Pick A Letter</h2>
      <Input makeGuess={this.props.makeGuess} guesses={this.props.reducers.guesses}/>
      <br/>
      <button onClick={this.props.newGame} className="button">
        <span>Play Again! &#8594;</span>
      </button>
    </div>)
  }
}
const mapStateToProps = (state) => {return {reducers: state.reducers}}

export default connect(mapStateToProps, {newGame, makeGuess})(HangmanGameContainer)
