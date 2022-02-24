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
        } else {
            squares[id] = ('O');
            setTurn('X');
        }

        setCells(squares);
        console.log(cells);
    };
    
        return (
            <td className="cell" onClick={() => handleClick(id)}>{cells[id]}</td>
        );
}

export default Cell;