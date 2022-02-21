import React from 'react';

const Cell = ({ id, turn, setTurn, cells, setCells }) => {

    const handleClick = ( id ) => {
        let squares = [...cells];
        if (squares[id] !== ''){
            return;
        }
        
        if (turn === 'X') {
            squares[id] = ('X');
            setTurn('O');
            console.log('o');
        } else {
            squares[id] = ('O');
            setTurn('X');
            console.log('x');
        }

        console.log(squares);
        setCells(squares);
    };
        return (
            <td className="cell" onClick={() => handleClick(id)}>{cells[id]}</td>
        );
}

export default Cell;