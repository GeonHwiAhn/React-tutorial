import React, { useState } from 'react';
import './TicTapToe.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe = () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] = useState(1);
  const [message, setMessage] = useState('');

  const handleNumberClick = (number) => {
    if (number === nextNumber) {
      if (number === 9) {
        setMessage("모든 숫자를 맞추셨습니다. 축하드립니다!");
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
      setMessage("틀렸습니다. 다시 시도하세요");
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    setNextNumber(1);
    setMessage('');
  };

  return (
    <div className="tic-tap-container">
      <h1>TicTapToe</h1>
      <div className="grid">
        {numbers.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;