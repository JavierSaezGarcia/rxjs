/**
 *  --- forkJoin ---
 *  Acepta un Array de Observables o un diccionario de Observables, y retorna otro Observable que emite o bien un array de valores 
 *  en el mismo orden que el array proporcionado, o un diccionario de valores con la misma forma que el diccionario proporcionado.
 *  
 *  forkJoin: espera a que todos los Observables se completen, y combina sus últimas emisiones.
 * 
 * */

import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


 // EJEMPLO MAS USADO DE FORKJOIN ///////////////////////////////////
 const GITHUB_API_URL = 'https://api.github.com/users';
 const GITHUB_USER = 'klerith';

 forkJoin({
    usuario: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }`
    ),
    repos: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/repos`
    ),
    gists: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
    )

}).pipe(
    catchError( err => of(err.message))
)
 .subscribe( console.log )
 