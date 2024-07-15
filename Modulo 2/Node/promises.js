const {readFile} = require('node:fs/promises');


//aqui hago que una sola promesa se cumpla.
/* promises.readFile('texto.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.error(`Error reading file: ${err}`);
    });
 */



//aqui hago que varias promesas se cumplan. Y en este caso los coloco en un array.

/*Promise.all([
    promises.readFile('text.txt', 'utf8'),
    promises.readFile('texto.txt', 'utf8'),
    promises.readFile('muchoTexto.txt', 'utf8')
]).then()(([file1, file2, file3]) => {
    console.log(file1);
    console.log(file2);
    console.log(file3);
}).catch((err) => {
    console.error(`Error reading files: ${err}`);
})*/


//WAIT es una forma de volver Asincronico a sincronico o con orden.

async function promesas (){
    let data3 = await readFile('muchoTexto.txt', 'utf8')
    console.log(data3);
    console.log('-------');
    let data2 = readFile('text.txt', 'utf8')
    console.log(data2);
    console.log('----9090');
    let data = await readFile('texto.txt', 'utf8')
    console.log(data);
    console.log('----1010');
}

promesas();


