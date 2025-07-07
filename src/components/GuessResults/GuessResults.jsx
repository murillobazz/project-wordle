import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList }) {
  const emptyGuesses = range((NUM_OF_GUESSES_ALLOWED - guessList?.length));

  return (
    <div>
      <div>
        {guessList?.length > 0 && guessList.map((guess) => (
          <Guess letters={guess.letters} key={guess.id} />
        ))}
      </div>
      <div>
         {emptyGuesses.map((_, index) => (
          <Guess letters={null} key={index} />
        ))}
      </div>
    </div>
  );
}

export default GuessResults;
