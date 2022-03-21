import React from "react";

import "./PlayerScore.css";

const PlayerScore = (props) => {
  return (
    <li className="list">
      <p className="name">{props.name}</p>
      <p className="score">{props.score}</p>
    </li>
  );
};

export default PlayerScore;
