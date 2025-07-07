import React from 'react';

function GuessResults({ guessList }) {
  return (
    <div>
      {guessList?.length > 0 && guessList.map((guess) => (
        <li key={guess.id}>{ guess.label }</li>
      ))}
    </div>
  );
}

export default GuessResults;
