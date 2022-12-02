/**
 *  --- mergeMap vs switchMap vs exhaustMap ---
 * 
 * */


import { fromEvent, of } from 'rxjs';
import { map, tap, mergeMap, switchMap, exhaustMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper o Auxiliar
const peticionHttpLogin = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            map( resp => resp.response['token']),
            catchError( err => of('xxx'))  
        )

// Creando un formulario 
const form =  document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = "cityslicka";

submitBtn.type = 'submit';
submitBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, submitBtn );
document.querySelector('body').append( form );

// Streams
const submitForm$ = fromEvent( form, 'submit' )
    .pipe(
        tap( ev => ev.preventDefault() ),
        map( ev => ({
            email: ev.target[0].value,
            password: ev.target[1].value
        })),
        // mergeMap( userPass => peticionHttpLogin(userPass)) // fusiona todas las peticiones y las ejecuta conforme todas las que pedimos simultaneas
        // switchMap( userPass => peticionHttpLogin(userPass)) // ejecuta la ultima peticion
        exhaustMap( userPass => peticionHttpLogin(userPass)) // solo se ha disparado una porque (las he hecho muy rapido) las demas peticiones no habian concluido la primera
    );

submitForm$.subscribe( token => console.log( token ))


