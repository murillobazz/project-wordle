import React from 'react';

function GameOverBanner({ result, answer, attempts, handleRestart }) {
  return (result && 
    <div className={`${result} banner`}>
      { 
        result === 'happy' ? 
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{attempts > 1 ? `${attempts} guesses` : `${attempts} guess`}</strong>.
        </p> :
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      }
      <div>
        <button className="restart-button" type="button" onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}

export default GameOverBanner;
