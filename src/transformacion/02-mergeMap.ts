/**
 *  --- mergeMap  ---
 *  Proyecta cada valor emitido por la fuente a un Observable que se fusiona en el Observable resultante.   
 *  Se debe utilizar mergeMap si se quieren tener varios Observables internos suscritos de forma concurrente
 * 
 * */

import { mergeMap, of, interval, fromEvent } from 'rxjs';
import { take, map, takeUntil } from 'rxjs/operators';


// Ejemplo 1
const letras$ = of('a','b','c');

letras$.pipe(
    mergeMap((letra) => interval(1000)
    .pipe(
        map( i => letra +  i),
        take(3)       
    ))
)
// .subscribe({
//     next: val => console.log('next', val),
//     complete: () => console.log('Complete')
// })
 

// Ejemplo 2
// Tiempo apretando el raton

const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$ = fromEvent( document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe( console.log );