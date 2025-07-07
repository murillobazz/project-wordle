import React from 'react';

function GuessInput({ onSubmit, disabled }) {
  const [guess, setGuess] = React.useState('');


  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      onSubmit(event);
      setGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="\w{5}" maxLength={5} value={guess} disabled={disabled} onChange={(event) => setGuess(event.target.value.toUpperCase())} required/>
    </form>
  );
}

export default GuessInput;
