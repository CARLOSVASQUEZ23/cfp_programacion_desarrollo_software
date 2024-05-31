let matriz = []

matriz[0][2] = 5;
matriz[0][9] = 7;
matriz[1][2] = 0;

function imprimirMatriz() {
  for (let i = 0; i < 10; i++) {
    let fila = '';
    for (let j = 0; j < 10; j++) {
      fila += matriz[i][j] + ' | ';
    }
    console.log(fila);
  }
}

function jugar() {
  let op;
  do {
    imprimirMatriz();

  } while (matriz[9][7] !== 5);

  console.log('Felicidades has ganado');
}


jugar();
