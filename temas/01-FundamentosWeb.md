# Fundamentos Web

#### [:page_facing_up: Fundamentos Web](https://github.com/garyDav/aux-sis256/blob/master/Intro.md)

# 📘 Fundamentos de JavaScript

## Variables

En JavaScript, las variables pueden guardar cualquier tipo de dato. El tipo se asigna automáticamente según el valor que le pongas.

- Los nombres pueden tener letras, números, `$` y `_`, pero **no pueden empezar con números**.
- Se declaran con `var`, por ejemplo:

```js
var a;
var b, c, d;
```

- Luego puedes asignarles valores:

```js
a = 4.23;           // número decimal
b = "Javascript";   // texto
c = 125;            // número entero
d = [1, 2, 3, 4];   // arreglo
```

- También puedes declarar y asignar en una sola línea:

```js
var a = 4.23, b = "Javascript", c = 125, d = [1, 2, 3, 4];
```

> ⚠️ Si no usas `var`, la variable se vuelve global, lo que puede causar errores difíciles de detectar. ¡Siempre usa `var`!

## 2. Operadores aritméticos

| Operador | Significado             |
|----------|-------------------------|
| `+`      | Suma                    |
| `-`      | Resta                   |
| `*`      | Multiplicación          |
| `/`      | División                |
| `%`      | Residuo (módulo)        |
| `++`     | Incrementa en 1         |
| `--`     | Decrementa en 1         |

### Prefijo vs Sufijo

```js
++x; // primero incrementa, luego usa el valor
x++; // primero usa el valor, luego incrementa
```

## 3. Operadores de asignación compuesta

| Operador | Equivalente             |
|----------|-------------------------|
| `+=`     | `x = x + valor`         |
| `-=`     | `x = x - valor`         |
| `*=`     | `x = x * valor`         |
| `/=`     | `x = x / valor`         |
| `%=`     | `x = x % valor`         |

## 4. Condicional `if-else`

```js
if (condición) {
  // instrucciones si es verdadero
} else {
  // instrucciones si es falso
}
```

> Si solo hay una instrucción, puedes omitir las llaves `{}`.

## 5. Operadores relacionales y lógicos

### Relacionales

| Operador | Significado                     |
|----------|---------------------------------|
| `>`      | Mayor que                       |
| `<`      | Menor que                       |
| `==`     | Igual (sin importar el tipo)    |
| `===`    | Igual y del mismo tipo          |
| `!=`     | Diferente                       |
| `!==`    | Diferente o distinto tipo       |
| `<=`     | Menor o igual                   |
| `>=`     | Mayor o igual                   |

### Lógicos

| Operador | Significado                     |
|----------|---------------------------------|
| `!`      | Negación                        |
| `&&`     | Y lógico (ambos verdaderos)     |
| `||`     | O lógico (al menos uno verdadero) |

> En JS, `0` y `""` (texto vacío) se consideran falsos. Todo lo demás es verdadero.

## 6. Condicional con operador ternario `?`

```js
r = (condición) ? valor_si_verdadero : valor_si_falso;
```

Ejemplo:

```js
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
```

> Si tienes varias instrucciones, mejor usa `if-else`.

## 7. Ciclo `while`

```js
while (condición) {
  // instrucciones mientras la condición sea verdadera
}
```

## 8. Ciclo `do-while`

```js
do {
  // instrucciones
} while (condición);
```

> Este ciclo **siempre se ejecuta al menos una vez**, porque la condición se evalúa al final.

## 9. Ciclo `for`

```js
for (inicialización; condición; incremento) {
  // instrucciones
}
```

Ejemplo:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 10. Ciclo `for-in`

```js
for (let propiedad in objeto) {
  // instrucciones
}
```

> Si el objeto es un arreglo o texto, `propiedad` serán los índices (0, 1, 2...).

## 11. Comandos `break` y `continue`

- `break`: sale del ciclo inmediatamente.
- `continue`: salta al siguiente ciclo, ignorando el resto de instrucciones.

Ejemplo:

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // imprime 0, 1, 2
}
```

## 🔁 1.6.12. Ciclos infinitos

Un ciclo infinito suele indicar que algo salió mal: una condición que nunca se vuelve falsa. Pero a veces, por lógica del problema, **necesitamos salir del ciclo desde algún punto intermedio**, no al inicio ni al final. En esos casos, se puede crear un ciclo infinito a propósito usando `true` como condición, y luego salir con `break`.

### Ejemplo con `while`:

```js
while (true) {
  // instrucciones antes de evaluar
  if (condición) break;
  // instrucciones después
}
```

### También se puede hacer con `do-while`:

```js
do {
  // instrucciones antes
  if (condición) break;
  // instrucciones después
} while (true);
```

### O con `for` sin parámetros:

```js
for (;;) {
  // instrucciones
  if (condición) break;
  // más instrucciones
}
```

> En el `for`, dejar vacíos los campos de inicialización, condición e incremento crea un ciclo infinito.

---

## 🧩 Funciones en JavaScript

En JavaScript, hay **tres formas principales** de crear funciones. Vamos con la más común:

### ✅ Forma estándar

```js
function nombreFuncion(parámetros) {
  // instrucciones
  return resultado;
}
```

- `nombreFuncion`: sigue las mismas reglas que los nombres de variables.
- `parámetros`: separados por comas.
- `return`: devuelve un valor, que puede ser un número, texto, variable o expresión.

> Si no se usa `return`, la función simplemente termina sin devolver nada.

---

### 🧪 Forma literal (función anónima o asignada)

Esta forma se usa cuando queremos guardar la función en una variable:

```js
var alias = function nombreOpcional(parámetros) {
  // instrucciones
};
```

O más comúnmente, como función anónima:

```js
var alias = function(parámetros) {
  // instrucciones
};
```

> Puedes llamar a la función usando el nombre de la variable (`alias`). El nombre interno (`nombreOpcional`) suele omitirse.

---

### 🧠 Forma dinámica (constructor `Function`)

Esta forma permite crear funciones en tiempo de ejecución:

```js
var f = new Function("par1", "par2", ..., "código JS");
```

Ejemplo:

```js
var suma = new Function("a", "b", "return a + b;");
```

> Estas funciones **siempre son globales** y no se usan muy seguido. Son útiles en casos muy específicos donde el código se genera dinámicamente.

---

### 🔄 Funciones anidadas

En JavaScript (a diferencia de C), **sí puedes crear funciones dentro de otras funciones**:

```js
function externa() {
  function interna() {
    // lógica interna
  }
  interna();
}
```

> Excepto en el caso del constructor `Function`, que siempre crea funciones globales.

