import React, {Component} from 'react'

export class Input extends Component {

  handleClick = (event) => {
    if (this.props.guesses.includes(event.target.value)) {
      return this.event.value
    } else {
      return this.props.makeGuess(event.target.value.toLowerCase())
    }
  }
  render() {
    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

    return (<div className="containerAlph">
      {alphabet.map((letter, index) => <button className="AlphaBet" key={index} onClick={this.handleClick} value={letter}>{letter}</button>)}
    </div>);
  }

}
