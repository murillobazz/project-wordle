import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';
import GameKeyboard from '../GameKeyboard';
import { sample, keyboardKeys } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('');
  const [keys, setKeys] = React.useState(() => {
    return keyboardKeys;
  })
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
  
    // Creates deep copy to avoid mutating the state directly with the spread operator.
    let updatedKeys = keys.map(key => ({ ...key }));

    // Check for the used letters and assign new status to them
    for (let i = 0; i < answers.length; i++) {
      for (let j = 0; j < updatedKeys.length; j++) {
        if (updatedKeys[j].letter === answers[i].letter) {
          updatedKeys[j].status = answers[i].status;
        }
      }
    }

    // When using deep copy, it's ok to set an entirely new array to an array state, since the original one was not mutated previously.
    setKeys(updatedKeys);
    

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
      <GameKeyboard keys={keys} />
    </>
  );
}

export default Game;
