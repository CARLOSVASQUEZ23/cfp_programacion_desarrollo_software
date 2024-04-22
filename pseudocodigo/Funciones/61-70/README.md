<h2>Ejercicio 61</h2>
<h3>Suma de dos números</h3>
<pre>
    <code>
    Funcion suma <- pedirnum (x,z)
            suma = x + z
    FinFuncion
    Algoritmo suma_de_dos_numeros
            suma = pedirnum(8,7)
            Escribir "El resultado de la suma es: " suma
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 62</h2>
<h3>Factorial de un número</h3>
<pre>
    <code>
    Funcion resultado <- factorial(num)
        factor <- 1
        para i = 1 Hasta num con paso 1 Hacer
            factor <- factor * i
            resultado = factor
        FinPara
    FinFuncion
    Algoritmo factoriales
        resultado = factorial(5)
        Escribir "El resultado de la factorial es: " resultado
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 63</h2>
<h3>Mayor de tres números</h3>
<pre>
    <code>
    Funcion mayor_de <- numer(a,b,c)
        si a > b y a > c Entonces
            mayor_de = a
        FinSi
        si b > a y b > c Entonces
            mayor_de = b
        FinSi
        si c > a y c > b Entonces
            mayor_de = c
        FinSi
    FinFuncion
    Algoritmo mayor_de_tres_numeros
        mayor_de = numer(10,200,30)
        Escribir "El resultado mayor es: ", mayor_de 
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 64</h2>
<h3>Área de un círculo</h3>
<pre>
    <code>
    Funcion resultado <- num (radio)
        resultado = pi*(radio * radio)
    FinFuncion
    Algoritmo area_de_un_circulo
        resultado = num(5)
        Escribir "El area de circulo es: " resultado
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 65</h2>
<h3>Potencia de un número</h3>
<pre>
    <code>
    Funcion resultado <- potencia(a,b)
        resultado = a
        Para i = 1 Hasta b Hacer
            resultado = resultado * a
        FinPara
    FinFuncion
    Algoritmo potencia_de_un_numero
        resultado = potencia(3,5)
        Escribir resultado
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 66</h2>
<h3>Ordenamiento de una lista</h3>
<pre>
    <code>
    Funcion ordenar_lista(numeros_a)
        para i = 1 Hasta  6 con paso 1 Hacer
            num_menor = numeros_a[i] 
            para p = i+1 Hasta 6 Con Paso 1 Hacer
                si numeros_a[i] > numeros_a[p] Entonces
                    numeros_a[i] = numeros_a[p]
                    numeros_a[p] = num_menor
                    num_menor = numeros_a[i]
                FinSi
            FinPara
            Escribir numeros_a[i]
        FinPara
    FinFuncion
    Algoritmo ordenamiento_de_lista
        Definir numeros_a Como Entero
        Dimension numeros_a[6]
        numeros_a[1] = 2
        numeros_a[2] = 8
        numeros_a[3] = 6
        numeros_a[4] = 4
        numeros_a[5] = 1
        numeros_a[6] = 3
        ordenar_lista(numeros_a)
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 67</h2>
<h3>Promedio de una lista</h3>
<pre>
    <code>
    Funcion resultado <- promedio_lista(promedio)
        para i = 1 hasta 5 Con Paso 1 Hacer
            suma = suma + promedio[i]
        FinPara
        resultado = suma / 5
    FinFuncion
    Algoritmo promedio_de_lista
        Definir promedio Como Entero
        Dimension promedio[5]
        promedio[1] = 7
        promedio[2] = 8
        promedio[3] = 10
        promedio[4] = 9 
        promedio[5] = 5
        Escribir "el promedio de la lista es: ", promedio_lista(promedio)
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 68</h2>
<h3>Inversión de una cadena</h3>
<pre>
    <code>
    Funcion inverso(palabra) 
        nuevo <- Longitud(palabra)
        para i = nuevo Hasta 1 Con Paso -1 Hacer
            Escribir Subcadena(palabra,i,i) Sin Saltar
        FinPara
    FinFuncion
    Algoritmo sin_titulo
        inverso("mami")
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 69</h2>
<h3>Verificación de número primo</h3>
<pre>
    <code>
    Funcion resultado <- primo(num)
        resultado = Verdadero
        para i = 2 Hasta num -1 Con Paso 1 Hacer
            si num % i == 0 Entonces
                resultado = Falso
            FinSi
        FinPara
    FinFuncion
    Algoritmo verificacion_numero_primo
        Escribir primo(4)
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 70</h2>
<h3>Conversión de grados Celsius a Fahrenheit</h3>
<pre>
    <code>
    Funcion resultado <- conversion(grados)
        resultado = grados * (9 / 5 )+ 32
    FinFuncion
    Algoritmo conversion_grados
        Escribir conversion(29) 	
    FinAlgoritmo
    //	°F = °C x (9 ÷ 5 )+ 32
    </code>
</pre>
<br>