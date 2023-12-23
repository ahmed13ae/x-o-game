import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combs";
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const[players,setPlayers]=useState({
    'X':'Player1',
    'O':'Player2'

  })
  const[gameTurns,setGameTurns]=useState([])
  let gameBoard = [...initialGameBoard.map(array=>[...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
   
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  let winner;
  for(const comb of WINNING_COMBINATIONS){
    const firstSymbol=gameBoard[comb[0].row][comb[0].col];
    const secondeSymbol=gameBoard[comb[1].row][comb[1].col];
    const thirdSymbol=gameBoard[comb[2].row][comb[2].col];
    if(firstSymbol&&firstSymbol===secondeSymbol&&firstSymbol===thirdSymbol){
        winner=players[firstSymbol];
    }
  }
  const isDraw=gameTurns.length===9&&!winner;
  
  function handleSelectBox(rowIndex,colIndex){
   
   
    setGameTurns((prevTurns)=>{
      let currentPlayer='X';
      if(prevTurns.length>0&&prevTurns[0].player==="X"){
        currentPlayer='O'
      
      }
      const newTurns=[{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns,]
      return newTurns;
    })
  }
  function handleReset(){
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol,newName){
    setPlayers((prevPlayers)=>{
      return {...prevPlayers,[symbol]:newName}
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player isActive={gameTurns.length>0&&gameTurns[0].player==='X'} name={players.X} symbol='X' onChangeName={handlePlayerNameChange}/>
         <Player isActive={gameTurns.length>0&&gameTurns[0].player==='O'} name={players.O} symbol='O' onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner||isDraw)&&<GameOver winner={winner} onReset={handleReset}/>}
        <GameBoard onSelectBox={handleSelectBox} gameBoard={gameBoard}  />
      </div>
      <ol id="log">
      <Log turns={gameTurns}/>  
      </ol>
    </main>
  );
}

export default App;
