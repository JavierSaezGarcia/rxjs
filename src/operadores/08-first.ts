/**
 *  --- FIRST ---
 *  TOMA EL PRIMER VALOR DEL SUBCRIBE Y COMPLETA TODO EL OPERADOR PERO NO MUESTRES MAS QUE EL PRIMERO
 * 
 * */
import { fromEvent } from 'rxjs';
import { first, tap, map  } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    tap<MouseEvent>( console.log),
    //first()// seria lo mismo que take(1)
    // ahora queremos que el evento de la coordenada clientY sea mayor de 150, clientY=0 es arriba del todo
    // first<MouseEvent>( event => event.clientY >= 150 )

    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))

    map( ({ clientY,clientX }) => ({
            clientY,clientX
        })),
    first( event => event.clientY >= 150 )
    
)
.subscribe({
    next: valor => console.log('next', valor),
    complete: () => console.log('Complete')   
})