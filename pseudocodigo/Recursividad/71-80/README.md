<h2>Ejercicio 71</h2>
<h3>Factoria</h3>
<pre>
    <code>
        Funcion factorial(contador, num, resultado Por Referencia)	
            si resultado = 0 Entonces
                resultado = num
            FinSi
            si  num > 0 Y contador < num Entonces
                contador = contador + 1
                resultado = resultado * contador
                factorial(contador, num, resultado)
            FinSi
        FinFuncion
        Algoritmo Factoriales
            factorial(0, 5, resultado)
            Escribir resultado
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 72</h2>
<h3>Fibonacci</h3>
<pre>
    <code>
        Funcion fibonacci (limite, anterior, actual)
            si limite > 0 y actual <= limite Entonces
                suma = anterior + actual
                anterior = actual
                actual = suma 
                Escribir anterior
                fibonacci(limite,anterior,actual)
            FinSi
        FinFuncion
        Algoritmo ejemplo_fibonacci
            fibonacci(8,0,1)
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 73</h2>
<h3> Suma de elementos de un arreglo</h3>
<pre>
    <code>
        Funcion suma_elementos(x,suma,matriz)
            si x > 0 Entonces
                suma = suma + matriz[x]
                x = x - 1
                suma_elementos(x,suma,matriz)
            SiNo
                Escribir suma
            FinSi
        FinFuncion
        Algoritmo Suma_de_elemntos 
            Definir matriz Como Entero
            Dimension matriz[5]
            matriz[1] = 5
            matriz[2] = 10
            matriz[3] = 15
            matriz[4] = 20
            matriz[5] = 25
            suma_elementos(5,0,matriz)
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 74</h2>
<h3>Potencia</h3>
<pre>
    <code>
        Funcion numer(base,potencia, resultado)
            si potencia > 0 Entonces
                resultado = resultado * base
                potencia = potencia -1
                numer(base,potencia,resultado)
            SiNo
                Escribir "El resultado de la potencia es: " resultado
            FinSi
        FinFuncion
        Algoritmo potencias
            numer(5,3,1)
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 75</h2>
<h3>Máximo común divisor (MCD)</h3>
<pre>
    <code>
        Funcion MCD(num1,num2,resultado,num)
            si num1 > num y num2 > num Entonces
                si num1 % num == 0 y num2 % num == 0 Entonces
                    num1 = num1 / num
                    num2 = num2 / num
                    resultado = resultado * num
                    num = 2
                SiNo
                    num = num + 1
                FinSi
                MCD(num1,num2,resultado,num)
            sino
                Escribir "El resultado es: ", num1, " - ", num2, "| MCD es: " resultado 
            FinSi
        FinFuncion
        Algoritmo maximo_comun_divisor
            MCD(20,30, 1, 2)
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 76</h2>
<h3>Impresión inversa de una cadena</h3>
<pre>
    <code>
        Funcion inverso(palabra,limite)
            si limite >= 1 Entonces
                Escribir Subcadena(palabra,limite,limite) Sin Saltar
                limite = limite -1
                inverso(palabra,limite)
            FinSi
        FinFuncion
        Algoritmo cadena_inversa
            inverso("casa", Longitud("casa"))
            Escribir " "
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 77</h2>
<h3>Cálculo de la suma de dígitos</h3>
<pre>
    <code>
        Funcion digitos(letras,posicion,suma)
            si posicion > 0 Entonces
                almacenar = Subcadena(letras,posicion,posicion)
                suma = suma + ConvertirANumero(almacenar)
                posicion = posicion -1
                digitos(letras,posicion,suma)
            SiNo
                Escribir suma
            FinSi
        FinFuncion
        Algoritmo suma_de_digitos 
            num = 999
            conv = ConvertirATexto(num)
            digitos(conv,Longitud(conv),0)
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 78</h2>
<h3>Torres de Hanoi</h3>
<pre>
    <code>
        Funcion resolverTorres(n, origen, destino, auxiliar)
            Si n = 1 Entonces
                Escribir "Mover disco de la torre ", origen, " a la torre ", destino
            Sino
                resolverTorres(n-1, origen, auxiliar, destino)
                Escribir "Mover disco de la torre ", origen, " a la torre ", destino
                resolverTorres(n-1, auxiliar, destino, origen)
            FinSi
        FinFuncion
        Algoritmo principal
            Definir discos, origen, destino, auxiliar como Entero
            Escribir "Ingrese el número de discos:"
            Leer discos
            origen <- 1
            destino <- 3
            auxiliar <- 2
            resolverTorres(discos, origen, destino, auxiliar)
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 79</h2>
<h3>Búsqueda binaria</h3>
<pre>
    <code>
        Funcion busqueda_binaria(arreglo, num_usuario, posicion_actual,total_arreglo)
            si posicion_actual > total_arreglo Entonces
                Escribir "No se encontró el número"
            SiNo
                medio = redon((posicion_actual + total_arreglo) / 2)
                si num_usuario == arreglo[medio] Entonces
                    Escribir "El número se encontró"
                SiNo
                    si arreglo[medio] < num_usuario Entonces
                        posicion_actual = medio +1
                    SiNo
                        total_arreglo = medio -1
                    FinSi
                    busqueda_binaria(arreglo, num_usuario, posicion_actual,total_arreglo)
                FinSi
            FinSi
        FinFuncion
        Algoritmo busqueda
            Definir arreglo Como Entero
            Dimension arreglo[10]
            arreglo[1] = 11
            arreglo[2] = 24
            arreglo[3] = 32
            arreglo[4] = 42
            arreglo[5] = 55
            arreglo[6] = 62
            arreglo[7] = 74
            arreglo[8] = 86
            arreglo[9] = 92
            arreglo[10] = 99
            busqueda_binaria(arreglo, 62, 1, 10)
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 80</h2>
<h3>Generación de todas las permutaciones</h3>
<pre>
    <code>
        Funcion generarPermutaciones(lista, inicio, final)
                Si inicio = final Entonces
                    Escribir lista
                Sino
                    Para i <- inicio hasta final Hacer
                        intercambiar(lista[inicio], lista[i])
                        generarPermutaciones(lista, inicio + 1, final)
                        intercambiar(lista[inicio], lista[i])
                    FinPara
                FinSi
        FinFuncion
        SubProceso intercambiar(a, b)
            Temporal <- a
            a <- b
            b <- Temporal
        FinSubProceso
        Algoritmo principal
            Definir lista como Caracter
            Definir tamano como Entero
            Escribir "Ingrese los elementos de la lista (separados por espacio):"
            Leer lista
            tamano <- Longitud(lista)
            generarPermutaciones(lista, 0, tamano - 1)
        FinAlgoritmo
    </code>
</pre>
<br>