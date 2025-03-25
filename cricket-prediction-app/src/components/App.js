import React, { useState } from "react";
import TeamInput from "./components/TeamInput";
import PredictionResult from "./components/PredictionResult";

function App() {
  const [prediction, setPrediction] = useState(null);

  const handlePrediction = (team1, team2) => {
    // Simulated prediction logic (Replace this with backend API call)
    const winner = Math.random() > 0.5 ? team1 : team2;
    const confidence = (Math.random() * 50 + 50).toFixed(2); // Random confidence 50-100%

    setPrediction({ winner, confidence });
  };

  const resetPrediction = () => {
    setPrediction(null);
  };

  return (
    <div>
      <h1>Cricket Prediction App</h1>
      {prediction ? (
        <PredictionResult
          winner={prediction.winner}
          confidence={prediction.confidence}
          onReset={resetPrediction}
        />
      ) : (
        <TeamInput onSubmit={handlePrediction} />
      )}
    </div>
  );
}

export default App;
