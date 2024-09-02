/* interface Animal{
    nombre: string;
    sonido: ()=> void;
}

interface Perro extends Animal{
}

const miPerro: Perro ={
    nombre: "Giancarlos",
    sonido: () => "WuaW"
}

console.log(`El perro ${miPerro.nombre} hace ${miPerro.sonido}`); */

const miPerro ={
    nombre: "Giancarlos",
    sonido: () => "WuaW"
}

console.log(`Mi perro bastardo ${miPerro.nombre} hace ${miPerro.sonido()}`);