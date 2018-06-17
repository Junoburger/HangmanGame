import {randomWord} from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
export const CLEAR_THINGS = 'CLEAR_THINGS'


export const newGame = (word, guesses) => {
  const newRandWord = randomWord()
  return {
    type: NEW_GAME,
    payload: {
      word: newRandWord,
      guesses: []
    }
  }
}
export const makeGuess = (guesses) => {
  return {type: MAKE_GUESS, payload: guesses}
}
