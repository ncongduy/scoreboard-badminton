import React, { useState } from "react";
import "./App.css";
import Member from "./components/Member";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [team1Member1, setTeam1Member1] = useState("");
  const [team1Member2, setTeam1Member2] = useState("");
  const [team2Member1, setTeam2Member1] = useState("");
  const [team2Member2, setTeam2Member2] = useState("");

  const reset = () => {
    setHomeScore(0);
    setAwayScore(0);
    setTeam1Member1("");
    setTeam1Member2("");
    setTeam2Member1("");
    setTeam2Member2("");
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>
              <Member
                team="team1"
                member={team1Member1}
                onChange={(value) => setTeam1Member1(value)}
              />

              <Member
                team="team1"
                member={team1Member2}
                onChange={(value) => setTeam1Member2(value)}
              />
            </th>
            <th>
              <Member
                team="team2"
                member={team2Member1}
                onChange={(value) => setTeam2Member1(value)}
              />

              <Member
                team="team2"
                member={team2Member2}
                onChange={(value) => setTeam2Member2(value)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={() => setHomeScore((prev) => prev + 1)}>
              {homeScore}
            </td>
            <td onClick={() => setAwayScore((prev) => prev + 1)}>
              {awayScore}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td onClick={() => setHomeScore((prev) => prev - 1)}>-</td>
            <td onClick={() => setAwayScore((prev) => prev - 1)}>-</td>
          </tr>
        </tfoot>
      </table>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
