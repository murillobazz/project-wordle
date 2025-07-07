import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import ResultBanner from '../ResultBanner/';
import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('');

  const checkWin = (letters) => {
    return letters.every((item) => item.status === 'correct');
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) return;

    const currentGuess = event.target[0].value;
    
    const answers = checkGuess(currentGuess, answer);

    const newGuess = {
      letters: answers,
      id: crypto.randomUUID(),
    }

    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList);

    if (checkWin(newGuess.letters)) {
      setGameResult('happy');
      return;
    }

    if (guessList.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameResult('sad');
      return;
    };
  }

  return (
    <>
      <GuessResults guessList={guessList}/>
      <GuessInput onSubmit={handleSubmit} disabled={gameResult}/>
      <ResultBanner result={gameResult} answer={answer} attempts={guessList.length}/>
    </>
  );
}

export default Game;
