/**
 *  --- TAKEUNTIL Y SKIP ---
 *  TAKEUNTIL: Emite los valores emitidos por el Observable fuente hasta que un segundo Observable emita un valor.
 *  SKIP: Retorna un Observable que se salta las primeras x emisiones del Observable fuente
 *   
 * */
import { interval, fromEvent, from } from 'rxjs';
import { takeUntil, skip, tap  } from 'rxjs/operators';

const boton = document.createElement("button");

boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );

// 1º Observable interval()
const counter$ = interval(1000);
// 2º Observable fromEvent
const clickBtn$ = fromEvent<MouseEvent>( boton , 'click')
    .pipe(
        tap( () => console.log('tap antes del skip')),
        skip(1),
        // esto lo que hace es que la primera vez que se pulsa (porque hemos puesto 1) 
        // el boton hace un salto (skip) pero la segunda vez funciona el takeUntil
        tap( () => console.log('tap después del skip'))
    )

counter$ 
.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')      
});