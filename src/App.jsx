import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/player";
function App() {
  const[activePlayer,setActivePlayer]=useState('X')
  function handleSelectBox(){
    setActivePlayer((currentActivePlayer)=>currentActivePlayer==='X'?'O':'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player name='player1' symbol='X'/>
         <Player name='player2' symbol='O'/>
        </ol>
        <GameBoard onSelectBox={handleSelectBox} playerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
