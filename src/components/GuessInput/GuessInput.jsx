import React from 'react';

function GuessInput({ onSubmit }) {
  const [guess, setGuess] = React.useState('');


  return (
    <form className="guess-input-wrapper" onSubmit={(event) => onSubmit(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="\w{5}" maxLength={5} value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} required/>
    </form>
  );
}

export default GuessInput;
