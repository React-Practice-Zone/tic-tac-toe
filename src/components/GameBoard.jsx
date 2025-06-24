const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ changePlayer, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // * Updating object state in an immutable way
  // * As per React's best practices, we should not mutate the state directly.
  // * Instead, we create a new copy of the state and update that copy.
  /* 
    const handleSelectSquare = (rowIndex, colIndex) => {
      setGameBoard((previousBoard) => {
        const updatedBoard = [
          ...previousBoard.map((innerArray) => [...innerArray]),
        ];
        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
        return updatedBoard;
      });

      changePlayer();
    };
  */

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex} className="game-cell">
                <button
                  onClick={() => changePlayer(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
