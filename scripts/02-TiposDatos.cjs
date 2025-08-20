// Tipos Primitivos Inmutables
// Number, String, Boolean, Undefined, Null, Symbol, BigInt

var texto = 'Cocina'
texto[0] = 'B'

console.log(texto) // 'Cocina'

// La única manera de modificar una variable es asignándole un nuevo valor
texto = 'Bocina'
console.log(texto) // 'Bocina'

// ------------- String ---------------- //

var edad = 30
edad.toString() // '30'

// Tambien se puede convertir a string concatenando.
edad + '' // '30'

// Podemos crear cadeas con comilals simples o dobles

var nombre = 'Juan'
var apellido = "Pérez"

// Pero no: var nombre = 'Juan"

// Podemos acceder a un caracter de una cadena por su índice
nombre[0] // 'J'

// Template Strings con backticks (``) permiten interpolación de variables
var nomCompleto = `Mi nombre es ${nombre} ${apellido}`
// ${Expresion en JS}

// ------------- Number ---------------- //
var entero = 5
var negativo = -3
var decimal = 3.14
var decimal2 = .14 // 0.14

// IEEE 754
var suma = 0.1 + 0.2 // 0.30000000000000004
suma.toFixed(2) // '0.30' ojo cadena

Number(suma.toFixed(2)) // 0.3
  + suma.toFixed(2) // 0.3 ahora si `number`

// Existe el -0
0 === -0 // true

// Numero mas grande `number`
var max = Number.MAX_SAFE_INTEGER
var min = Number.MIN_SAFE_INTEGER

// No existen números tan pequeños o grandes como estos:
// -Infinity e Infinity

// NaN
var resta = 5 - 'hola' // NaN
4 + 5 + NaN // NaN se propaga
NaN === NaN // false


// ------------- Boolean ---------------- //
var verdadero = true
var falso = false

// Que valores son falsy
// false, 0, '', null, undefined, NaN
// Todo lo demás es truthy
var truthy = 1
var truthy2 = 'hola'
var truthy3 = []
var truthy4 = {}

// Obtener los valores true o false de un valor
var valor = !!0 // false
valor = !!1 // true
valor = !!'' // false
valor = !!'hola' // true
valor = !!null // false
valor = !!undefined // false
valor = !!NaN // false
valor = !![] // true
valor = !!{} // true

// ------------- Null ---------------- //
// Representa la ausencia intencional de un valor
var acumulador = null // No hay valor asignado
acumulador + 1 // 1

var hola = null

// ------------- Undefined ---------------- //
// Representa la ausencia de valor en una variable que no ha sido inicializada
// var x; // undefined




