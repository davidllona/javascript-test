function F31() {
    var incorrectRows = []; 

    for (var i = 0; i < 9; i++) {
        var seen = new Set(); 
        var isIncorrect = false; 

        for (var j = 0; j < 9; j++) {
            var num = sudokuGrid[i][j];

            if (seen.has(num)) {
                isIncorrect = true;
                break; 
            }

            seen.add(num);
        }

        if (isIncorrect) {
            incorrectRows.push(i + 1); 
        }
    }

    var tableHTML = '<table border="1" style="border-collapse: collapse; border: 2px solid black;">';

    for (var i = 0; i < 9; i++) {
        var extraStyle = 'border-right: 2px solid black;'; 
        if (i % 3 === 2) {
            extraStyle += 'border-bottom: 2px solid black;'; 
        }

        tableHTML += '<tr>';
        for (var j = 0; j < 9; j++) {
            tableHTML += '<td style="padding: 5px; ' + extraStyle + '">' + sudokuGrid[i][j] + '</td>'; 
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table';

    if (incorrectRows.length > 0) {
        var errorTableHTML = '<table border="1" style="border-collapse: collapse; border: 2px solid black; margin-top:20px">'; 
        for (var i = 0; i < incorrectRows.length; i++) {
            errorTableHTML += '<tr>';
            errorTableHTML += '<td style="padding: 10px;">Line ' + incorrectRows[i] + ' incorrect</td>';
            errorTableHTML += '<td style="padding: 10px;">' + sudokuGrid[incorrectRows[i] - 1].join('</td><td style="padding: 10px;">') + '</td>'; 
            errorTableHTML += '</tr>';
        }
        errorTableHTML += '</table';

        document.getElementById('tableErrorsContainer').innerHTML += errorTableHTML; 
    }
}

loadSudokuData();
F31();




function F32() {
    var incorrectColumns = []; 

    for (var j = 0; j < 9; j++) {
        var seen = new Set(); 
        var isIncorrect = false; 

        for (var i = 0; i < 9; i++) {
            var num = sudokuGrid[i][j];

            if (seen.has(num)) {
                isIncorrect = true;
                break; 
            }

            seen.add(num);
        }

        if (isIncorrect) {
            incorrectColumns.push(j + 1); 
        }
    }

    var tableHTML = '<table border="1" style="border-collapse: collapse; border: 2px solid black;">';

    for (var i = 0; i < 9; i++) {
        var extraStyle = 'border-right: 2px solid black;';
        if (i % 3 === 2) {
            extraStyle += 'border-bottom: 2px solid black;'; 
        }

        tableHTML += '<tr>';
        for (var j = 0; j < 9; j++) {
            tableHTML += '<td style="padding: 5px; ' + extraStyle + '">' + sudokuGrid[i][j] + '</td>'; 
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table';

    if (incorrectColumns.length > 0) {
        var errorTableHTML = '<table border="1" style="border-collapse: collapse; border: 2px solid black; margin-top: 20px">'; 
        for (var j = 0; j < incorrectColumns.length; j++) {
            errorTableHTML += '<tr>';
            errorTableHTML += '<td style="padding: 10px;">Column ' + incorrectColumns[j] + ' incorrect</td>';
            var columnValues = [];
            for (var i = 0; i < 9; i++) {
                columnValues.push(sudokuGrid[i][incorrectColumns[j] - 1]);
            }
            errorTableHTML += '<td style="padding: 10px;">' + columnValues.join('</td><td style="padding: 10px;">') + '</td>'; 
            errorTableHTML += '</tr>';
        }
        errorTableHTML += '</table';

        document.getElementById('tableErrorsContainer').innerHTML += errorTableHTML; 
    }
}

loadSudokuData();
F32();

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


validateSudokuRegions();
