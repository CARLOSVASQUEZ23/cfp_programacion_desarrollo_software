class Animal {
    nombre: string;
    sonido: string;

    constructor(nombre:string, sonido: string){
        this.nombre = nombre
        this.sonido = sonido
    }
}

class perro extends Animal {
    constructor(nombre:string){
        super(nombre,"guau")
    }

    bulla(){
        return `El nombre de mi mascota es: ${this.nombre} y el hace ${this.sonido}`
    }
}

const mascota = new perro('Rudy')

console.log(mascota.bulla())