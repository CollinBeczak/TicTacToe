import React from 'react';

const Cell = ({ id, turn, setTurn, cells, setCells, results }) => {
    const handleClick = ( id ) => {
        if (results !== '') {
            return;
        }
        let squares = [...cells];
        if (squares[id] !== ''){
            return;
        }
        
        if (turn === 'X') {
            squares[id] = ('X');
            setTurn('O');
            console.log('O');
        } else {
            squares[id] = ('O');
            setTurn('X');
            console.log('X');
        }

        console.log(squares);
        setCells(squares);
    };
        return (
            <td className="cell" onClick={() => handleClick(id)}>{cells[id]}</td>
        );
}

export default Cell;