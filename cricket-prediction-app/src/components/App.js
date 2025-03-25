import React from "react";
import TeamInput from "./components/TeamInput";

function App() {
  const handlePrediction = (team1, team2) => {
    console.log(`Predicting match between ${team1} and ${team2}`);
  };

  return (
    <div>
      <h1>Cricket Prediction App</h1>
      <TeamInput onSubmit={handlePrediction} />
    </div>
  );
}

export default App;
