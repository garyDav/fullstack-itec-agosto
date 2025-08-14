// var, let, const

// lado * lado
// base * altura / 2

/*console.log(`El área de un triángulo de base
   ${base} y altura ${height} es: ${base * height / 2}`)*/
/*var base

function triangleArea() {
  base = 5
  var height = 8

  return base * height / 2
}

console.log('base: ', base)
const area = triangleArea()
*/

const estudiante = { edad: 16 }

if (estudiante['edad'] > 18) {
  let pelicula = 'Los Vengadores'
  console.log('Puede pasar')
  console.log(pelicula)
}
else {
  console.log('Acceso restringido')
}


estudiante.edad = 19

console.log(estudiante)
















