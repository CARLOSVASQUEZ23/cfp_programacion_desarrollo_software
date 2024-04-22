<h2>Ejercicio 11</h2>
<h3>Número positivo o negativo</h3>
<pre>
    <code>
        Algoritmo numero_positivo_negativo
        definir todo Como Real
        Escribir "Ingresa cualquier número"
        Leer todo
        si todo >= 0 Entonces
            Escribir "El numero " todo " Es positivo"
        FinSi
        si todo < 0 Entonces
            Escribir "El numero " todo " Es negativo"
        FinSi
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 12</h2>
<h3>Par o impar</h3>
<pre>
    <code>
        Algoritmo Par_o_impar
            Definir lolo Como Entero
            Escribir "Ingresa un número"
            Leer lolo
            si lolo % 2 = 0 Entonces
                Escribir "el numero: " lolo " es par"
            FinSi
            si lolo % 2 = 1 Entonces
                Escribir "el numero: " lolo " es impar"
            FinSi   
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 3</h2>
<h3>Dia de la semana</h3>
<pre>
    <code>
        Algoritmo dia_de_la_semana
            Definir dianum Como Entero
            Escribir "Escribe una número del 1 al 7"
            Leer dianum
            si dianum = 1 Entonces
                Escribir "El dia es lunes"
            FinSi
            si dianum = 2 Entonces
                Escribir "El dia es Martes"
            FinSi
            si dianum = 3 Entonces
                Escribir "El dia es Miercoles"
            FinSi
            si dianum = 4 Entonces
                Escribir "El dia es Jueves"
            FinSi
            si dianum = 5 Entonces
                Escribir "El dia es Viernes"
            FinSi
            si dianum = 6 Entonces
                Escribir "El dia es Sábado"
            FinSi
            si dianum = 7 Entonces
                Escribir "El dia es Domingo"
            FinSi    
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 14</h2>
<h3>Mayor de tres números</h3>
<pre>
    <code>
        Algoritmo Mayor_de_tres_números
            Definir numer1, numer2, numer3 Como Real
            Escribir "Ingresa el primer número"
            leer numer1
            Escribir "Ingresa el segundo número"
            Leer numer2
            Escribir "Ingresa el tercer número"
            Leer numer3
            si numer1 > numer2 y numer1 > numer3 Entonces
                Escribir "El primer número es mayor que los otros"
            FinSi
            si numer2 > numer1 y numer2 > numer3 Entonces
                Escribir "El segundo número es mayor que los otros"
            FinSi
            si numer3 > numer2 y numer3 > numer2 Entonces
                Escribir "El tercer número es mayor que los otros"
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 15</h2>
<h3>Aprobado o Reprobado</h3>
<pre>
    <code>
        Algoritmo Aprovado_y_reprovado
            Definir nota_final Como Real
            Escribir "Ingresa tu calificación final: "
            Leer nota_final
            si nota_final >= 60 y nota_final<= 100 Entonces
                Escribir "Aprovado"
            FinSi
            si nota_final < 60 Entonces
                Escribir "Reprovado"
            FinSi
            si nota_final > 100 Entonces
                Escribir "No puedes tener más de 100 puntos"
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 16</h2>
<h3>Rango de Números</h3>
<pre>
    <code>
        Algoritmo Rango_de_numeros
            Definir num Como Entero
            Escribir "Ingresa un número entero: "
            leer num 
            si num >= 0 y num <= 10 Entonces
                Escribir "Numero dentro del rango"
            SiNo
                Escribir "Numero fuera del rango"
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 17</h2>
<h3>Categoria de edad</h3>
<pre>
    <code>
        Algoritmo categoria_de_edad
            Definir edad Como Entero
            Escribir "Ingresa tu edad"
            Leer edad
            si edad < 0 Entonces
                Escribir "Aún no has nacido"
            FinSi
            si edad >= 0 y edad <= 12 Entonces
                Escribir "Categoria: niño"
            FinSi
            si edad >= 13 y edad <= 17 Entonces
                Escribir "Categoria: adolescente"
            FinSi
            si edad >= 18 y edad <= 64 Entonces
                Escribir "Categoria: adulto"
            FinSi
            si edad >= 65 y edad <= 149 Entonces
                Escribir "Categoria: adulto mayor"
            FinSi
            si edad > 150 Entonces
                Escribir "Posiblemente ya has fallecido"
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 18</h2>
<h3>Calculadora de descuento</h3>
<pre>
    <code>
        Algoritmo calculadora_de_descuento
            Definir precio Como Real
            Escribir "Coloca el precio del tu producto"
            Leer precio
            si precio > 100 Entonces
                Escribir "Se le aplicara el 10% de descuento"
                descuento = precio - precio *10 /100
                Escribir "debes pagar ", descuento ," Q"
            FinSi
            si precio <= 100 Entonces
                Escribir "El precio no aplica descuento"
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 19</h2>
<h3>Divisibilidad por 5 y 3</h3>
<pre>
    <code>
        Algoritmo divisible_por_5_y_por_3
            Definir cantidad Como Real
            Escribir "Ingresa cualquier número:"
            Leer cantidad
            si cantidad % 3 = 0 Entonces
                Escribir "El número es divisible por 3"
            FinSi
            si cantidad % 5 = 0 Entonces
                Escribir "El número es divisible por 5"
            FinSi
            si cantidad % 3 = 0 y cantidad % 5 = 0 Entonces
                Escribir "El número es divisible por 3 y 5"
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>


<h2>Ejercicio 20</h2>
<h3>Día Hábil o Fin de Semana</h3>
<pre>
    <code>
        Algoritmo Da_habil_o_fin_de_semana
            Definir sabedor Como Entero
            Escribir "Ingresa un número del 1 al 7"
            leer sabedor
            si sabedor >= 1 y sabedor <=5 Entonces
                Escribir "Este número " sabedor " es un día hábil"
            FinSi
            si sabedor >= 6 y sabedor <=7 Entonces
                Escribir "Este número " sabedor " es un fin de semana"
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>