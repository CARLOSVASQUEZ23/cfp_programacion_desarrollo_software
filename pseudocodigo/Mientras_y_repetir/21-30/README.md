
<h2>Ejercicio 21 </h2>
<h3>Contador Ascendente</h3>
<pre>
    <code>
        Algoritmo contados_ascendente
            Definir cantidad Como Entero;
            cantidad <- 0;
            Mientras (cantidad < 10) Hacer
                cantidad <- cantidad +1
                Escribir cantidad
            Fin Mientras
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 22</h2>
<h3>Contador Descendente</h3>
<pre>
    <code>
        Algoritmo contador_descendente
            Definir cantidad Como Entero
            cantidad <- 11
            Mientras (cantidad > 0) Hacer
                cantidad <- cantidad -1
                Escribir cantidad 
            FinMientras
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 23</h2>
<h3>Suma de Números Positivos</h3>
<pre>
    <code>
        Algoritmo suma_de_numeros_positivos
            Definir cantidad, segunda Como Entero
            Escribir "Ingresa número"
            leer cantidad
            Repetir
                Escribir "Ingresa nuevamente un número"
                Leer segunda 
                Escribir "La suma total fue de: " cantidad
                cantidad <- segunda + cantidad
            Hasta Que segunda < 0
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 24</h2>
<h3>Adivina el Número</h3>
<pre>
    <code>
        Algoritmo adivina_el_numero
            Definir cantidad, cualquiera Como Entero
            cualquiera <- azar(100)
            Escribir  cualquiera
            Repetir
                Escribir "Adivina el número"
                leer cantidad
            Hasta Que cantidad = cualquiera
            Escribir "Has adivinado el número"
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 25</h2>
<h3>Validación de Contraseña</h3>
<pre>
    <code>
        Algoritmo validacion_contrasena
            Definir contra, segunda  Como Caracter
            contra = 'hola'
            Repetir
                escribir "Introduce la contraseña"
                Leer segunda
            Hasta Que segunda = contra
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 26</h2>
<h3>Número Positivo</h3>
<pre>
    <code>
        Algoritmo Numero_positivo
            Definir num Como Entero
            Repetir
                Escribir "Ingresa nuevamente un número"
                Leer num
            Hasta Que num > 0
            Escribir "Numero incorrecto " num " Es positivo"
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 27</h2>
<h3>Suma de Números Pares</h3>
<pre>
    <code>
        Algoritmo suma_de_numeros_pares
            Definir cantidad ,segunda Como Entero
            Escribir "Ingresa un número"
            Leer cantidad 
            Repetir
                si cantidad % 2 = 0 Entonces
                    escribir "Ingresa un número"
                    Leer segunda
                    cantidad <- segunda + cantidad
                    Escribir cantidad
                FinSi
            Hasta Que cantidad % 2 = 1
            Escribir "solo sumare números pares"
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 28</h2>
<h3>Adivina el Número (Repetir Hasta Acertar)</h3>
<pre>
    <code>
        Algoritmo Adivina_el_número
            Definir cantidad , contador, adivinar Como Entero
            adivinar <- azar(50)
            Escribir adivinar
            contador <- 0
            Repetir
                Escribir "Adivina el número"
                Leer cantidad
            Hasta Que cantidad = adivinar
            Escribir "has adivinado el número"
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 29</h2>
<h3>Cálculo de Factorial</h3>
<pre>
    <code>
        Algoritmo calcular_factorial
            Definir numero1, factorial Como Entero
            factorial <- 1
            Repetir
                Escribir "Ingresa un número entero no negativo"
                Leer numero1
            Hasta Que numero1 >= 0
            para i = 1 Hasta  numero1 Con Paso 1 Hacer
                factorial <- factorial * i
            FinPara
            Escribir "El factorial de ", numero1, " es: ", factorial
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 30</h2>
<h3>Validación de Entrada</h3>
<pre>
    <code>
        Algoritmo declarar_variable
            Definir contraseña Como Caracter
            cadena1 <- contraseña
            Repetir
                Escribir "Ingrese una contraseña (debe ser almenos de 8 carácteres)"
                Leer contraseña
            Hasta Que Longitud(contraseña) < 8
            Escribir "La contraseña es válida"
        FinAlgoritmo
    </code>
</pre>
<br>