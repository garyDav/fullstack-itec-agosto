// process.argv[0] es la ruta al ejecutable de Node.js
// process.argv[1] es la ruta al script que se está ejecutando
const args = process.argv.slice(2)

let nombre = args[0]

console.log(nombre)
delete nombre
