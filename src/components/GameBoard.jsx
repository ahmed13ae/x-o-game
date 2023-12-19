import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectBox,playerSymbol}) {
    const[gameBoard,setGameBoard]=useState(initialGameBoard)
    function handleBoxClick(rowIndex,cellIndex){     
        setGameBoard((prevGameBoard)=>{
           const newGameBoard=[...prevGameBoard.map(row=>[...row])];
           console.log(playerSymbol);
            newGameBoard[rowIndex][cellIndex]=playerSymbol;
            return newGameBoard;
        })
        onSelectBox();
    }
  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((cell, cellIndex) => <button key={cellIndex} onClick={()=>handleBoxClick(rowIndex,cellIndex)}>{cell}</button>)}
        </ol>
    </li>)}
  </ol>;
}
