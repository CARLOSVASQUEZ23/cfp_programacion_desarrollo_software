class Lavadora{
    constructor(tamanio, capacidad, modelo, marca, tipo){
        this.tamanio = tamanio
        this.capacidad = capacidad
        this.modelo = modelo
        this.marca = marca 
        this.tipo = tipo
    }
    lavar(capacidad){capacidad <= tamanio ? "Se esta lavando la ropa" : "GG lavadora" }
    exprimir() {console.log("Esta exprimiendo");}
    enjuagar() {console.log("Esta enjuagando");}

}

let lavadora = new Lavadora("15 pies", 15, "SAM15", "Samsung", "electrica");
//lavadora.lavar()

console.log(lavadora);



