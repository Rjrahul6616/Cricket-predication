import React, { useState } from "react";

const TeamInput = ({ onSubmit }) => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  const handleSubmit = () => {
    if (team1 && team2) {
      onSubmit(team1, team2);
    }
  };

  return (
    <div>
      <h2>Enter Teams</h2>
      <input type="text" placeholder="Team 1" onChange={(e) => setTeam1(e.target.value)} />
      <input type="text" placeholder="Team 2" onChange={(e) => setTeam2(e.target.value)} />
      <button onClick={handleSubmit}>Predict</button>
    </div>
  );
};

export default TeamInput;
