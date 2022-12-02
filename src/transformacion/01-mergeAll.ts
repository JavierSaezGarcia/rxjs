/**
 *  --- mergeAll  ---
 *  Convierte un Observable de orden superior en uno de primer orden que emite las emisiones de los Observables internos de forma concurrente.
 * 
 *  mergeAll se suscribe a un Observable que emite Observables, también conocido como Observable de orden superior. 
 *  Cada vez que observa la emisión de uno de los Observables internos, se suscribe a él y emite todos los valores 
 *  del Observable interno en el Observable resultante. 
 *  El Observable resultante se completa cuando todos los Observables internos se hayan completado.
 *  Cualquier error que se produzca en uno de los Observables internos se emite de forma inmediata en el Observable resultante.
 * */

import { ajax } from 'rxjs/ajax';
import { fromEvent, map, Observable } from "rxjs";
import { debounceTime, mergeAll } from 'rxjs/operators';
import { GithubUser } from '../interfaces/github-user-interface';
import { GithubUsersResp } from '../interfaces/github-users-interface';



const body = document.querySelector('body');
const  textInput = document.createElement('input');
const  orderList = document.createElement('ol');
body.append( textInput );
body.append( orderList );

// Streams 
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    
    orderList.innerHTML = '';

    for (let usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = 'blank';

        li.append( img );
        li.append( usuario.login + ' ');
        li.append( anchor );
        
        orderList.append(li);
        console.log(usuario.login)
    }   

}

input$.pipe(
    debounceTime<KeyboardEvent>(500), 
    map<KeyboardEvent, string>(event => (event.target as HTMLInputElement).value),
    map<string, Observable<GithubUsersResp>>( texto  => ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`
        )
    ),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>(item => item.items)
)
.subscribe( mostrarUsuarios );
