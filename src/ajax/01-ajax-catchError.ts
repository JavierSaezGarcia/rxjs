/**
 *  --- fetchApi y catchError ---
 *  
 * */
import { of } from 'rxjs';
import {  map,  catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';



// Ejemplo 1 
const url = 'https://api.github.com/users?per_page=5';

// const manejaErrores = ( response: Response ) => {
//     if( !response.ok ){
//         throw new Error( response.statusText );
//     }
//     return response;
    
// }

/// 

const atrapaError = (err: AjaxError) => {
    console.warn('Error  en ', err.message  );
    return of([]);
}

const fetchPromesa = fetch( url );

// Primera explicacion como hariamos con promesas de javascript
// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data', data ) )
//     .catch( err => console.warn('error en usuarios', err ))


// Segunda explicación con una funcion de manejar errores hecha a mano sin libreria
// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data', data ) )
//     .catch( err => console.warn('error en usuarios', err ))

// Tercera explicacion esta vez con el objeto ajax de rxjs y el objeto AjaxError de rxjs
ajax( url )
    .pipe(
        map( resp => resp.response ),
        catchError( atrapaError )
    )
    .subscribe( users => console.log('Usuarios', users ) )