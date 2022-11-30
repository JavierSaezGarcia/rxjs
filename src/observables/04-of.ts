/**
 *   --- OF ---
 *  
 * El  off es una función que nos permite a nosotros crear observables
 * en base a un listado de elementos. El operador of emite los valores 
 * uno por uno de una forma sincrona.
 * of(1,2,3,4,5,6) * 
 * salida => 1 2 3 4 5 6 uno detras de otro
 */

import { of } from 'rxjs';

const obs$ = of<number[]>(1,2,3,4,5,6);
// No va a hacer nada hasta que no exista una subscripcion
// no se empezara a leer los valores que se generan en el observable
// Para ello la hacemos:
console.log('Inicio del Obs$');
obs$.subscribe(
    {
    next: value => console.log('next', value),
    error: () => null, 
    complete: () => console.log('Terminamos la secuencia')
    }
);
console.log('Fin del Obs$');
/**
Inicio del Obs$
index.ts:17 next 1
index.ts:17 next 2
index.ts:17 next 3
index.ts:17 next 4
index.ts:17 next 5
index.ts:17 next 6
index.ts:19 Terminamos la secuencia
index.ts:21 Fin del Obs$
*/
// Va en este orden porque es sincrono.
// Si fuera asincrono mostraria primero los dos console.log 
// y despues ejecutaria el subscribe
//////////////////////////////////////

// aSI SERIA UN SOLO OBJETO
const obsarr$ = of<number[]>([1,2,3,4,5,6]);
obsarr$.subscribe(
    {
    next: value => console.log('next', value),
    error: () => null, 
    complete: () => console.log('Terminamos con un solo objeto que tiene otros objetos dentro')
    }
);

const obs_any$ = of<any>('carro','luis',null, 345);
obs_any$.subscribe(
    {
    next: value => console.log('next', value),
    error: () => null, 
    complete: () => console.log('Terminamos con objetos de distinto tipo')
    }
);

const obs2$ = of<any>( [1,2], {a:1,b:2}, function(){ }, true, Promise.resolve(true))
obs2$.subscribe(
    {
    next: value => console.log('next', value),
    error: () => null, 
    complete: () => console.log('Terminamos con objetos de distinto tipo')
    }
);
// en secuencia de numeros SIEMPRE PONER [] DESPUES DE INDICAR EL TIPO NUMBER
const obs3$ = of<number[]>(...[1,2,3,4,5,6],5,6);
obs3$.subscribe(
    {
    next: value => console.log('next', value),
    error: () => null, 
    complete: () => console.log('Terminamos con objetos de distinto tipo')
    }
);
