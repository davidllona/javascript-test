// Function to validate each row in the Sudoku grid
function validateSudokuRows() {
    for (var i = 0; i < sudokuGrid.length; i++) {
        var result = isSudokuGridValid(sudokuGrid[i], i + 1); 
        if (result !== "Line is correct") {
            console.log(result);
        }
    }
}

// Function to validate each column in the Sudoku grid
function validateSudokuColumns() {
    for (var j = 0; j < 9; j++) {
        var column = [];
        for (var i = 0; i < 9; i++) {
            column.push(sudokuGrid[i][j]);
        }
        var result = isSudokuGridValid(column); // Call isSudokuGridValid for each column
        if (result !== "El array bidimensional es válido.") {
            console.log(`Column ${j + 1} incorrect ${column.join(' ')}`);
        }
    }
}

// Function to validate each region in the Sudoku grid
function validateSudokuRegions() {
    for (var r = 0; r < 9; r += 3) {
        for (var c = 0; c < 9; c += 3) {
            var region = [];
            for (var i = r; i < r + 3; i++) {
                for (var j = c; j < c + 3; j++) {
                    region.push(sudokuGrid[i][j]);
                }
            }
            var result = isSudokuGridValid(region);
            if (result !== "El array bidimensional es válido.") {
                console.log(`Region ${Math.floor(r / 3) * 3 + Math.floor(c / 3) + 1} incorrect ${region.join(' ')}`);
            }
        }
    }
}

// Assuming isSudokuGridValid is defined elsewhere

// Call the validation functions
validateSudokuRows();
validateSudokuColumns();
validateSudokuRegions();
