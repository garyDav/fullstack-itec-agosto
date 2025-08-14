# CallStack (Pila de ejecución)

La **CallStack** está intamamente relacionado con conceptos más avanzados como el **Event Loop**, **Closures**, y los distintos **Scopes** que existen en las funciones. Estos conceptos son fundamentales para entender cómo JavaScript maneja la ejecución de código, especialmente en un entorno asíncrono.

Cuando se llama a una función, se agrega un nuevo marco (frame) a la pila. Cuando la función termina, su marco se elimina de la pila. Si una función llama a otra función, el marco de la función llamada se agrega encima del marco de la función que la llamó.

### ¿Qué es el Call Stack?

La **CallStack** es una estructura de datos que sigue el principio LIFO (Last In, First Out), lo que significa que el último elemento agregado es el primero en ser eliminado. En JavaScript, la CallStack se utiliza para gestionar las funciones que se están ejecutando en un momento dado.

El motor de JavaScript utiliza una **pila** para representar el CallStack, podemos pensar en una pila de platos donde el último plato en aplilar o colocar es el primero en ser retirado, no podemos poner un plato por el medio o debajo. De la misma manera si queremos sacar un elemento de la pila, debemos sacar el elemento que está arriba del todo, a las pilas también se lo conoce como **LIFO** (Last In First Out), el último en entrar, es el primero en salir. Lo que significa que cuando queremos sacar un elemento de la pila, tenemos que sacar el que está encima de todo, que fue el último que pusimos.

La pila de ejecución que tiene los motores de JavaScript, es como la pila de platos, pero en vez de platos, vamos a tener otra cosa, ¿Qué es lo que se vá apilar? y ¿Cómo funciona?.

![Script JavaScript CallStack](../img/01-script-callstack.png)

<!--
<p align="center">
  <img src="../img/01-script-callstack.png" alt="Script JavaScript CallStack" width="500" />
</p>
<p align="center"><em>Figura 1. CallStack - Script</em></p>
-->

```js
// ↳ Juego de escondidas
const ocultarJugador = (nombre) => {
  // [1] if (nombre === 'Pepito') throw new Error('Pepito no puede jugar hoy 🤕');

  console.log(`🧍‍♂️ El jugador ${nombre} se está escondiendo...`)
}

function conteoRegresivo(num) {
  if (num <= 0) {
    console.log("🕵️‍♂️ ¡Listos o no, allá voy!")
    return
  }

  console.log(`⏳ ${num}`)
  conteoRegresivo(num - 1)
}

function buscando() {
  console.log("👀 Buscando a los jugadores escondidos...");
  console.log("🚶‍♂️ Caminando por el parque...");
  console.log("😮 ¡Encontrado detrás del árbol! 🌳");
  console.log("🏁 Fin del juego.");
}

function jugarEscondidas() {
  ocultarJugador("Juan")
  ocultarJugador("Pepito")
  ocultarJugador("María")

  conteoRegresivo(10)
  buscando()
}

console.log("🎮 ¡Vamos a jugar a las escondidas!")
jugarEscondidas() // breakpoint
```

Con el breakpoint puesto ejecutamos nuestro script, como podemos observar la ejecución está detenida en `jugarEscondidas()`, damos un paso mas en nuestro programa se pocisiona en `ocultarJugador("Juan")`.

>⚠️ **Importante:** Si en este punto miramos la CallStack, veremos parte de la pila de ejecución (CallStack) en ese preciso momento acá podemos ver en que orden se fue llamando nuestro programa, la función que está arriba del todo es la que se está ejecutando en ese preciso momento `jugarEscondidas`, podemos ver su nombre, el nombre del archivo al que pertenece y el número de la próxima línea de código a ejecutar, en este caso `ocultarJugador('Juan')` ***que todavía no se ejecutó***.

Y ¿Qué es eso que dice `(anonymous)` entre paréntesis?. Cuando ejecutamos un programa en JavaScript la primer función que se agrega a la pila, es un función anónima que engloba a todo el programa, es como si fuese el **hilo principal** del programa, y cuando ésta función salga de la pila, significa que se terminó la ejecución del **programa principal**.

>👀 Prestar atención (CallStack) cada vez que avancemos en el programa, presionar `Esc` para abrir la **consola**.

[1] Si ejecutamos el siguiente paso, veremos que el error aparece en la consola, nos muestra la misma información que está en el CallStack, de esta manera podemos saber cómo se fueron llamando las funciones hasta que sucedió el error que no esperábamos.

1. La función global (anónima) que engloba todo el programa, en la línea ## llamó a la función `jugarEscondidas`.

2. La cual en la línea ## llamó a la función `ocultarJugador`.

3. Y ésta última en la línea ## 🐞**Disparó un error**.

4. A ésta información también se la conoce como **traza de pila** (stack trace), la secuencia de llamadas que se fueron dando durante la ejecución de un programa hasta que sucedió una excepción o un error inesperado, y es muy útil para depurar errores en el código o buscar bugs.


