/**
 *  --- auditTime ---
 *  Ignora los valores de la fuente durante un periodo de tiempo, tras el cual emite el valor más reciente del Observable fuente.
 *  auditTime es similar a throttleTime, pero emite el último valor del periodo de silenciamiento, en lugar del primero. 
 *  auditTime emite el valor más reciente del Observable fuente en cuanto su temporizador interno se deshabilita, 
 *  e ignora los valores de la fuente mientras el temporizador está habilitado. Inicialmente, el temporizador está deshabilitado. 
 *  En cuanto llega el primer valor de la fuente, se habilita el temporizador. Tras un periodo de tiempo, determinado por duration, 
 *  se deshabilita el temporizador y se emite el valor más reciente que haya emitido la fuente, en el Observable resultante. 
 *  Este proceso se repite con cada valor de la fuente. auditTime puede recibir un SchedulerLike opcional para gestionar los temporizadores.
 * */
import { fromEvent } from 'rxjs';
import { map, tap, auditTime } from 'rxjs/operators';

// Ejemplo 1 
// Hallar el ultimo valor antes de hacer click
const clicks = fromEvent<MouseEvent>(document, "click");
clicks.pipe(
    map( ({ x }) => x ),
    tap( valor => console.log('tap', valor)),
    auditTime(2000)
)
.subscribe((x) => console.log(x));

