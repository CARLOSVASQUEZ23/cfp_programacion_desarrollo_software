
//const fs = require('node:fs');

/*const stats = fs.statSync('texto.txt')
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats.size);*/


// let data = fs.readFileSync('texto.txt', 'utf-8');
// console.log(data);


/*let data3 = fs.readFile('muchoTexto.txt', 'utf-8',
    ()=>{
        console.log('Archivo leido');
    });

let data2 = fs.readFile('text.txt', 'utf-8',
    (err, data) => {
        if (err) {
            console.error(`Este es el error 322: ${error}`);
            return;
        }
    console.log(data);
});


let data = fs.readFile('texto.txt', 'utf-8',
    (err, data) => {
        if (err) {
            console.error(`Este es el error 322: ${error}`);
            return;
        }
    console.log(data);
});*/


/*const data2 = fs.readFileSync('text.txt','utf-8');
console.log(data2);
const data3 = fs.readFileSync('muchoTexto.txt','utf-8');
console.log(data3);
const data = fs.readFileSync('texto.txt','utf-8');
console.log(data);*/


const promises = require('node:fs/promises')
promises.readdir('C:/Users/carlosvasquez/Pictures')
    .then((files) =>{
        files.forEach((file) => {
            console.log(file);
        });
    }).catch((err) => {
        if(err) {
            console.error(`Error reading directory: ${err}`);
        }
    });