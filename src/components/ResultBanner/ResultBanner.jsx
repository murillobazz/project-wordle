import React from 'react';

function ResultBanner({ result, answer, attempts }) {
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
    </div>
  );
}

export default ResultBanner;
