
function isSudokuGridValid(sudokuGrid) {

    if (Array.isArray(sudokuGrid) && sudokuGrid.length === 9) {
        for (var i = 0; i < 9; i++) {
            var seen = new Set();

            for (var j = 0; j < 9; j++) {
                var num = sudokuGrid[i][j];

                // Verify if the number is an integer between 1 and 9 and hasn't been seen before
                if (Number.isInteger(num) && num >= 1 && num <= 9 && !seen.has(num)) {
                    seen.add(num);
                } else {
                    return false;
                }
            }
        }

        return true;
    } else {
        return false;
    }
}


loadSudokuData();


var result = isSudokuGridValid(sudokuGrid);


console.log(result);