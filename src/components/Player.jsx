import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleNameChanging = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={handleNameChanging} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
