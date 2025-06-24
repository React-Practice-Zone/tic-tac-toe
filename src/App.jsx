import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handlePlayerChange = (rowIndex, colIndex) => {
    setActivePlayer((currentlyActivePlayer) =>
      currentlyActivePlayer === "X" ? "O" : "X"
    );

    setGameTurns((previousTurns) => {
      let currentPlayer = "X";

      if (previousTurns.length > 0 && previousTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...previousTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard changePlayer={handlePlayerChange} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
