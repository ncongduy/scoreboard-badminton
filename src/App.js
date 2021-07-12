import React, { useState } from "react";
import "./App.css";

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
              <label>
                <input
                  type="text"
                  className="team1"
                  value={team1Member1}
                  onChange={(e) => setTeam1Member1(e.target.value)}
                ></input>
              </label>
              <input name="team1" type="radio" value="member1"></input>

              <label>
                <input
                  type="text"
                  className="team1"
                  value={team1Member2}
                  onChange={(e) => setTeam1Member2(e.target.value)}
                ></input>
              </label>
              <input name="team1" type="radio" value="member2"></input>
            </th>
            <th>
              <label>
                <input
                  type="text"
                  className="team2"
                  value={team2Member1}
                  onChange={(e) => setTeam2Member1(e.target.value)}
                ></input>
              </label>
              <input name="team2" type="radio" value="member1"></input>

              <label>
                <input
                  type="text"
                  className="team2"
                  value={team2Member2}
                  onChange={(e) => setTeam2Member2(e.target.value)}
                ></input>
              </label>
              <input name="team2" type="radio" value="member2"></input>
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
