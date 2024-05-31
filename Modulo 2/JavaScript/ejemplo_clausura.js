//Ejemplo de clausura

let taller = function(nombre_taller){
    return nombre_alumno => "El alumno " + nombre_alumno + " Se ha inscrito al taller de " + nombre_taller
}

let alumnos_programacion = taller("Progrmación")
let alumnos_soldadura = taller("Soldadura")


console.log(alumnos_programacion("Maria"));
console.log(alumnos_soldadura("Rigoberta"));
console.log(alumnos_soldadura("Rudy"));
