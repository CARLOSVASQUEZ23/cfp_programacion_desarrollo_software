
let matriz = Array.from(Array(4), () => new Array(4).fill(0));
let m_ordenado = Array.from(Array(4), () => new Array(4).fill(0));
let fila = 0;
let columna = 0;
let op = 0;
let contador = 0;
let contador_correctos = 0;
let existe;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    contador++;
    if (contador <= 15) {
      m_ordenado[i][j] = contador;
    }
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let posicion = 1; posicion <= 15; posicion++) {
  do {
    existe = true;
    let f_aleatoria = aleatorio(0, 3);
    let c_aleatoria = aleatorio(0, 3);
    if (matriz[f_aleatoria][c_aleatoria] === 0) {
      matriz[f_aleatoria][c_aleatoria] = posicion;
      existe = false;
    }
  } while (existe);
}

function jugar() {
  do {
    console.clear();
    console.log('Números en posición correctas: ' + contador_correctos);
    fila = -1;
    columna = -1;

    for (let i = 0; i < 4; i++) {
      let row = '';
      for (let j = 0; j < 4; j++) {
        if (matriz[i][j] === 0) {
          fila = i;
          columna = j;
        }
        row += matriz[i][j] + ' || ';
      }
      console.log(row);
    }

    console.log('\nSeleccione una opción:');
    console.log('10. Salir');
    console.log('8. Arriba');
    console.log('2. Abajo');
    console.log('4. Izquierda');
    console.log('6. Derecha');


    switch (op) {
      case 2:

        if (fila + 1 < 4) {
          matriz[fila][columna] = matriz[fila + 1][columna];
          matriz[fila + 1][columna] = 0;
        }
        break;
      case 4:
 
        if (columna - 1 >= 0) {
          matriz[fila][columna] = matriz[fila][columna - 1];
          matriz[fila][columna - 1] = 0;
        }
        break;
      case 6:

        if (columna + 1 < 4) {
          matriz[fila][columna] = matriz[fila][columna + 1];
          matriz[fila][columna + 1] = 0;
        }
        break;
      case 8:

        if (fila - 1 >= 0) {
          matriz[fila][columna] = matriz[fila - 1][columna];
          matriz[fila - 1][columna] = 0;
        }
        break;
    }

    contador_correctos = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (matriz[i][j] === m_ordenado[i][j]) {
          contador_correctos++;
        }
      }
    }
  } while (contador_correctos < 16 && op !== 10);

  if (contador_correctos === 16) {
    console.clear();
    console.log('Felicidades, ¡Has ganado!');
  } else if (op === 10) {
    console.clear();
    console.log('¡Hasta luego!');
  }
}

jugar();
