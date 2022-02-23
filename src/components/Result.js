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
    for (let i = 0; i < winningNumbers.length; i++) {
        const [a, b, c] = winningNumbers[i];

            if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
                setResults(`Result: ${cells[a]}`); 
                break;
            } else {
                setResults('');
            };
    }

    if (cells[0] && cells[1] && cells[2] && cells[3] && cells[4]
        && cells[5] && cells[6] && cells[7] && cells[8] !== '') {
            setResults('Results: Tie');
        }

        return (
            <div>
                {results}
            </div>
        );
}


export default Result;