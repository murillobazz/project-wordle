import React from 'react';

function Guess({ letters }) {
  if (!letters) return (
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
      {letters?.length > 0 && letters.map((item, index) => (
        <span key={index} className={`cell ${item.status}`}>{item.letter}</span>
      ))}
    </div>
  );
}

export default Guess;
