import React, { useState } from 'react';
import Cell from './Cell'
import Result from './Result';

const Table = () => {
    const [turn, setTurn] = useState('O');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [results, setResults] = useState('');

    const restartGame = () => {
        if (turn === 'X'){
            setTurn('O')
        } else {
            setTurn('X')
        }
        setResults('');
        setCells(Array(9).fill(''));
    }

    const cellFormat = (id) => {
        return <Cell id={id} cells={cells} results={results} setCells={setCells} turn={turn} setTurn={setTurn} />
    }

    const buttonText = () => {
        if (results !== '') {
            return "Play Again";
        } else {
            return "Reset";
        }
    }

    const buttonColor = () => {
        if (results !== '') {
            return "green";
        } else {
            return "red";
        }
    }

    return (
        <div className="container">
            <span className="turnShow">Turn: {turn}!</span>
            <table className="table">
                <tbody>
                    <tr>
                        {cellFormat(0)}
                        {cellFormat(1)}
                        {cellFormat(2)}
                    </tr>
                    <tr>
                        {cellFormat(3)}
                        {cellFormat(4)}
                        {cellFormat(5)}
                    </tr>
                    <tr>
                        {cellFormat(6)}
                        {cellFormat(7)} 
                        {cellFormat(8)}
                    </tr>
                </tbody>
            </table>
            <Result cells={cells} results={results} setResults={setResults}></Result>
            <button className={buttonColor()} onClick={() => restartGame()}>{buttonText()}</button>
        </div>
    );
}

export default Table;