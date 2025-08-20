# Tipos de Datos Primitivos

#### ¿Qué es un tipo de dato primitivo?

Es un tipo de dato básico como números, cadenas de texto, booleanos, `null`, `undefined`, y símbolos. Los tipos de datos **Primitivos** no son **objetos** y no tienen **propiedades ni métodos**.

Otra característica que tienen los datos primitivos es que son **inmutables**, lo que significa que no pueden ser cambiados. Si intentas modificar un dato primitivo, en realidad estás creando uno nuevo.

```js
var texto = 'Cocina'
texto[0] = 'B'

console.log(texto) // 'Cocina'

// La única manera de modificar una variable es asignándole un nuevo valor
texto = 'Bocina'
console.log(texto) // 'Bocina'
```

### Tipos de datos primitivos

* `string`: Cadenas de texto, como `"Hola"`, `'Mundo'`.

* `number`: Números, como `42`, `3.14`, `-1`.

* `boolean`: Valores lógicos, `true` o `false`.

* `null`: Representa la ausencia intencional de valor.

* `undefined`: Indica que una variable no ha sido asignada.

* `symbol`: Un identificador único y inmutable, útil para propiedades de objetos.

* `bigint`: Números enteros grandes, como `1234567890123456789012345678901234567890n`, se incorpora desde la versión "ECMAScript 2020".

En JavaScript **todo valor que no sea de alguno de estos tipos es un objeto**, exacto los array son objetos, las funciones son objetos, las funciones tipo fecha también son objetos, las expresiones regulares y cualquier objeto literal también lo es.

#### 🔗 Cadenas

Para las cadenas de texto, JavaScript utiliza una codificación llamada **UTF-16**, que permite representar caracteres de muchos idiomas y símbolos incluso emojis.

>👀 **Nota**: en `"Gary".length`, podemos saber cuantos caracteres tiene la cadena, en este caso `4`.
>¿Notas algo raro?, exacto antes dijimos que el típo primitivo no posee propiedades ni métodos, explicaremos eso más adelante.

Para obtener un string a partir de una variable podemos:

```js
var edad = 30
edad.toString() // "30"

// ó

edad + '' // "30"
```

Pero cuidado si utilizamos el método `toString()`, debemos asegurarnos que la variable no sea `null` o `undefined`, ya que esto generará un error.

#### 🔢 Números

Los números en JavaScript son de tipo `number`, y pueden ser enteros positivos o negativos y también decimales. JavaScript utiliza el estándar IEEE 754 para representar números de punto flotante.

```js
var entero = 42
var negativo = -7
var decimal = 3.14

0 === -0 // true, ambos son considerados iguales
```

>👀 **Nota**: En JavaScript, al momento de representar números decimales no es muy preciso.

```js
0.1 + 0.2 // 0.30000000000000004
(.1+.2).toFixed(100) // 😩
```

En `Rubi`, `Python`, y en `Java` pasa lo mismo, esto tiene que ver como están diseñado los números dentro del lenguaje, en estos lenguajes se utiliza un formato llamdo **IEEE 754**, en este formato cáda número ocupa 64 bits en la memoria (8 Bytes).

```js
var numero = +(.1+.2).toFixed(2) // 😄
var numeroMinimo = -( 2** 53) + 1
var numeroMaximo = (2 ** 53) - 1
```

## 🧠 ¿Qué significa “operador unario”?

Un operador unario actúa sobre **un solo operando**. En este caso:

```js
typeof "Hola" // "string"
```

Aquí, `typeof` opera sobre `"Hola"` y devuelve `"string"`.

---

## 🔍 ¿Qué devuelve `typeof`?

| Valor                  | Resultado de `typeof` |
|------------------------|------------------------|
| `"texto"`              | `"string"`             |
| `42`                   | `"number"`             |
| `true` / `false`       | `"boolean"`            |
| `undefined`            | `"undefined"`          |
| `null`                 | `"object"` ⚠️ (histórico bug) |
| `{}`                   | `"object"`             |
| `[]`                   | `"object"`             |
| `function() {}`        | `"function"`           |

---

## ⚠️ Curiosidades y trampas

- `typeof null` → `"object"`  
  Esto es un bug heredado de las primeras versiones de JS.

- `typeof NaN` → `"number"`  
  Aunque es “Not a Number”, su tipo es `number`.

- `typeof typeof 1` → `"string"`  
  Porque `typeof 1` devuelve `"number"`, y `typeof "number"` es `"string"`.

---

## ✅ ¿Cómo usarlo?

```js
let x = 10;
console.log(typeof x); // "number"

if (typeof x === "string") {
  console.log("Es una cadena");
}
```

---

## 🧠 ¿Qué es la coerción de tipos?

La **coerción** es el proceso mediante el cual un lenguaje de programación **convierte automáticamente (o explícitamente) un valor de un tipo a otro**. Por ejemplo, convertir un número a una cadena, o un booleano a un número.

---

## 🔍 Tipos de coerción

| Tipo         | Descripción                                                                 |
|--------------|------------------------------------------------------------------------------|
| **Implícita**| El lenguaje lo hace automáticamente sin que tú lo indiques.                 |
| **Explícita**| Tú le dices al lenguaje que convierta el tipo usando funciones o métodos.   |

---

## 🧪 Ejemplos en JavaScript

### 🔸 Coerción implícita

```js
let resultado = "5" + 5; // "55"
```

JavaScript convierte el número `5` en cadena `"5"` y concatena.

```js
let resultado = "5" - 1; // 4
```

Aquí convierte `"5"` en número y realiza la resta.

---

### 🔸 Coerción explícita

```js
let numero = Number("42"); // 42
let texto = String(100);   // "100"
let booleano = Boolean(0); // false
```

Tú decides qué tipo quieres obtener.

---

## ⚠️ ¿Por qué es importante entenderla?

- Evita errores inesperados como `NaN`, `undefined`, o resultados lógicos incorrectos.
- Te ayuda a escribir código más predecible y seguro.
- Es clave para entender cómo funciona el **call stack**, el **scope**, y las **comparaciones**.





## 🧩 Coerción Implícita en JavaScript

La coerción implícita ocurre cuando JavaScript **convierte automáticamente** un tipo de dato en otro durante operaciones como comparaciones, concatenaciones o cálculos.

---

## 🔢 Número (`Number`)

### 🔁 Convertido a:

| Tipo destino | Ejemplo                         | Resultado | Explicación |
|--------------|----------------------------------|-----------|-------------|
| **String**   | `5 + "5"`                        | `"55"`    | El número se convierte en cadena para concatenar. |
| **Boolean**  | `Boolean(0)`                     | `false`   | `0`, `NaN` → `false`; cualquier otro número → `true`. |
| **Object**   | `5 == new Number(5)`             | `true`    | El objeto se convierte a primitivo para comparar. |

---

## 🧵 Cadena (`String`)

### 🔁 Convertida a:

| Tipo destino | Ejemplo                         | Resultado | Explicación |
|--------------|----------------------------------|-----------|-------------|
| **Number**   | `"42" - 2`                       | `40`      | `"42"` se convierte a número para operar. |
| **Boolean**  | `Boolean("")`                    | `false`   | Cadena vacía → `false`; cualquier otra → `true`. |
| **Object**   | `"hello" == new String("hello")` | `true`    | El objeto se convierte a primitivo. |

---

## 🎭 Boolean (`true` / `false`)

### 🔁 Convertido a:

| Tipo destino | Ejemplo                         | Resultado | Explicación |
|--------------|----------------------------------|-----------|-------------|
| **Number**   | `true + 1`                       | `2`       | `true` → `1`, `false` → `0`. |
| **String**   | `true + "!"`                     | `"true!"` | Se convierte a cadena para concatenar. |
| **Object**   | `true == new Boolean(true)`      | `true`    | El objeto se convierte a primitivo. |

---

## 🧼 `null` y `undefined`

### 🔁 Convertidos a:

| Tipo destino | Ejemplo                         | Resultado | Explicación |
|--------------|----------------------------------|-----------|-------------|
| **Boolean**  | `Boolean(null)` / `Boolean(undefined)` | `false` | Ambos son falsy. |
| **Number**   | `null + 1` → `1`<br>`undefined + 1` → `NaN` | — | `null` → `0`, `undefined` → `NaN`. |
| **String**   | `null + "!"` → `"null!"`<br>`undefined + "!"` → `"undefined!"` | — | Se convierten a cadena. |

---

## 🧱 Object (`{}`, `[]`, `new Date()`, etc.)

### 🔁 Convertido a:

| Tipo destino | Ejemplo                         | Resultado | Explicación |
|--------------|----------------------------------|-----------|-------------|
| **String**   | `{} + "test"`                    | `"[object Object]test"` | El objeto se convierte a cadena. |
| **Number**   | `[] - 1`                         | `-1`      | `[]` → `""` → `0`; `{} - 1` → `NaN`. |
| **Boolean**  | `Boolean({})` / `Boolean([])`    | `true`    | Todos los objetos son truthy. |

---

## 🧪 Comparaciones con coerción

```js
0 == false        // true
"" == 0           // true
null == undefined // true
[] == false       // true
[] == ![]         // true
{} == {}          // false (referencias distintas)
```

---

## 📌 Reglas clave

- **Operadores como `+`, `-`, `==` pueden disparar coerción.**
- **`==` compara con coerción; `===` compara sin coerción.**
- **Objetos se convierten a primitivos usando `valueOf()` o `toString()`.**

---

## 🧠 Visual: Truthy vs Falsy

```js
// Valores falsy
false, 0, "", null, undefined, NaN

// Todo lo demás es truthy
true, "0", [], {}, function(){}, Infinity
```

