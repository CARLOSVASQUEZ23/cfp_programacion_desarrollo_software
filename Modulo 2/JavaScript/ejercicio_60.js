let sudoku = []

function imprimirSudoku() {
  for (let i = 0; i < 9; i++) {
    let fila = '';
    for (let j = 0; j < 9; j++) {
      fila += sudoku[i][j] + ' ';
      if (j === 2 || j === 5) {
        fila += '| ';
      }
    }
    console.log(fila);
    if (i === 2 || i === 5) {
      console.log('---------------------');
    }
  }
}

function verificarExistencia(num, fila, columna) {
  for (let i = 0; i < 9; i++) {
    if (sudoku[fila][i] === num || sudoku[i][columna] === num) {
      return true;
    }
  }
  let inicioFila = Math.floor(fila / 3) * 3;
  let inicioColumna = Math.floor(columna / 3) * 3;
  for (let i = inicioFila; i < inicioFila + 3; i++) {
    for (let j = inicioColumna; j < inicioColumna + 3; j++) {
      if (sudoku[i][j] === num) {
        return true;
      }
    }
  }
  return false;
}

function llenarSudoku() {
  for (let f = 0; f < 9; f++) {
    for (let c = 0; c < 9; c++) {
      if (sudoku[f][c] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (!verificarExistencia(num, f, c)) {
            sudoku[f][c] = num;
            if (llenarSudoku()) {
              return true;
            }
            sudoku[f][c] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

if (llenarSudoku()) {
  imprimirSudoku();
} else {
  console.log('No se encontró solución para el Sudoku');
}
