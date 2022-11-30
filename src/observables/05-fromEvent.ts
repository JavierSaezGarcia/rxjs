/**
 * --- FROMEVENT ---
 */

import { fromEvent } from 'rxjs';
/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('Next: ' , val)
};

// src1$.subscribe( ev => {
//     console.log('Coord x: ' + ev.offsetX,'Coord y: ' + ev.offsetY);
// } );
// desestructurando event solo queremos la propiedad del evento x e y
src1$.subscribe( ({ x,y }) => {
    console.log('Coord x: ' + x,'Coord y: ' + y);
} );
src2$.subscribe( evento => {
    console.log(evento.key);
} );