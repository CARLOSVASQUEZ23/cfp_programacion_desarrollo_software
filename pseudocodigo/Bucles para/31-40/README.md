<h2>Ejercicio 31</h2>
<h3>Suma de Números</h3>
<pre>
    <code>
    Algoritmo suma_de_numero
        definir i Como Entero
        para i = 1 hasta 10 con paso 1 Hacer
            resultado = resultado +1
        FinPara
        Escribir resultado
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 32</h2>
<h3>Tabla de Multiplicar</h3>
<pre>
    <code>
    Algoritmo tabla_de_multiplicar
        Definir num Como Entero
        Escribir "Ingrese un número"
        leer num
        para nueva = 0  hasta 10 Con Paso 1 hacer
            Escribir num 'x' nueva '=' num*nueva
        FinPara
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 33</h2>
<h3>Factorial</h3>
<pre>
    <code>
    Algoritmo calcular_el_factorial
        Definir factor Como Entero
        Escribir "Ingrese un número"
        leer factor
        resultado = 1
        para a = 1 hasta factor con paso 1 Hacer
            resultado = resultado * a
        FinPara
        Escribir resultado
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 34</h2>
<h3>Contador Regresivo</h3>
<pre>
    <code>
        Algoritmo conteo_regresivo
        para a = 10 hasta 1 con paso -1 hacer
            Escribir a
        FinPara
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 35</h2>
<h3>Impresión de Caracteres</h3>
<pre>
    <code>
    Algoritmo veces
        Definir cantidad Como entero
        Escribir "Ingresa una cantidad"
        Leer cantidad
        para letra = 1 hasta cantidad con paso 1 Hacer
            manuel = manuel + "-"
        FinPara
        Escribir manuel
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 36</h2>
<h3>Potencias de 2</h3>
<pre>
    <code>
    Algoritmo potencia_con_mismo
        definir num, resultado Como Entero
        Escribir  "Ingrese un número"
        leer num
        Para potencia = 0 Hasta 10 Con Paso 1 Hacer
            si (potencia = 0)
                resultado = 1
            SiNo
                resultado = resultado +num
                Escribir num, " Potencia ", potencia, " = ", resultado
            FinSi
        FinPara
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 37</h2>
<h3>Suma de Números Pares</h3>
<pre>
    <code>
    Algoritmo suma_de_pares
        Para a = 2 hasta 20 Con Paso 2 hacer
            total = total + a
        FinPara
        Escribir total
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 38</h2>
<h3>Contador de Dígitos</h3>
<pre>
    <code>
    Algoritmo imprimir_patron_ascendente
        Definir linea Como caracter
        Definir num Como entero
        Escribir "Ingrese un número"
        Leer num
        para i = 1 hasta num Con Paso 1 Hacer
            linea = Concatenar(linea, ConvertirATexto(i))
            linea = Concatenar(linea, ",")
            Escribir linea
        FinPara
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 39</h2>
<h3>Secuencia Fibonacci</h3>
<pre>
    <code>
    Algoritmo sin_titulo
        definir anterior,actual, resultado Como Entero
        resultado = 0
        Para i = 0 hasta 10 Con Paso 1 Hacer
            Escribir actual
            si i = 0 Entonces
                actual = 1
                anterior = 0
            sino
                resultado = actual + anterior
                anterior = actual
                actual = resultado
            FinSi
        FinPara
    FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 40</h2>
<h3>Patrón Numérico</h3>
<pre>
    <code>
    Algoritmo contador_de_digitos
        Definir cantidad Como Entero
        Escribir "Ingresa un número"
        Leer cantidad
        text = ConvertirATexto(cantidad)
        digitos = Longitud(text)
        suma = 0
        Para i = 1 hasta digitos Con Paso 1 Hacer
            suma = suma +1
        FinPara
        Escribir suma
    FinAlgoritmo
    </code>
</pre>
<br>