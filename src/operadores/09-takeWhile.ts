/**
 *  --- TAKEWHILE ---
 *  Emite las emisiones del Observable fuente siempre y hasta cuando cumplan la condición especificada. 
 *  Se completa en cuanto haya un valor que no cumpla la condición
 * 
 * */
import { interval, fromEvent, from } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

// takeWhile( x => x < 4 ) toma los menores o de una condicion

const number$ = interval(1000);

number$
  .pipe(
    takeWhile((number) => number < 10)
   )
  .subscribe({
    next: valor => console.log('next', valor),
    complete: () => console.log('complete')
  }) 
// Salida: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, Completado
// OTRO EJEMPLO
const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    map( ({ x, y }) => ({x,y}) ),
    //takeWhile( ({y}) => y <= 150 )
    // pero que pasa si queremos que nos indique el ultimo valor que rompio la condicion para eso es el siguiente argumento que es el 'inclusive'
    takeWhile( ({y}) => y <= 150, true)
    // fijemonos en la consaola que nos imprimio el valor que sobrepaso el limite
)
.subscribe({
    next: valor => console.log('next', valor),
    complete: () => console.log('complete')
});

//////////////////////////////////////////////////////////////
//// otro ejemplo

const language$ = from([
    { name: "Ruby", type: "Multiparadigma" },
    { name: "Rust", type: "Multiparadigma" },
    { name: "Java", type: "Orientado a objetos" },
    { name: "Scala", type: "Multiparadigma" },
    { name: "Haskell", type: "Funcional" },
  ]);
  
  language$
    .pipe(takeWhile(({ type }) => type === "Multiparadigma"))
    .subscribe(console.log);
  // Salida: { name: "Ruby", type: "Multiparadigma" }, { name: "Rust", type: "Multiparadigma" }


  /////////////////////////////////////
////// otro mas
  const programmingLanguage$ = from([
    { name: "Simula", type: "Object-oriented" },
    { name: "Java", type: "Object-oriented" },
    { name: "Wolfram", type: "Declarative" },
    { name: "Ruby", type: "Multiparadigm" },
  ]);
  
  // Si se proporciona el valor true como segundo argumento (parámetro inclusive), el primer elemento que no cumpla la condición también se emite
  programmingLanguage$
    .pipe(takeWhile(({ type }) => type === "Object-oriented", true))
    .subscribe(console.log);
  // Salida: { name: "Simula", type: "Object-oriented" }, { name: "Java", type: "Object-oriented" }, { name: "Wolfram", type: "Declarative" }