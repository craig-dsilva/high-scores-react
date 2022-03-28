import React from "react";

import PlayerScore from "./PlayerScore";

const HighScoreGlobalTable = (props) => {
  let globalHighScoreArr = [];

  // Loops through the array from props and pushed all the players' scores to the empty array
  props.scores.forEach((country) => {
    country.scores.forEach((player) => {
      globalHighScoreArr.push(player);
    });
  });

  return (
    <div>
      <h1>Global High Scores</h1>
      <ul>
        {globalHighScoreArr
          .sort((a, b) => b.s - a.s) // Sorts the list in descending order of the players score
          .map((player, index) => {
            return <PlayerScore name={player.n} score={player.s} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default HighScoreGlobalTable;
