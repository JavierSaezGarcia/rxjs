/**
 *  --- getJSON ---
 *  
 * */

import { ajax } from 'rxjs/ajax';

// Ejemplo 1 con una direccion para hacer pruebas http
const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, {
    // enviamos informacion a la url
    'Contect-type': 'application/json',
    'mi-token': 'ABC123'
} );

obs$.subscribe( data => console.log( 'data', data ) )
