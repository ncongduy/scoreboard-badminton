import React, { useState } from "react";
import "./App.css";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const reset = () => {
    setHomeScore(0);
    setAwayScore(0);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th className="home">Tiimi 1</th>
            <th className="away">Tiimi 2</th>
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

      <button onClick={reset}>Tyhjätä</button>
    </div>
  );
}

export default App;
