import React, { useState } from "react";



export default function GameBoard({ onSelectBox, gameBoard }) {
  

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <button
                key={cellIndex}
                onClick={() => onSelectBox(rowIndex, cellIndex)}
                disabled={cell !== null}
              >
                {cell}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
