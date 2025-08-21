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
isNan(NaN) // true


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
valor = !!-1 // true
valor = !!'' // false
valor = !!'false' // true
valor = !!null // false
valor = !!undefined // false
valor = !!NaN // false
valor = !![] // true
valor = !!{} // true

// String, Number y Boolean tienen sus equivalentes en el mundo de los objetos
// new Boolean(false) // res: true por que es un objeto
// Object Wrapper

// ------------- Null ---------------- //
// Representa la ausencia intencional de un valor
var acumulador = null // No hay valor asignado
acumulador + 1 // 1

var hola = null

// ------------- Undefined ---------------- //
// Representa la ausencia de valor en una variable que no ha sido inicializada
var x = undefined; // No es recomendable
var y = null // Recomendable


// Equivalencia
// Number -> new Number()
// String -> new String()
// Boolean -> new Boolean()

// ------------- == vs === ---------------- //
// == compara valores y hace coerción de tipos
// === compara valores y tipos sin coerción


// Symbol.for('des')
// Symbol.keyFor(s1)


// ------------- Symbol ---------------- //
// Representa un identificador único y no es accesible por su valor
var s1 = Symbol('des') // Descripción opcional
var s2 = Symbol('des') // Diferente a s1
s1 === s2 // false

// Se usa para crear propiedades únicas en objetos
const DIRECCIONES = {
  ARRIBA: Symbol('ARRIBA'),
  ABAJO: Symbol('ABAJO'),
  IZQUIERDA: Symbol('IZQUIERDA'),
  DERECHA: Symbol('DERECHA'),
}

function mover(direccion) {
  switch (direccion) {
    case DIRECCIONES.ARRIBA:
      console.log('Subiendo')
      break
    case DIRECCIONES.ABAJO:
      console.log('Bajando')
      break
    case DIRECCIONES.IZQUIERDA:
      console.log('Izquierda')
      break
    case DIRECCIONES.DERECHA:
      console.log('Derecha')
      break
    default:
      console.log('Dirección no válida')
  }
}


// ------------- Bigint ---------------- //
// Representa enteros grandes
var big = 1234567890123456789012345678901234567890n
var big2 = BigInt(1234567890123456789012345678901234567890) // También se puede crear con BigInt()

big + 100 // Error
big + 100n // Correcta
// BigInt no se puede mezclar con Number


// ------------- Valor vs Referencia ---------------- //
var edad = 20
var edad2 = edad // Mi variable edad2 cópia el valor de edad
var edad2 = 20

// ----
var cantidad
function comer(cantidad) {
  cantidad = cantidad - 1
}

cantidad = 3
comer(cantidad)
cantidad

// ----
function comer(fruta) {
  fruta.cantidad = fruta.cantidad - 1
}

function comer2(fruta) {
  fruta.cantidad = fruta.cantidad + 10
}

function comer3(fruta) {
  fruta.fruta = 'pera'
}

var fruta = { fruta: 'manzana', cantidad: 3 }

comer(fruta)
console.log(fruta)
comer2(fruta)
console.log(fruta)
comer3(fruta)
console.log(fruta)


