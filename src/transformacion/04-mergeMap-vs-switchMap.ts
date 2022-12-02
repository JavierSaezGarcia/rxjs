/**
 *  --- switchMap vs mergeMap ---
 *  
 * */

import { ajax } from 'rxjs/ajax';
import { fromEvent, interval, map, Observable,switchMap, mergeMap } from 'rxjs';


const click$ = fromEvent( document, 'click');
const interval$ = interval(1000);
 
click$.pipe( 
    switchMap( () => interval$) // conforme haces click solo se queda la ultima que se muestra en la salida
    // mergeMap( () => interval$) // conforme haces click se van sumando observables y fusionandose en la salida
)
.subscribe( console.log )
 
 