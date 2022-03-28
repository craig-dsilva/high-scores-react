import React, { useState } from "react";

import HighScoreTable from "./HighScoreTable";
import HighScoreGlobalTable from "./HighScoreGlobalTable";

import scores from "./scores";

import "./App.css";

function App() {
  const [ascending, setAscending] = useState(false); // State for checking if button is clicked

  // Changes the state if the button is clicked
  const changeOrder = () => {
    setAscending(!ascending);
  };

  return (
    <div className="app">
      <HighScoreGlobalTable scores={scores} />{" "}
      {/* Renders all the player scores in descending order */}
      <h1>High Scores per Country</h1>
      <button onClick={changeOrder}>Order</button>{" "}
      {/* Button to change the order */}
      {/* Loops through each country and creates a highscore tables for them */}
      {scores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country, index) => {
          return (
            <HighScoreTable
              countryName={country.name}
              countryScores={country.scores}
              order={ascending}
              key={index}
            />
          );
        })}
    </div>
  );
}

export default App;
