import React, { useState } from 'react';
import Cell from './Cell'
import Result from './Result';
import './Table.css';

const Table = () => {
    const [turn, setTurn] = useState('O');
    const [cells, setCells] = useState(Array(9).fill(''));

    const restartGame = () => {
        setTurn('O' ? 'X' : 'O');
        setCells(Array(9).fill(''));
    }

    const cellFormat = (id) => {
        return <Cell id={id} cells={cells} setCells={setCells} turn={turn} setTurn={setTurn} />
    }

    return (
        <div className="container">
            <div>Turn: {turn} </div>
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
            <div>Result: <Result cells={cells} /></div>
            <button onClick={() => restartGame()}>Play Again</button>
        </div>
    );
}

export default Table;