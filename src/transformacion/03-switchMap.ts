/**
 *  --- switchMap  ---
 *  Proyecta cada emisión de la fuente a un Observable que se une al Observable resultante, emitiendo únicamente los valores de Observable proyectado más reciente.
 *  Se debe utilizar mergeMap si se quieren tener varios Observables internos suscritos de forma concurrente
 *  Proyecta cada valor a un Observable interno, y 'aplasta' estos Observables internos.
 * */

 import { ajax } from 'rxjs/ajax';
 import { fromEvent, map, switchMap } from 'rxjs';
 
  

 
 const body = document.querySelector('body');
 const  textInput = document.createElement('input');
 const  orderList = document.createElement('ol');
 body.append( textInput );
 body.append( orderList );
 
 // Streams 
 const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );
 
 
 const url = 'https://httpbin.org/delay/1?arg=';

 input$.pipe(
    map(event => (event.target as HTMLInputElement).value),
    switchMap( texto => ajax.getJSON( url + texto ))
 )
 .subscribe( console.log )
 