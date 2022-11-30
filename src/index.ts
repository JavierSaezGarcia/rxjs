/**
 *  --- OPERADOR Filter ---
 */
import { range, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// filter filtra la salida
range(20,30).pipe(
    filter( (valor,i)  => {
        console.log('index',i);
        return valor % 2 === 1; 
    })
    

)//.subscribe( console.log )

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
    filter( hero => hero.tipo === 'heroe')     
).subscribe( console.log )