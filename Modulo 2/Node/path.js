const path = require('node:path')

// sirve para conocer el separador de los arhivos
console.log(path.sep);


//Unen rutas
let newPath = path.join('C:/Users/carlosvasquez',  'Pictures/silueta.png');
console.log(newPath);


//basename para obtener el nombre del archivo 
let fileName = path.basename(newPath);
console.log(fileName);

//dirname para obtener el nombre del directorio 
let dirName = path.dirname(newPath);
console.log(dirName);

//extname para obtener la extension del archivo
let extName = path.extname(newPath);
console.log(extName);