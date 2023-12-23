import React from "react";

export default function Log({ turns }) {
  return (
    <>
      {turns.length > 0
        ? turns.map((turn, index) => (
            <li
              key={index}
            >{`${turn.player} played on ${turn.square.row}, ${turn.square.col}`}</li>
          ))
        : null}
    </>
  );
}
