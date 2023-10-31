var sudokuGrid = new Array(9);
for (var i = 0; i < 9; i++) {
    sudokuGrid[i] = new Array(9);
}

function loadSudokuData() {
    for (var i = 0; i < 9; i++) {
        var rowData = array_number[i].split(' ');
        for (var j = 0; j < 9; j++) {
            sudokuGrid[i][j] = parseInt(rowData[j]);
        }
    }
}

function displaySudokuTable() {
    var tableHTML = '<table border="1" style="border-collapse: collapse; border: 2px solid black;">';

    for (var i = 0; i < 9; i++) {
        tableHTML += '<tr>';
        for (var j = 0; j < 9; j++) {
            var extraStyle = '';

            if (j % 3 === 2 && j < 8) {
                extraStyle += 'border-right: 2px solid black;';
            }

            if (i % 3 === 2 && i < 8) {
                extraStyle += 'border-bottom: 2px solid black;';
            }

            if (i % 3 === 2 && i < 8 && j % 3 === 2 && j < 8) {
                extraStyle += 'border-right: 2px solid black; border-bottom: 2px solid black;';
            }

            tableHTML += '<td style="padding: 15px; ' + extraStyle + '">' + sudokuGrid[i][j] + '</td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    document.getElementById('tableContainer').innerHTML = tableHTML;
}

loadSudokuData();
displaySudokuTable();
