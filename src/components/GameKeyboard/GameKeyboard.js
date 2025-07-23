import React from 'react';

function GameKeyboard({keys}) {
  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-row">
        {keys && keys.filter((key) => key.row === 'first').map((key) => (
          <div className={`keyboard-key key-${key.row} ${key.status}`} key={key.letter}>
            {key.letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        {keys && keys.filter((key) => key.row === 'second').map((key) => (
          <div className={`keyboard-key key-${key.row} ${key.status}`} key={key.letter}>
            {key.letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        {keys && keys.filter((key) => key.row === 'third').map((key) => (
          <div className={`keyboard-key key-${key.row} ${key.status}`} key={key.letter}>
            {key.letter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameKeyboard;
