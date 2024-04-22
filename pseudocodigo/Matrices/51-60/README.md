<h2>Ejercicio 51</h2>
<h3> Suma de Matrices</h3>
<pre>
    <code>
        Algoritmo sudoku_game
            Definir  sudoku, contador Como Entero
            Definir existe Como Logico
            Dimension sudoku[9,9]
            para f = 1 Hasta 9 Con Paso 1 Hacer
                para c = 1 Hasta 9 con paso 1 Hacer
                    si sudoku[f,c] = 0 Entonces
                        existe = Falso
                        para num = 1 Hasta 9 Con Paso 1 Hacer
                            para vc = 1 hasta 9 Con Paso 1 Hacer
                                si sudoku[f,vc] = num Entonces
                                    existe = Verdadero
                                FinSi
                            FinPara
                            para vf = 1 Hasta 9 Con Paso 1 Hacer
                                si sudoku[vf,c] = num entonces
                                    existe = Verdadero
                                Finsi
                            FinPara
                                inicioFila = 1
                            SiNo
                                Si f >= 4 y f <= 6 Entonces
                                    inicioFila = 4
                                SiNo
                                    inicioFila = 7
                                FinSi
                            FinSi
                            si c >= 1 y c <= 3 Entonces
                                inicioColumna = 1
                            SiNo
                                Si c >= 4 y c <= 6 Entonces
                                    inicioColumna = 4
                                SiNo
                                    inicioColumna = 7
                                FinSi
                            FinSi
                            Para i <- inicioFila Hasta inicioFila + 2 Hacer
                                Para j <- inicioColumna Hasta inicioColumna + 2 Hacer
                                    Si sudoku[i, j] = num entonces
                                        existe = Verdadero
                                    FinSi
                                FinPara
                            FinPara
                            Si existe == Falso Entonces
                                sudoku[f, c] = num
                                num = 9
                            SiNo
                                existe = Falso
                            FinSi
                        FinPara
                    FinSi
                FinPara
            FinPara
            para i = 1 Hasta 9 con paso 1 Hacer
                para j = 1 hasta 9 Con Paso 1 Hacer
                    si j <> 3 y j <> 6 Entonces
                        separador = " "
                    SiNo
                        separador = "|"
                    FinSi
                    Escribir sudoku[i,j], separador Sin Saltar
                FinPara
                Escribir " "
                si i = 3 o i = 6 Entonces
                    Escribir "- - -|- - -|- - -"
                FinSi
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 52</h2>
<h3> Promedio por Columna</h3>
<pre>
    <code>
        Algoritmo promedio_por_columna
            Definir grupo1 Como Entero
            Dimension grupo1[3,4]
            grupo1[1,1] = 1
            grupo1[1,2] = 2
            grupo1[1,3] = 3
            grupo1[1,4] = 4
            grupo1[2,1] = 5
            grupo1[2,2] = 6
            grupo1[2,3] = 7
            grupo1[2,4] = 8
            grupo1[3,1] = 9
            grupo1[3,2] = 10
            grupo1[3,3] = 11
            grupo1[3,4] = 12
            Para f = 1 Hasta 4 Con Paso 1 Hacer
                Para c = 1  Hasta 3 Con Paso 1 Hacer
                    promedio = promedio + grupo1[c,f]  
                Fin Para
                Escribir promedio / 3 
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 53</h2>
<h3>Suma de Diagonales</h3>
<pre>
    <code>
        Algoritmo suma_de_diagonales
            Definir matriz Como Entero
            Dimension matriz[5,5]
            matriz[1,1] = 1
            matriz[1,2] = 2
            matriz[1,3] = 3
            matriz[1,4] = 4
            matriz[1,5] = 5
            matriz[2,1] = 6
            matriz[2,2] = 7
            matriz[2,3] = 8
            matriz[2,4] = 9
            matriz[2,5] = 10
            matriz[3,1] = 11
            matriz[3,2] = 12
            matriz[3,3] = 1
            matriz[3,4] = 14
            matriz[3,5] = 15
            matriz[4,1] = 16
            matriz[4,2] = 17
            matriz[4,3] = 18
            matriz[4,4] = 19
            matriz[4,5] = 20
            matriz[5,1] = 21
            matriz[5,2] = 22
            matriz[5,3] = 23
            matriz[5,4] = 24
            matriz[5,5] = 266
            suma = 0
            suma2 = 0
            Para i = 1 Hasta 5 Con Paso 1 Hacer
                suma = suma + matriz[i,i]
                suma2 = suma2 + matriz[i, 6 - i]
            FinPara
            Escribir "La suma del eje primario es: ", suma
            Escribir "La suma del eje secundario es: ", suma2
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 54</h2>
<h3>Mayor Elemento por Fila</h3>
<pre>
    <code>
        Algoritmo  Mayor_Elemento_por_Fila
            Definir array como entero
            Dimension array[3,4]
            array[1,1] = 1
            array[1,2] = 2
            array[1,3] = 3
            array[1,4] = 4
            array[2,1] = 5
            array[2,2] = 6
            array[2,3] = 7
            array[2,4] = 8
            array[3,1] = 9
            array[3,2] = 10
            array[3,3] = 11
            array[3,4] = 12
            para f = 1 Hasta  3 Con Paso 1 Hacer
                Para c = 1 Hasta 4 Con Paso 1 Hacer
                    Escribir " " array[f,c] Sin Saltar
                FinPara
                Escribir " "
            FinPara
            para fila = 1 Hasta 3 con paso 1 Hacer
                maximo = array[fila,1]
                Para columna = 1 Hasta 4 Con Paso 1 Hacer
                    si array[fila, columna] > maximo Entonces
                        maximo = array[fila,columna]
                    FinSi
                FinPara
                Escribir "fila", fila, ":", maximo
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 55</h2>
<h3>Rotación de Matriz</h3>
<pre>
    <code>
        Algoritmo rotacion_de_matriz
            Definir matriz Como Entero
            Dimension matriz[4,4]
            matriz[1,1] = 1
            matriz[1,2] = 2
            matriz[1,3] = 3
            matriz[1,4] = 4
            matriz[2,1] = 5
            matriz[2,2] = 6
            matriz[2,3] = 7
            matriz[2,4] = 8
            matriz[3,1] = 9
            matriz[3,2] = 10
            matriz[3,3] = 11
            matriz[3,4] = 12
            matriz[4,1] = 13
            matriz[4,2] = 14
            matriz[4,3] = 15
            matriz[4,4] = 16
            Para f = 1 Hasta 4 Con Paso 1 Hacer
                Para c = 1  Hasta 4 Con Paso 1 Hacer
                    Escribir matriz[f,c] " " " " Sin Saltar
                FinPara
                Escribir " "
            FinPara
            Escribir ""
            para f = 1 hasta 4 con paso 1 Hacer
                para c = 4 hasta 1 con paso -1 Hacer
                    Escribir matriz[c,f] " " Sin Saltar
                FinPara
                Escribir " "
            FinPara
            Escribir ""
            Para f = 4 Hasta 1 Con Paso -1 Hacer
                para c = 1 hasta 4 Con Paso 1 Hacer
                    Escribir matriz[c,f] " " Sin Saltar
                FinPara
                Escribir ""
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 56</h2>
<h3> Laberinto</h3>
<pre>
    <code>
        Algoritmo laberinto
            //definir 
            Definir camino, op como entero
            Dimension camino[10,10]
            fila = 1
            columna = 1
            //Crear matriz
            Para i = 1 Hasta 10 Con Paso 1 Hacer
                Para j = 1 Hasta 10 Con Paso 1 Hacer
                    camino[i,j] <- 1
                FinPara
            FinPara
            camino[1,1] = 0
            camino[1,2] = 0
            camino[2,2] = 0
            camino[3,2] = 0
            camino[4,2] = 0
            camino[4,3] = 0
            camino[5,3] = 0
            camino[6,3] = 0
            camino[6,2] = 0
            camino[7,3] = 0
            camino[8,2] = 0
            camino[8,3] = 0
            camino[9,3] = 0
            camino[4,4] = 0
            camino[4,5] = 0
            camino[5,5] = 0
            camino[6,5] = 0
            camino[7,5] = 0
            camino[7,6] = 0
            camino[8,6] = 0
            camino[9,6] = 0
            camino[9,5] = 0
            camino[2,6] = 0
            camino[3,7] = 0
            camino[3,8] = 0
            camino[3,9] = 0
            camino[4,8] = 0
            camino[5,8] = 0
            camino[6,8] = 0
            camino[6,7] = 0
            camino[7,7] = 0
            camino[6,9] = 0
            camino[7,9] = 0
            camino[8,9] = 0
            camino[9,9] = 0
            camino[9,10] = 0
            camino[10,10] = 0
            Repetir
                Limpiar Pantalla
                Escribir "c " columna
                Escribir "f " fila
                //Mostrar como laberinto
                Para i = 1 Hasta 10 Con Paso 1 Hacer
                    Para j = 1 Hasta 10 Con Paso 1 Hacer
                        si camino[fila,columna] = 0
                            camino[fila,columna] = 8
                        FinSi
                        Escribir camino[i,j] '  ' Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara
                Escribir 'Escoje una opción:'
                Escribir '1.Arriba'
                Escribir '2.Abajo'
                Escribir '3.Izquierda'
                Escribir '4.Derecha'
                leer op
                Segun op Hacer
                    1:
                        si fila -1 > 0 Y camino[fila-1,columna] = 0
                            camino[fila-1,columna] = 8
                            camino[fila,columna] = 0
                            fila = fila - 1
                        FinSi
                    2:
                        si camino[fila+1,columna] = 0
                            camino[fila+1,columna] = 8
                            camino[fila,columna] = 0
                            fila = fila + 1
                        FinSi
                    3:
                        si columna -1 > 0 y camino[fila,columna-1] = 0
                            camino[fila,columna-1] = 8
                            camino[fila,columna] = 0
                            columna = columna - 1
                        FinSi
                    4:
                        si fila + 1 < 11 Y camino[fila,columna+1] = 0
                            camino[fila,columna+1] = 8
                            camino[fila,columna] = 0
                            columna = columna + 1
                        FinSi
                FinSegun
                //Resultado
            Hasta Que camino[10,10] = 8
            Escribir 'Has ganado'
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 57</h2>
<h3>Buscaminas</h3>
<pre>
    <code>
        Algoritmo busca_minas
            Definir cantidad_minas, contador, posicion, posicion_minas Como Entero
            Definir mapa Como Caracter
            Definir rudynoe Como Logico
            Dimension mapa[10,10], posicion_minas[5]
                //genero un numero
            cantidad_minas = Aleatorio(3,5)
                //Mostrar el mapa de minas
                para fila = 1 Hasta 10 Con Paso 1 Hacer
                    Para columna = 1 hasta 10 Con Paso 1 Hacer
                        mapa[fila,columna] = "0"
                        //Escribir mapa[fila, columna] "  " Sin Saltar
                    FinPara
                    //Escribir ""
                FinPara
                //colocacion de minas con mi rudy lindo uwu
                Para mina = 1 Hasta cantidad_minas Hacer
                    fila_aleatoria = Aleatorio(1,10)
                    columna_aleatoria = Aleatorio(1,10)
                    mapa[fila_aleatoria,columna_aleatoria]  = "7" 
                FinPara
                //Mostrar el mapa de minas
                para fila = 1 Hasta 10 Con Paso 1 Hacer
                    Para columna = 1 hasta 10 Con Paso 1 Hacer
                        Escribir mapa[fila, columna] "  " Sin Saltar
                    FinPara
                    Escribir ""
                FinPara
                Repetir
                    //pedir que ingrese la posicion en el mapa
                    Escribir "¿Qué posición deseas revelar? (rango de 1-100)"
                    Leer posicion
                    contador = 0
                    para fila = 1 Hasta 10 Con Paso 1 Hacer
                        Para columna = 1 hasta 10 Con Paso 1 Hacer
                            contador = contador + 1
                            si contador = posicion Entonces
                                si mapa[fila,columna] = "7" Entonces
                                    rudynoe = Verdadero
                                SiNo
                                    mapa[fila,columna] = " "
                                FinSi
                            FinSi
                        FinPara
                    FinPara
                    //Mostrar el mapa de minas
                    para fila = 1 Hasta 10 Con Paso 1 Hacer
                        Para columna = 1 hasta 10 Con Paso 1 Hacer
                            Escribir mapa[fila, columna] "  " Sin Saltar
                        FinPara
                        Escribir ""
                    FinPara
                Hasta Que rudynoe = Verdadero
                Si rudynoe Entonces
                    Limpiar Pantalla
                    Escribir "boom!"
                FinSi
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 58</h2>
<h3>Laberinto con Obstáculos y Algoritmo de Búsqueda</h3>
<pre>
    <code>
        Algoritmo laberinto_con_obstáculos
            //definir 
            Definir camino, op como entero
            Dimension camino[10,10]
            fila = 1
            columna = 1
            //Crear matriz
            Para i = 1 Hasta 10 Con Paso 1 Hacer
                Para j = 1 Hasta 10 Con Paso 1 Hacer
                    camino[i,j] <- 1
                FinPara
            FinPara
            camino[1,1] = 0
            camino[1,2] = 0
            camino[2,2] = 0
            camino[3,2] = 0
            camino[4,2] = 0
            camino[4,3] = 0
            camino[5,3] = 0
            camino[6,3] = 0
            camino[6,2] = 0
            camino[7,3] = 0
            camino[8,2] = 0
            camino[8,3] = 0
            camino[9,3] = 0
            camino[4,4] = 0
            camino[4,5] = 0
            camino[5,5] = 0
            camino[6,5] = 0
            camino[7,5] = 0
            camino[7,6] = 0
            camino[8,6] = 0
            camino[9,6] = 0
            camino[9,5] = 0
            camino[2,6] = 0
            camino[3,7] = 0
            camino[3,8] = 0
            camino[3,9] = 0
            camino[4,8] = 0
            camino[5,8] = 0
            camino[6,8] = 0
            camino[6,7] = 0
            camino[7,7] = 0
            camino[6,9] = 0
            camino[7,9] = 0
            camino[8,9] = 0
            camino[9,9] = 0
            camino[9,10] = 0
            camino[10,10] = 0
            Repetir
                Limpiar Pantalla
                Escribir "c " columna
                Escribir "f " fila
                //Mostrar como laberinto
                Para i = 1 Hasta 10 Con Paso 1 Hacer
                    Para j = 1 Hasta 10 Con Paso 1 Hacer
                        si camino[fila,columna] = 0
                            camino[fila,columna] = 8
                        FinSi
                        Escribir camino[i,j] '  ' Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara
                Escribir 'Escoje una opción:'
                Escribir '1.Arriba'
                Escribir '2.Abajo'
                Escribir '3.Izquierda'
                Escribir '4.Derecha'
                leer op
                Segun op Hacer
                    1:
                        si fila -1 > 0 Y camino[fila-1,columna] = 0
                            camino[fila-1,columna] = 8
                            camino[fila,columna] = 0
                            fila = fila - 1
                        FinSi
                    2:
                        si camino[fila+1,columna] = 0
                            camino[fila+1,columna] = 8
                            camino[fila,columna] = 0
                            fila = fila + 1
                        FinSi
                    3:
                        si columna -1 > 0 y camino[fila,columna-1] = 0
                            camino[fila,columna-1] = 8
                            camino[fila,columna] = 0
                            columna = columna - 1
                        FinSi
                    4:
                        si fila + 1 < 11 Y camino[fila,columna+1] = 0
                            camino[fila,columna+1] = 8
                            camino[fila,columna] = 0
                            columna = columna + 1
                        FinSi
                FinSegun
                //Resultado
            Hasta Que camino[10,10] = 8
            Escribir 'Has ganado'
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 59</h2>
<h3>Rompecabezas del 15</h3>
<pre>
    <code>
        Algoritmo rompecabezas
            definir tabla, ingreso_usuario, op, tabla_resuelta Como Entero
            Definir existe_numero, completado Como Logico
            Dimension tabla[4,4], tabla_resuelta[4,4]
            contador = 0
            para seg_fila = 1 hasta 4 Con Paso 1 Hacer
                para seg_columna = 1 hasta 4 con paso 1 Hacer
                    contador = contador + 1
                    tabla_resuelta[seg_fila,seg_columna] = contador
                    si contador = 16 Entonces
                        tabla_resuelta[seg_fila,seg_columna] = 0
                    FinSi
                    Escribir tabla_resuelta[seg_fila,seg_columna] " |" Sin Saltar
                FinPara
                Escribir " "
            FinPara
            Escribir ""
            para recorrer = 1 hasta 15 con paso 1 Hacer
                Repetir
                    existe_numero = Verdadero
                    fila_aleatoria = Aleatorio(1,4)
                    columna_aleatoria = Aleatorio(1,4)
                    si tabla[fila_aleatoria, columna_aleatoria] = 0 Entonces
                        tabla[fila_aleatoria, columna_aleatoria] = recorrer
                        existe_numero = falso
                    FinSi
                Hasta Que existe_numero = Falso
            FinPara
            Repetir
                Limpiar Pantalla
                completado = Verdadero
                //Limpiar Pantalla
                para fila = 1 Hasta  4 con paso 1 Hacer
                    para columna = 1 Hasta  4 con paso 1 Hacer
                        Escribir tabla[fila,columna] " | " Sin Saltar
                    FinPara
                    Escribir " "
                FinPara
                Escribir " "
                Escribir "Que numero desea mover"
                Leer op
                para fila = 1 Hasta  4 con paso 1 Hacer
                    para columna = 1 Hasta  4 con paso 1 Hacer
                        si tabla[fila,columna] = op Entonces
                            //arriba
                            Si fila - 1 > 0 Y tabla[fila -1,columna] = 0 Entonces
                                tabla[fila -1,columna] = tabla[fila,columna]
                                tabla[fila,columna]  = 0
                            FinSi
                            //abajo
                            si fila + 1 < 5 y tabla[fila + 1,columna] = 0 Entonces
                                Escribir "abajo"
                                tabla[fila+1, columna] = tabla[fila,columna]
                                tabla[fila,columna] = 0 
                                fila = 4
                                columna = 4
                            FinSi
                            //izquierda
                            Si columna - 1 > 0 Y tabla[fila,columna -1] = 0 Entonces
                                tabla[fila ,columna-1] = tabla[fila,columna]
                                tabla[fila,columna]  = 0
                            FinSi
                            //derecha
                            Si columna + 1 < 5 Y tabla[fila,columna +1] = 0 Entonces
                                tabla[fila ,columna+1] = tabla[fila,columna]
                                tabla[fila,columna]  = 0
                                fila = 4
                                columna = 4
                            FinSi
                        FinSi
                    FinPara
                FinPara
                Para fila = 1 Hasta  4 con paso 1 Hacer
                    Para columna = 1 Hasta  4 con paso 1 Hacer
                        Si tabla[fila,columna] <> tabla_resuelta[fila,columna] Entonces
                            completado = Falso
                            fila = 4
                            columna = 4
                        FinSi
                    FinPara
                FinPara
            Hasta Que completado == Verdadero
            Limpiar Pantalla
            para fila = 1 Hasta  4 con paso 1 Hacer
                para columna = 1 Hasta  4 con paso 1 Hacer
                    Escribir tabla[fila,columna] " | " Sin Saltar
                FinPara
                Escribir " "
            FinPara
            Escribir " "
            Escribir "!!Felicidades!! Lo conseguiste."
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 60</h2>
<h3>Sudoku Solver</h3>
<pre>
    <code>
        Algoritmo sudoku_bien
            Definir  sudoku Como Entero
            Definir existe Como Logico
            Dimension sudoku[9,9]
            Para f = 1 Hasta 9 Con Paso 1 Hacer
                para c = 1 Hasta 9 Con Paso 1 Hacer
                    Para num = 1 Hasta 9 Con Paso 1 Hacer
                        existe = Falso
                        Repetir
                            para vc = 1 Hasta 9 Con Paso 1 Hacer
                                si num == sudoku[f,vc] Entonces
                                    existe = Verdadero
                                    vc = 9
                                FinSi
                            FinPara
                            para vf = 1 hasta 9 Con Paso 1 Hacer
                                si num == sudoku[vf,c] Entonces
                                    existe = Verdadero
                                    vf = 9
                                FinSi
                            FinPara
                            si f >= 1 y f <= 3 Entonces
                                inicio_fila = 1
                            SiNo
                                si f >= 4 y f <= 6 Entonces
                                    inicio_fila = 4
                                SiNo
                                    inicio_fila = 7
                                FinSi
                            FinSi
                            si c >= 1 y c <= 3 Entonces
                                inicio_columna = 1
                            SiNo
                                si c >= 4 y c <= 6 Entonces
                                    inicio_columna = 4
                                SiNo
                                    inicio_columna = 7
                                FinSi
                            FinSi
                            para i = inicio_fila Hasta inicio_fila + 2 Con Paso 1 Hacer
                                Para j = inicio_columna Hasta inicio_columna +2 Con Paso 1 Hacer
                                    si num == sudoku[i,j] Entonces
                                        existe = Verdadero
                                        i = inicio_fila + 2
                                        j = inicio_columna + 2
                                    FinSi
                                FinPara
                            FinPara
                            si existe == Falso Entonces
                                sudoku[f,c] = num
                                num = 9
                            FinSi
                        Hasta Que existe == Verdadero 
                    FinPara
                    si sudoku[f,c] == 0 Entonces
                        f = 1
                        c = 1
                    FinSi
                FinPara
            FinPara
            Para i = 1 Hasta 9 Con Paso 1 Hacer
                Para j = 1 Hasta 9 Con Paso 1 Hacer
                    si j <> 3 y j <> 6 Entonces
                        Escribir sudoku[i,j], " " Sin Saltar
                    SiNo
                        Escribir sudoku[i,j], "|" Sin Saltar
                    FinSi
                FinPara
                Si i == 6 o i  == 3 Entonces
                    Escribir " "
                FinSi
                Escribir ""
            Fin Para
        FinAlgoritmo
    </code>
</pre>
<br>