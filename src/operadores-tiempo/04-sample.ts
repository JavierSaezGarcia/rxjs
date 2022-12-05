/**
 *  --- sample ---
 *  Emite la emisión más reciente del Observable fuente cuando un segundo Observable, el notificador, emite un valor.
 *  Cuando el Observable notifier emite un valor o se completa, sample toma una muestra del Observable fuente y emite 
 *  la emisión más reciente desde el último muestreo, a no ser que la fuente no haya emitido nada desde el último muestreo. 
 *  En cuanto se lleve a cabo la suscripción al Observable resultante, también se realizará la del Observable notifier.
 * */
import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

// Ejemplo 1 
// Emitir el valor más reciente desde el último muestreo, realizado cuando interval emite (cada 2s)
const interval$ = interval(500);
const click$ = fromEvent( document, 'click');

interval$.pipe(
   sample(click$) // solo mostrara el ultimo valor del temporizador justo antes de hacer click
)
.subscribe(console.log)



