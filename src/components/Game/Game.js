import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  
  function handleSubmit(event) {
    event.preventDefault();
    
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) return;
    
    const newGuess = {
      label: event.target[0].value,
      id: crypto.randomUUID(),
    }
    
    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList);
  }

  return (
    <>
      <GuessResults guessList={guessList}/>
      <GuessInput onSubmit={handleSubmit} />
    </>
  );
}

export default Game;
