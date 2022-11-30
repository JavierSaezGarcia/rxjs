import { of, from } from 'rxjs';
/**
 *  --- OF = TOMA ARGMENTOS Y GENERA UNA SECUENCIA ---
 *  --- FROM = ARRAY, PROMISE, ITERABLE, OBSERVABLE --- *  
 */
/**
 * Spread Operator
 * El spread operator que incorpora ECMAScript 6 en JavaScript es un operador que simplifica la recogida
 * de valores en una estructura de datos. Convierte un array o un objeto en el conjunto de valores que contiene.
 * Su símbolo son tres puntos: …
 */

/////////////////////   ejemplos operador spread para entenderlo  /////////////////
// spread de arrays
const ry = ["a","b","c","d","e"];
console.log(...ry);//  a b c d e f


let animales = ['perro', 'caballo', 'gato', 'oso', 'jirafa'];
console.log(animales); // Resultado -> 'perro', 'caballo', 'gato', 'oso', 'jirafa'

let copiaDeAnimales = [...animales];
console.log(copiaDeAnimales); // Resultado -> 'perro', 'caballo', 'gato', 'oso', 'jirafa'

// spread de objetos

const dog = {
    name: "Lucas",
    age: 7,
    breed: "cocker"
 }
 const dogOwner = { ...dog, owner: "Juan", breed: "cocker spaniel" }
 // dogOwner → {name: “Lucas”, age: 7, breed: “cocker spaniel”, owner: “Juan”}

///////////////////////   fin de spread  ///////////////////////

const observer = {
    next: (val: any) => console.log('next', val),
    complete: () => console.log('Complete')
}

// const source$ = from([1,2,3,4,5]);       // next: 1, next: 2 ... hasta next: 5
// si queremos  que con el operador of haga 
// lo mismo que con from necesitamos anteponer el operador spread (...)
// const source$ = of(...[1,2,3,4,5]);      // next: 1, next: 2 ... hasta next: 5

// const source$ = from('Javier')           // next: J, next: a,  next: v,  next: i,  next: e, next: r
// const source$ = of('Javier')             // next: Javier

// Lo siguiente es que se puede hacer con fetch() de javascript aunque es mejor usar extensiones reactivas con ajax en base a observables
const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async(resp) => {
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// } );

// pero tb podemos hacerlo con rxjs
// function y un asterisco antes de los parentesis de los parametros indica que es una funcion generadora
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// Una forma con javascript
// for(let id of miIterable){
//     console.log(id);
// }

// Otra forma con rxjs
from(miIterable).subscribe( observer );