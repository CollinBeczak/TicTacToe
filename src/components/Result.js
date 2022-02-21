const Result = ({ cells }) => {
    const winningNumbers = ([0, 1, 2] || 
    [0, 1, 2] || 
    [3, 4, 5] || 
    [6, 7, 8] || 
    [0, 3, 6] || 
    [1, 4, 7] || 
    [2, 5, 8] || 
    [0, 4, 8] || 
    [2, 4, 6])

        console.log(cells);
        if (cells[winningNumbers] === ['X', 'X', 'X']) {
            console.log('kjdfahsdhfjkdsahlk')
            return 'X';
        } else if (cells[winningNumbers] === ['O', 'O', 'O']) {
            return 'O';
        } else {
            return 'N/A';
        }
}

export default Result;