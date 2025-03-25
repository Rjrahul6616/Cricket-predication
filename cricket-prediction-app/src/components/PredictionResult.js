import React from "react";

const PredictionResult = ({ winner, confidence, onReset }) => {
  return (
    <div>
      <h2>Prediction Result</h2>
      <p><strong>Predicted Winner:</strong> {winner}</p>
      <p><strong>Confidence:</strong> {confidence}%</p>
      <button onClick={onReset}>Try Again</button>
    </div>
  );
};

export default PredictionResult;
