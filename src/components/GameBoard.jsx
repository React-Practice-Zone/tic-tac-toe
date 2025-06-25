export default function GameBoard({ changePlayer, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="game-cell">
                <button
                  onClick={() => changePlayer(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                  className={playerSymbol ? `symbol-${playerSymbol}` : ""}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
