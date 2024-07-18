//Argumento de entrada
console.log(process.argv);

/*console.log(`Hola bienvenidos ${process.argv[2]}`);

//Controlar el proceso y su salida
process.exit(1)

//Podemos controlar eventos del proceso
process.on('exit', () => {
    console.log('El proceso va a terminar');
});*/

//Current working directory
console.log(process.cwd());

//Platform
console.log(process.env.HOSTNAME);