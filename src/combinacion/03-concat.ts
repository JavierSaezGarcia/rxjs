/**
 *  --- concat  ---
 *  Concatena varios Observables de entrada, uno tras otro, emitiendo secuencialmente todos los valores de cada uno de ellos.
 * Para emitir valores de varios Observables a la vez (concurrentemente), se puede utilizar merge
 * 
 * */

import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';



const interval$ = interval(1000)

concat(
    interval$.pipe( take(3)),
    [1,2,3,4],
    ['jamon', true, 1500],
    interval$.pipe( take(4)),    
    of('goodbye','world')
)
.subscribe(console.log)