import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/player";
import Log from "./components/Log";
function App() {
  const[activePlayer,setActivePlayer]=useState('X')
  const[gameTurns,setGameTurns]=useState([])
  function handleSelectBox(rowIndex,colIndex){
    setActivePlayer((currentActivePlayer)=>currentActivePlayer==='X'?'O':'X')
    setGameTurns((prevTurns)=>{
      let currentPlayer='X';
      if(prevTurns.length>0&&prevTurns[0].player==="X"){
        currentPlayer='O'
      
      }
      const newTurns=[{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns,]
      return newTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player isActive={activePlayer==='X'} name='player1' symbol='X'/>
         <Player isActive={activePlayer==='O'} name='player2' symbol='O'/>
        </ol>
        <GameBoard onSelectBox={handleSelectBox} turns={gameTurns} />
      </div>
      <ol id="log">
      <Log turns={gameTurns}/>  
      </ol>
    </main>
  );
}

export default App;
