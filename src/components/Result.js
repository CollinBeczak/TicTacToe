import React from 'react';

const Result = ({ cells, results, setResults }) => {
    const winningNumbers = [ [0, 1, 2], 
                             [3, 4, 5],
                             [6, 7, 8], 
                             [0, 3, 6], 
                             [1, 4, 7], 
                             [2, 5, 8],
                             [0, 4, 8],
                             [2, 4, 6] ];
console.log('tojhslkjhdl');
    for (let i = 0; i < winningNumbers.length; i++) {
        const [a, b, c] = winningNumbers[i];
        console.log(a);
        if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
            setResults(`Results: ${cells[a]}`); 
            break;
        } else {
            setResults('Results: N/A');
        }
    }

        return (
            <div>
            {results}
            </div>
        );
}


export default Result;