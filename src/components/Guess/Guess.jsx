import React from 'react';

function Guess({ label }) {
  if (!label) return (
    <div className="guess">
      <span className="cell">{''}</span>
      <span className="cell">{''}</span>
      <span className="cell">{''}</span>
      <span className="cell">{''}</span>
      <span className="cell">{''}</span>
    </div>
  )

  return (
    <div className="guess">
      <span className="cell">{label[0]}</span>
      <span className="cell">{label[1]}</span>
      <span className="cell">{label[2]}</span>
      <span className="cell">{label[3]}</span>
      <span className="cell">{label[4]}</span>
    </div>
  );
}

export default Guess;
