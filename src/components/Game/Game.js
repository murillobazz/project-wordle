import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';
import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('');
  const [answer, setAnswer] = React.useState(() => {
    // Pick a random word on every pageload.
    return sample(WORDS);
  });
  
  // To make debugging easier, we'll log the solution in the console. 
  console.info({ answer });

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

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setGameResult('');
  }

  return (
    <>
      <GuessResults guessList={guessList}/>
      <GuessInput onSubmit={handleSubmit} disabled={gameResult}/>
      <GameOverBanner handleRestart={handleRestart} result={gameResult} answer={answer} attempts={guessList.length}/>
    </>
  );
}

export default Game;
