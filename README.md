# JS-6-Alura

https://github.com/alura-es-cursos/1822-Almacenando-Datos-En-El-Navegador

Tomamos la fecha que ingresa el usuario y lo almacenamos en el objeto calendar
```javascript
const calendar = document.querySelector('[data-form-date]');
```
Obtengo el valor del objeto calendar
```javascript
const date = calendar.value;
```
Usamos una libreria para estandarizar el ingreso de fechas para distintos navegadores.
https://momentjs.com/
Es una libreria que se encarga de trabajar con fechas en el navegador.
Para obtener el código utilizamos una página que se llama
https://cdnjs.com/
https://cdnjs.com/libraries/moment.js
Copiamos el código y lo añadimos en el index.html
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
```
De esta manera ya tenemos acceso a la funcion moment
```js
console.log(moment(date).format('DD/MM/YYYY'));
const dateFormat = moment(date).format('DD/MM/YYYY');
```

Los navegadores permiten que nosotros nos comuniquemos con ellos a través de una interface que posee una lista de métodos de objetos a los que podemos acceder con JavaScript.

Dentro de esta lista vamos a acceder a un objeto llamado Date(), pero primero necesitamos instanciar ese objeto.

```
const data = new Date()
\\ Wed Oct 14 2020 14:14:24 GMT-0600 (Ciudad de México Standard Time)
```
Podemos ver que accedimos a varias informaciones de la fecha. El objeto Date() posee varios métodos para trabajar con fechas. Por ejemplo, si quisiéramos editar esa primera información para un formato que exhibirá la fecha separada por diagonales podemos utilizar el método toLocaleDateString:

```
data.toLocaleDateString('es-MX')
\\ "10/14/2020"COPIA EL CÓDIGO
```
Ese formato puede ser configurable: por ejemplo, podemos crear un objeto que va a contener la llave de la fecha y al valor para definir cómo queremos exhibir la fecha:

````
const dataOptions = {
   weekend: 'long',
   year: 'numeric',
   month:'long',
   day: 'numeric'
}
````
Ahora necesitamos llamar dataOptionscomo segundo parámetro:

````
data.toLocaleDateString('es-MX', dataOptions)
\\ 28 de agosto de 2020
````

¿Y el horario? El navegador posee un método llamado toLocaleTimeString() que muestra el horario del navegador y, así como en el método de fecha, pasemos es-mx como parámetro. Así, la fecha será formateada para el patrón utilizado en México.

````
data.toLocaleTimeString()
\\ “9:04:54 AM”
````

El resultado es configurable así como el de la fecha, con el mismo proceso de crear objeto con llave y valor, que después pasamos como parámetro.

````
const horarioOptions = {
   hour12: false,
   hour: 'numeric',
   minute: '2-digit',
   second: '2-digit', 
   timeZone: 'America/Sao_Paulo'
}
````
Usando horarioOptionscomo argumento de la función ToLocaleTImeString, tenemos:
```
data.toLocaleTimeString('es-MX', horarioOptions)
\\ “9:04:54”
```

Podemos combinar todas esas opciones utilizando el método toLocaleString(). Usando esos tres puntos antes del objeto, estamos indicando que todas las llaves/valor del objeto pasarán para ese nuevo objeto. Esa sintaxis se llama spread operator.

```
data.toLocaleString('es-MX', {
   ...dataOptions, 
   ...horarioOptions
})
\\ “28 de agosto de 2020 9:04:54”
```
Si necesitamos usar ese formato en varios lugares del código, podemos utilizar el objeto Intl.DateTimeFormat que es un contructor, o sea, recibirá informaciones iniciales de cómo queremos que la fecha esté formateada.
```
const formataData = new Intl.DateTimeFormat('es-MX', {
   ...dataOptions,
   ...horarioOptions
})
```

Para terminar, llamando el método format, podemos formatear diferentes fechas caso sea necesario.

```
formataData.format(data)
\\ “28 de agosto de 2020 9:04:54”
```
Está claro que trabajar con fechas utilizando API del navegador nos trae ventajas y desventajas, y depende de tu proyecto aprovechar esa flexibilidad de customizaciones.

# Creamos un elemento span
```js
const dateElement = document.createElement('span');
```
Luego le agregamos el contenido
```js
dateElement.innerHTML = dateFormat;
```
Lo añadimos al task
```js
task.appendChild(dateElement);
```