# Redux Hangman Homework
The homework assignment is to create a hangman game using React and Redux.
The core logic for the game is provided as a library
[here](https://gist.github.com/arienkock/d18ec2cb1246c6602651aa549c90f70b).


## Setup
1. Create a React app
1. Add the required dependencies for Redux to the project.
1. Create a store in the file `src/store.js` like you\ve learned, which requires an empty reducer which should be in `src/reducers/index.js`.
1. Add the `Provider` component to your `src/index.js`.
1. Add the game lib to the project in a file `src/lib/game.js`. _Use the link in the first paragraph of this document._

## Requirements
These are the requirements for your application on which you will be scored.

1. The Redux state should contain:
    1. the word being guessed
    1. all the letters guessed so far.

    // - _Using React _local state_ for either of the previous two pieces of data (instead of Redux state)
    //  **will cause points to be deducted.** One of the main goals of the homework is to test your understanding of Redux._

1. When the webapp is loaded and the path is `/`, it should show an initial page with a welcome message and a link "Start playing!".
 The link links to `/hangman`. Clicking it should change the route to `/hangman`, where the rest of the game is played.
 This should be done using react-router, the page should not reload.

1. When a game starts, a random word should be selected using the game library function `randomWord`.
 This will be the word the player has to guess.

1. There should be a module in the file `src/actions/game.js` which exports two action creators.
One should be called `newGame`, which creates an action of type `NEW_GAME`.
 The other action creator should be called `makeGuess`, and its actions should have the type `MAKE_GUESS`.

 1. The reducers should not modify the state. The functions should create copies of objects and arrays before changing them.
They should be pure functions.

1. The letters of the word should initially be displayed as _underscores_ and as the player makes correct guesses, the letters should appear.
 You can use the function `showGuess` from the game library.

1. The user must be able to guess one letter at a time by dispatching the `MAKE_GUESS` action. Which UI elements you use to do this is up to you.
    > Hint: you could use a button per letter, or a text input element.

1. The number of incorrect guesses should be displayed on the page.
 Use the `wrongGuessCount` function in the library.

1. There should be a button to create a new game. When you click it,
 an action of type `NEW_GAME` should be dispatched.
  The result should be that a new random word is selected and the guesses are reset/emptied.

1. When the user has won or lost, there should be a message on the page saying so.
 _Use the functions in the provided library._
