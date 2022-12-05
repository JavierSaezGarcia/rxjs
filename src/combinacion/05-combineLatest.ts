/**
 *  --- combineLatest  ---
 *  Combina varios Observables para crear otro Observable cuyos valores se calculan a partir de las emisiones 
 *  más recientes de cada uno de sus Observables de entrada.
 *  Cuando uno de los Observables de entrada emite un valor, utiliza las últimas emisiones de todos los 
 *  Observables de entrada para computar el valor que se emite en el Observable resultante.
 * 
 *  combineLatest combina los valores de todos los Observables de entrada. Para ello, se suscribe a cada uno de los Observables en orden, 
 *  y cuando alguno de los Observables emite, recoge las emisiones más recientes de cada uno en un array. Por tanto, si se le proporcionan n Observables al operador,
 *  el Observable retornado siempre emitirá un array de n valores, en el orden en el que los Observables se hayan pasado 
 *  como parámetros (el valor del primer Observable estará en la primera posición del array etc.)
 * 
 * */

 import { combineLatest, of, timer } from "rxjs";
 import { startWith, delay, map, take } from "rxjs/operators";


 // Primer ejemplo //////////////////////////////////////
 const letras$ = of('a','b','c');
 const numeros$ = of(1,2,3);
 combineLatest([letras$, numeros$])
        .pipe(
            map(
                ([letra, numero]) => (`${letra}${numero}`)
            )
        )
        .subscribe(console.log);
// a1
// a2
// b2
// b3
// c3
// c4
// d4
// d5
// e5

// Segundo ejemplo //////////////////////////////////////////////
 const firstTimer = timer(0, 1000).pipe(take(10)); // emit 0, 1, 2... after every second, starting from now
 const secondTimer = timer(500, 1000).pipe(take(10)); // emit 0, 1, 2... after every second, starting 0,5s from now
 const combinedTimers = combineLatest(firstTimer, secondTimer);
 combinedTimers
     //.subscribe((value) => console.log(value));
 // Salida:
 // [0, 0] tras 0.5s
 // [1, 0] tras 1s
 // [1, 1] tras 1.5s
 // [2, 1] tras 2s

 // Tercer ejemplo

const observables = [1, 5, 10].map((n) =>
  of(n).pipe(
    delay(n * 1000), // emite 0 y después emite n tras n seconds
    startWith(0)
  )
);
const combined = combineLatest(observables);
combined
    //.subscribe((value) => console.log(value));


// Salida:
// [0, 0, 0] inmediatamente
// [1, 0, 0] tras 1s
// [1, 5, 0] tras 5s
// [1, 5, 10] tras 10s