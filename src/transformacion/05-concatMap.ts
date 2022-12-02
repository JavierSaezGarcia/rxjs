/**
 *  --- concatMap ---
 * Proyecta cada valor emitido por la fuente a un Observable interno que se une al Observable resultante de forma secuencial, 
 * esperando a que cada Observable interno esté completo antes de unir el siguiente
 *  
 * */
// OJO : Se debe utilizar concatMap si se quiere esperar a que cada Observable interno esté completo antes de suscribirse al siguiente

import { fromEvent, interval, concatMap, mergeMap, switchMap } from 'rxjs';
import { take } from 'rxjs/operators';


const click$ = fromEvent( document, 'click');
const interval$ = interval(500).pipe(
    take(10)
)
 
click$.pipe(
    concatMap( () => interval$ )    // va añadiendo a la cola observables y se van disparando 
                                    // conforme se vayan completando en el mismo orden de ejecucion de cada observable.

    // switchMap( () => interval$ ) // solo mantiene el ultimo observable ejecutado
)
.subscribe( console.log )
 
 