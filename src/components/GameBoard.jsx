import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectBox,turns}) {
  let gameBoard=initialGameBoard;
  for(const turn of turns){
    const{square,player}=turn;
    console.log(square);
    const{row,col}=square;
    
    gameBoard[row][col]=player;
   
  }
    
  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((cell, cellIndex) => <button key={cellIndex} onClick={()=>onSelectBox(rowIndex,cellIndex)}>{cell}</button>)}
        </ol>
    </li>)}
  </ol>;
}
