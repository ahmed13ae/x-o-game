import React, { useState } from "react";

export default function Player({ name, symbol,isActive,onChangeName }) {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(name);
  const handleMode = () => {
    // setEditMode(!editMode);//=>schecdule a state update
    setEditMode(editing=>!editing);//=>to get in cosideration the current state

  };
  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  const handleSave = () => {
    setNewName(newName);
    onChangeName(symbol,newName);
    setEditMode(false);
  };
  return (
    <li className={isActive?"active":''}>
      <span className="player">
        {!editMode ? (
          <span className="player-name">{newName}</span>
        ) : (
          <input
            type="text"
            defaultValue={newName}
            required
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      {!editMode ? (
        <button onClick={handleMode}>Edit</button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
    </li>
  );
}
