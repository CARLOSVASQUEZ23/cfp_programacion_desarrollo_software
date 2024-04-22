<h2>Ejercicio 1 </h2>
<h3>Calculadora simple: </h3>
<pre>
    <code>
		Algoritmo calculadora_simple
			Definir  numero_uno, numero_2 Como Entero
			Escribir "Ingresa primer numero: "
			Leer numero_uno
			Escribir "Ingresa segundo numero: "
			Leer numero_dos
			Escribir "La suma de: " numero_uno " + " numero_dos " es igual a: " numero_uno + numero_dos
			Escribir "La resta de: " numero_uno " - " numero_dos " es igual a: " numero_uno - numero_dos
			Escribir "La multiplicacion de: " numero_uno " * " numero_dos " es igual a: " numero_uno * numero_dos
			Escribir "La division de: " numero_uno " / " numero_dos " es igual a: " numero_uno / numero_dos;
		FinAlgoritmo
	</code>
</pre>
<br>


<h2>Ejercicio 2  </h2>
<h3>Area y perimetro de un rectangulo: </h3>
<pre>
    <code>
		Algoritmo ejercicio_2
			definir base, altura Como Real
			Escribir "Ingresa la base:"
			Leer base
			Escribir "Ingresa la altura"
			leer altura
			escribir "el área de tu rectangulo es: ", (base * altura)
			escribir "El perímetro de tu rectángulo es: ", ((base + altura) * 2)
		FinAlgoritmo
	</code>
</pre>
<br>


<h2>Ejercicio 3  </h2>
<h3>Promedio de Tres Números: </h3>
<pre>
    <code>
		Algoritmo ejercicio_3
    		Definir numero1, numero2, numero3 Como real
    		escribir "Ingrese el primer número"
    		Leer numero1
    		escribir "Ingrese el segundo número"
    		Leer numero2
    		escribir "Ingrese el tercer número"
    		Leer numero3
    		Escribir "El promedio de los tres números es: ", numero1 + numero2 + numero3 / 3;
		FinAlgoritmo
	</code>
</pre>
<br>


<h2>Ejercicio 4  </h2>
<h3>Conversión de Temperatura: </h3>
<pre>
    <code>
		Algoritmo conversion_temperatura
			Definir grados Como Real
			escribir "Ingresa los grados CELSIUS: "
			Leer grados
			escribir "Los ", grados, " grados", " celsius son ", (grados *(9/5) +32), " Grados Fahrenheit"	
		FinAlgoritmo
	</code>
</pre>
<br>


<h2>Ejercicio 5  </h2>
<h3>Edad en Días: </h3>
<pre>
    <code>
		Algoritmo Edad_dias
			Definir edad Como Entero
			Escribir "Ingresa tu edad"
			Leer edad
			Escribir "Has vivido ", (edad * 365), " dias hasta ahora" 
		FinAlgoritmo
	</code>
</pre>
<br>


<h2>Ejercicio 6  </h2>
<h3>Costo de Llamada Telefónica: </h3>
<pre>
    <code>
		Algoritmo Rango_de_números
			Definir medida Como Real
			Escribir "Ingresa un número: "
			Leer medida
			si medida <= 0 o >10 Entonces
				Escribir "Estás fuera del rango"
			FinSi
			sino Entonces
				Escribir "Estás en el rango"
			FinSi
			
		FinAlgoritmo
	</code>
</pre>
<br>


<h2>Ejercicio 7  </h2>
<h3>Cálculo de Descuento: </h3>
<pre>
	<code>
		Algoritmo Calculo_descuento
			Definir descuento Como Real
			Escribir "Ingres el precio de tu producto"
			Leer descuento
			Escribir "el descuento es de: ", descuento * 10/100 "$"
			Escribir "Debes cancelar ", descuento - descuento * 10/100 "$"
		FinAlgoritmo
	</code>
</pre>
<br>

<h2>Ejercicio 8  </h2>
<h3>Dias a segundos: </h3>
<pre>
    <code>
		Algoritmo Dias_a_segundos
			Definir tiempo Como Entero
			Escribir "¿Cuantos dias deseas convertir a segundos?"
			Leer tiempo
			Escribir "La conversion de dias a segundos es de: ", tiempo * 24 * 60 * 60 "segundos"
		FinAlgoritmo
	</code>
</pre>
<br>


<h2>Ejercicio 9  </h2>
<h3>Circunferencia y Área del Círculo: </h3>
<pre>
    <code>
		Algoritmo área_circulo
			Definir medida Como Real
			Escribir "Ingresa el radio del circulo"
			Leer medida
			Escribir "El área del circulo es de: " medida * medida * 3.1416
		FinAlgoritmo
	</code>
</pre>
<br>


<h2>Ejercicio 10  </h2>
<h3> Minutos a Horas y Minutos:  </h3>
<pre>
    <code>
		Algoritmo minutos_a_horas
			Definir time Como Entero
			Escribir "Ingresar los minutos que deseas convertir: "
			Leer time
			Escribir "los " time " minutos son:", time / 60 " horas"
		FinAlgoritmo
	</code>
</pre>
<br>
