import HighScoreTable from "./HighScoreTable";
import scores from "./scores";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>High Scores per Country</h1>
      {scores.map((country, index) => {
        return (
          <HighScoreTable
            countryName={country.name}
            countryScores={country.scores}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
