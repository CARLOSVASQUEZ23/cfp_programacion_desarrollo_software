let matriz3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matriz3x3 = matriz3x3.reduce((a,b) => a.concat(b)).reduce((a,b) => a+b);

console.log(matriz3x3);
    