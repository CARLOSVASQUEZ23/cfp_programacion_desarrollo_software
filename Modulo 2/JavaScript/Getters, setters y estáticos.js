class Temperature {
    constructor(celsius) {
    this.celsius = celsius;
    }
    
    get fahrenheit() {
    return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
    }
    }
    
    let temp = new Temperature(22);
    console.log(temp.fahrenheit);
    // → 71.6
    temp.fahrenheit = 86;
    console.log(temp.celsius);
    // → 30


    /*class lentes{
        constructor(tipoDeAro, color, precio){
            this.tipoDeAro = tipoDeAro 
            this.color = color
            this.precio = precio
        }
    
        get glass(){
            return "El tipo de aro es: " + this.tipoDeAro
        }
    
        set glass(valor){
            this.tipoDeAro = valor
        }
    
        get glassColor(){
            return "El tipo de color es: " + this.color
        }
    
        set glassColor(valor){
            this.color = valor
        }
    
        get glassPrecio(){
            return "El precio es: " + this.precio
        }
    
        set glassPrecio(valor){
            this.precio = valor
        }
    
        static fromlentes(tipoDeAro, color, precio){
            return new lentes((tipoDeAro, color, precio))
        }
    }
    
    let compra = new lentes("Plano", "Rojo", 750)
    console.log(compra.glass);
    console.log(compra.glassColor);
    console.log(compra.glassPrecio);*/


    /*class adorno{
    constructor(flor, cantidad, direccion){
        this.flor = flor
        this.cantidad = cantidad
        this.direccion = direccion
    }

    get tipoFlor(){
        return "Tipo de flor: " + this.flor
    }

    get cantidadFlor(){
        return "Cantidad de flore en el ramo: " + this.cantidad
    }

    get direccionFlor(){
        return "Lugar de entrega: " + this.direccion
    }

    set tipoFlor(valor){
        this.flor = valor
    }

    set cantidadFlor(valor){
        this.cantidad = valor
    }

    set direccionFlor(valor){
        this.direccion = valor
    }

    static fromadorno(tipo, cantidad, direccion){
        return new adorno((tipo, cantidad, direccion))
    }
}


let pedido = new adorno("Rosas", 12, "zona 2 3-33 San Juan Sac")
console.log(pedido.tipoFlor);
console.log(pedido.tipoFlor);
console.log(pedido.direccionFlor); */




