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
  ocultarJugador("María") // [2]

  conteoRegresivo(10) // [3]
  buscando() // [4]
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

[2] Estando ya en este punto `ocultarJugador('María')`, si miramos la CallStack es similar a la primera llamada, pero algo cambió, pero esa información no la podemos ver en la CallStack, tenemos que acceder desde otro lugar, desglozamos el apartado `Scope` tenemos acceso a las variables locales y globales.

Y ¿Qué es el Scope? el **Scope** es el **contexto actual de ejecución** en el que se definen las variables y funciones, y determina su visibilidad y accesibilidad, cuando se están ejecutando. En JavaScript, existen diferentes tipos de Scope: global, local (dentro de una función), y bloque (dentro de un bloque de código como un `if` o un `for`).

El Scope Local de la variable `nombre` con el valor `María` y tabmién hay otra variable con el valor `this`, esta variable es muy especial que tiene JavaScript hace referencia al ***Objeto que sería como el "dueño" de la función*** y el valor que tiene `this` determina lo que se llama el ***"contexto" de la función***, si aveces es confuso, el nombre es similar al **contexto de ejecución** pero tenemos que saber que son cosas distintas, y hay que aprender a vivir con ello.

Existe una variable extra en el contexto local, que se ve en Mozilla es `arguments`, hay que saber que `arguments` no es un array, pero es un **objeto** muy similar al array, que tienen todas la funciones en su scope local, menos en las `arrow functions`, Éste **objeto** contiene todos los parámetros que recibe la función cuando fue invocada. En la función `anónima` que engloba todo nuestro programa **no tenemos arguments**, por que todavía no se llamó a ninguna **función**.

Pero en `anonymous` si tenemos otra cosa, una referencia al objeto global, que en el caso del navegador éste objeto es llamado `window`, en el caso de **NodeJS** éste objeto se llama `global`. Éste objeto tiene un montón de **propiedades** y **métodos** y otros **objetos** que son muy útiles y que podemos acceder desde cualquier función de nuestro programa. Por ejemplo `console.log` hacemos referencia al objeto global `window` que está **implícito** no hace falta que escribamos `window.console.log` o `global.console.log` en **NodeJS**. Tódo esto está en el Scope o contexto de ejecución.

**Contexto de ejecución [Scope]**, El conjunto de variables que tiene acceso la función, el contexto (this), arguments u objeto global (window o global).

Por eso al seleccionar una función del CallStack, podemos ver su contexto de ejecución, eso es por que cada vez que se llama a una función se crea un **nuevo scope** (contexto de ejecución) para esa función y también se lo guarda en el registro asociado al llamado a esa función en la *pila de ejecución*. Entonces en esta pila se guarda el: **Nombre de la función**, **El archivo al que pertenece**, **El número de la próxima línea a ejecutar**, y el **contexto de ejecución (scope)**.

[3] Cada vez que ejecutemos la función `conteoRegresivo`, se van apilando cada una con su contexto de ejecución local propia como: `(10), (9), ..., (1), (0)`, hasta que el proceso **recursivo** no termine, estas funciones no se van a salir de la pila hasta que `num=0`, y una vez finalidado cada función, se empiezan a quitar de la pila de ejecución.

>⚠️ Importante, alguna vez escuchaste la frace "volar la pila de ejecución", si nos olvidamos de añadir la semilla a nuestra función recursiva `num <= 0`, esta función siempre resivirá el mismo número `num=10` y nunca podrá terminar de terminar esta función recursiva, por mas que sea la misma función, con la misma variable y en el mismo archivo, de igual manera se creará por cada uno, un registro en la pila de ejecución, como si apilaramos platos hasta que llega al techo.

Cada motor define un límite para la cantidad de entradas que puede almacenar la pila de ejecución, y por suerte los motores de JavaScript tienen éste límite, porque si no nuestro programa se ejecutaría infinitamente, podríamos ver el error `Maximum call stack size exceeded`, esto es algo que tenemos que tener presente al momento de escribir nuestros programas.

[4] ¿Qué crees que pasará ahora? si colocamos un `breakpoint` en la función `buscando()` y volvemos a ejecutar nuestro programa, cuando demos un paso y ejecutamos la función `buscando()` se agrega un nuevo **frame** o **registro** en la pila `buscando` al dar el siguiente paso ➡️ tal como indica el `callstack` se ejecuta la línea ## imprimiento los siguientes mensajes en consola (👀, 🚶‍♂️, 😮, 🌳, 🏁), una vez ubicados en la última línea de la función, en el siguiente paso ➡️ se retira `buscando` de la pila, y lo mismo sucederá con la referencia `jugarEscondidas`, una vez parados en la ultima lína de nuestro programa, ya no quedan instrucciones de funciones para ejecutar, cuando realizemos el proximo y último paso ➡️ se va a sacar a la función **global anónima** de la pila, dejándola vacía y marcando el final de ejecución de nuestro programa.

