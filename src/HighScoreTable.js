import React from "react";
import PlayerScore from "./PlayerScore";

import "./HighScoreTable.css";

const HighScoreTable = (props) => {
  return (
    <div className="high-score-table">
      <h3>High Scores: {props.countryName}</h3>
      <ul className="lists">
        {props.countryScores.map((player, index) => {
          return <PlayerScore name={player.n} score={player.s} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default HighScoreTable;
