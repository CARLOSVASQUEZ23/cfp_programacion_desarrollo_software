<h2>Ejercicio 41</h2>
<h3>Suma de Elementos</h3>
<pre>
    <code>
        Algoritmo suma_de_elementos
            Definir cantidad, resultado Como entero
            dimension cantidad[5]
            para i = 1 hasta 5 con paso 1 Hacer
                Escribir "Ingresa un número "
                Leer cantidad[i]
                resultado = resultado + cantidad[i]
            FinPara
            Escribir "La suma de los elementos son: " , resultado
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 42</h2>
<h3>Mayor y Menor en un Array</h3>
<pre>
    <code>
        Algoritmo maximo_minimo
            Definir maximo, minimo Como Real
            Definir numeros1 Como Real
            Dimension numeros1[8]
            numeros1[1] = 2.5
            numeros1[2] = 5.4
            numeros1[3] = 4.2
            numeros1[4] = 8.2 
            numeros1[5] =9.9
            numeros1[6] = 15.5
            numeros1[7] = 4.3
            numeros1[8] = 20.1
            maximo <- numeros1[1]
            minimo <- numeros1[1]
            para i = 2 Hasta 8 Con Paso 1 Hacer
                si numeros1[i] > maximo Entonces
                    maximo = numeros1[i]
                    si numeros1[1] < minimo
                        minimo <- numeros1[1]
                    FinSi
                FinSi
            FinPara
            Escribir "El valor maximo es: ", maximo
            Escribir "El valor minimo es: ", minimo
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 43</h2>
<h3>Promedio de Notas</h3>
<pre>
    <code>
        Algoritmo promedio_de_notas
            Definir promedios Como Entero
            Dimension promedios[10]
            promedios[1] = 0
            promedios[2] = 10
            promedios[3] = 9
            promedios[4] = 7
            promedios[5] = 10
            promedios[6] = 8
            promedios[7] = 9
            promedios[8] = 8
            promedios[9] = 10
            promedios[10] = 10
            para i = 1 hasta 10 Con Paso 1 hacer
                suma = suma + promedios[i]
            FinPara
            Escribir "El promedio es: " suma / 10
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 44</h2>
<h3>Contador de Números Pares</h3>
<pre>
    <code>
        Algoritmo Contador_de_numeros_pares
            definir numeros1 Como Entero
            Dimension numeros1[6]
            numeros1[1] = 1
            numeros1[2] = 15
            numeros1[3] = 21
            numeros1[4] = 10
            numeros1[5] = 8
            numeros1[6] = 6
            para i = 1 Hasta 6 Con Paso 1 Hacer
                si numeros1[i] % 2 = 0 Entonces
                    contador = contador +1
                FinSi
            FinPara
            Escribir "hay " contador " números pares"
        FinAlgoritmo
    </code>
</pre>
<br>



<h2>Ejercicio 45</h2>
<h3>Búsqueda de Elemento</h3>
<pre>
    <code>
        Algoritmo busqueda_de_elemento
            definir letras, letraUsuario Como Caracter
            Dimension letras[7]
            letras[1] = "a"
            letras[2] ="n"
            letras[3] ="d"
            letras[4] ="f"
            letras[5] ="t"
            letras[6] ="g"
            letras[7] ="n"
            Escribir "Ingresa una letra: "
            Leer letraUsuario
            para i = 1 Hasta 7 Con Paso 1 Hacer
                si letras[i] = letraUsuario Entonces
                    Escribir "Esta letra si se encuentra en el Arreglo"
                FinSi
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 46</h2>
<h3>Inversión de un Array</h3>
<pre>
    <code>
        Algoritmo Inversion_de_un_array
            Definir numeros1 Como Entero
            Dimension numeros1[10]
            Para i = 10 Hasta 1 Con Paso -1 Hacer
                numeros1[i] = i
                Escribir numeros1[i]
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 47</h2>
<h3> Contador de Ocurrencias</h3>
<pre>
    <code>
        Algoritmo contador_de_ocurrencias
            Definir letras, letraUsuario Como Caracter
            Dimension letras[15]
            letras[1] = "a"
            letras[2] = "s"
            letras[3] = "a"
            letras[4] = "v"
            letras[5] = "y"
            letras[6] = "y"
            letras[7] = "x"
            letras[8] = "d"
            letras[9] = "s"
            letras[10] = "d"
            letras[11] = "s"
            letras[12] = "q"
            letras[13] = "i"
            letras[14] = "i"
            letras[15] = "i"
            Escribir "Ingresa una letra: "
            Leer letraUsuario
            para i = 1 Hasta 15 Con Paso 1 Hacer
                si letras[i] = letraUsuario Entonces
                    contador = contador +1
                FinSi
            FinPara
            Escribir "Esta letra se encuentra: " contador " veces en el Arreglo."
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 48</h2>
<h3>Cálculo de Descuento por Categoría</h3>
<pre>
    <code>
        Algoritmo Cálculo_de_Descuento_por_Categoría
            Definir Precio_producto , categorias Como Caracter
            Dimension categorias[3,2] , Precio_producto[2,3]
            Precio_producto[1,1] = "camisa"
            Precio_producto[1,2] = "100"
            Precio_producto[1,3] = "A"
            Precio_producto[2,1] = "pantalón"
            Precio_producto[2,2] = "85"
            Precio_producto[2,3] = "B"
            categorias[1,1] = "A"
            categorias[1,2] = "10"
            categorias[2,1] = "B"
            categorias[2,2] = "5"
            categorias[3,1] = "C"
            categorias[3,2] = "0"
            Para  f = 1 hasta 2 Con Paso 1 Hacer
                Para c = 1 hasta 3 Con Paso 1 Hacer
                    si precio_producto[f,3] = categorias[c,1] Entonces
                        descuento = ConvertirANumero(precio_producto[f,2]) * ConvertirANumero(categorias[c,2]) / 100
                        Escribir "precio normal: " ConvertirANumero(precio_producto[f,2])
                        Escribir "descuento a aplicar: " descuento "%"
                    FinSi
                FinPara
                Escribir  "Precio de: " precio_producto[f,1] " con descuento es: ", ConvertirANumero(precio_producto[f,2]) - descuento
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 49</h2>
<h3>Ordenamiento de Array</h3>
<pre>
    <code>
        Algoritmo ordenamiento_de_array
            Definir numeros_a Como Entero
            Dimension numeros_a[6]
            numeros_a[1] = 2
            numeros_a[2] = 8
            numeros_a[3] = 6
            numeros_a[4] = 4
            numeros_a[5] = 1
            numeros_a[6] = 3
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
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 50</h2>
<h3>Eliminación de Duplicados</h3>
<pre>
    <code>
        Algoritmo eliminacion_de_duplicados
            Definir numeros_a, nuevo_numero_a Como Entero
            Dimension numeros_a[12]
            Dimension nuevo_numero_a[12]
            numeros_a[1] = 5
            numeros_a[2] = 5
            numeros_a[3] = 10
            numeros_a[4] = 8
            numeros_a[5] = 8
            numeros_a[6] = 9
            numeros_a[7] = 7
            numeros_a[8] = 4
            numeros_a[9] = 1
            numeros_a[10] = 3
            numeros_a[11] = 2
            numeros_a[12] = 6
            existe = Falso
            ultima_p = 1
            para i = 1 hasta 12 con paso 1 Hacer
                para p = 1 hasta 12 con paso 1 Hacer
                    si nuevo_numero_a[p] = numeros_a[i] Entonces
                        existe = Verdadero
                        p = 12
                    sino
                        existe <- Falso
                    FinSi
                FinPara
                si existe = Falso Entonces
                    Escribir numeros_a[i]
                    nuevo_numero_a[ultima_p] = numeros_a[i]
                    ultima_p = ultima_p + 1
                FinSi
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>