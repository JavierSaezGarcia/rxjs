/**
 *  --- OPERADOR Filter ---
 */
import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// filter filtra la salida
range(20,30).pipe(
    filter( (valor,i)  => {
        console.log('index',i);
        return valor % 2 === 1; // solo los impares
    })    

).subscribe( console.log )

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {  
        tipo: 'heroe',
        nombre: 'Robin'

    },
    {
        tipo: 'villano',
        nombre: 'Joker'

    }
]
// from<Personaje[]>(input: Personaje[]): Observable<Personaje>
from(personajes).pipe(
    filter( hero => hero.tipo === 'heroe' ),
    filter( hero => hero.nombre.startsWith('B') ) // filtrara a los que no son heroes    
).subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( (event => event.code )), // Entrada keyboardEvent salida string
    filter( key => key === 'Enter')
); 

keyup$.subscribe( console.log );