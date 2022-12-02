/**
 *  --- getJSON ---
 *  
 * */

import { ajax, AjaxError } from 'rxjs/ajax';
import { of, catchError } from 'rxjs';

 
// Ejemplo 1 con una direccion para hacer pruebas http
const url = 'https://httpbin.org/delay/1';

// manejar el error
const manejaError = ( resp: AjaxError ) => {
    console.warn('error: ', resp.message );
    return of({
        ok: false,
        usuarios: []
    });
}

// Diferencias entre la peticion ajax normal y ajaxJSON

// Primera forma de catchError mas complicada
// const obs$ = ajax.getJSON( url ).pipe(
//     catchError(manejaError)
// )
// const obs2$ = ajax( url ).pipe(
//     catchError( manejaError )
// )

// obs$.subscribe( data => console.log( 'getJSON', data ) ); // tenemos solo la informacion propiamente de la respuesta
// obs2$.subscribe( data => console.log( 'ajax', data ) ); // obtenemos informacion de la peticion, respuesta ect 


const obs$ = ajax.getJSON( url )
const obs2$ = ajax( url )


obs$.pipe(
    catchError( manejaError )
)
.subscribe({ 
    next: val => console.log('next', val),
    error: err => console.warn( 'Error en subscription', err ),
    complete: () => console.log('Complete')
});
// pero que ocurre si no manejamos el error? vamos a ello con manejaError
