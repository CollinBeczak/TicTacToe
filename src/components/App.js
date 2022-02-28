import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Table.css";

const winningNumbers = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [turn, setTurn] = useState("O");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [results, setResults] = useState("");

  const handleClick = (id) => {
    //if game is over, this prevents inadvertant cell clicks
    if (results !== "") {
      return;
    }

    let squares = [...cells];
    if (squares[id] !== "") {
      return;
    }

    if (turn === "X") {
      squares[id] = "X";
      setTurn("O");
      localStorage.setItem("turn", "O");
    } else {
      squares[id] = "O";
      setTurn("X");
      localStorage.setItem("turn", "X");
    }

    localStorage.setItem("cells", squares);
    setCells(squares);
  };

  const restartGame = () => {
    if (turn === "X") {
      setTurn("O");
      localStorage.setItem("turn", "O");
    } else {
      setTurn("X");
      localStorage.setItem("turn", "X");
    }
    setResults("");
    setCells(Array(9).fill(""));
    localStorage.removeItem("cells");
  };

  useEffect(() => {
    if (cells.find((c) => c === "") !== "") {
      setResults("Results: Tie");
    }
    for (let i = 0; i < winningNumbers.length; i++) {
      const [a, b, c] = winningNumbers[i];
      if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
        setResults(`Results: ${cells[a]}`);
        break;
      }
    }
  }, [cells]);

  useEffect(() => {
    const storedCells = localStorage.getItem("cells");

    if (storedCells) {
      setCells(storedCells.split(","));
      setTurn(localStorage.getItem("turn"));
    }
  }, []);

  return (
    <div className="container">
      <span className="turnShow">Turn: {turn}!</span>
      <table className="table">
        <tbody>
          {[0, 1, 2].map((n) => (
            <tr key={n}>
              {[3 * n + 0, 3 * n + 1, 3 * n + 2].map((id, index) => (
                <Cell key={id} onClick={() => handleClick(id)}>
                  {cells[id]}
                </Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>{results}</div>
      <button
        className={results !== "" ? "green" : "red"}
        onClick={() => restartGame()}
      >
        {" "}
        {results !== "" ? "Play Again" : "Reset"}
      </button>
    </div>
  );
};

export default App;
