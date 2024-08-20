// Analisa diagrama y posible solución:
// Dado un array de tamaño  de n-1 con el rango 1 a n números, la tarea es encontrar el numero faltante de n números.



function array_completo(array) {
    
    const ultimo = [];
    for (let i = Math.min(...array); i <= Math.max(...array); i++) {
        !array.includes(i) && ultimo.push(i)
    }

    return ultimo
}

console.log(array_completo([-10, 6, 3, 5, -10, 2]));









