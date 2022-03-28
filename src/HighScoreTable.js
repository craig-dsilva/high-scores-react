import React from "react";
import PlayerScore from "./PlayerScore";

import "./HighScoreTable.css";

const HighScoreTable = (props) => {
  return (
    <div className="high-score-table">
      <h3>High Scores: {props.countryName}</h3>
      <ul className="lists">
        {props.countryScores
          .sort(props.order ? (a, b) => a.s - b.s : (a, b) => b.s - a.s) // Checks the state in the props and sorts the list accordingly
          .map((player, index) => {
            return <PlayerScore name={player.n} score={player.s} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default HighScoreTable;
