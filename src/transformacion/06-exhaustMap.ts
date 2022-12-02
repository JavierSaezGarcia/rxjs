/**
 *  --- exhaustMap ---
 * Proyecta cada emisión de la fuente a un Observable interno que se fusiona 
 * con el Observable resultante únicamente si el Observable interno anterior se ha completado
 *  
 * */
// OJO :Se debe utilizar exhaustMap si se quiere ignorar los Observables internos mientras no se haya completado el Observable interno anterior

import { fromEvent, interval } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';


const click$ = fromEvent( document, 'click');
const interval$ = interval(500).pipe(
    take(5)
)
 
click$.pipe(
    exhaustMap( () => interval$ )    // solo procesa la subscripcion si no tiene ninguna en marcha anterior.                             
)
.subscribe( console.log )
 
 