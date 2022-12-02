/**
 *  --- sampleTime ---
 *  Emite la emisión más reciente del Observable fuente en cada periodo de tiempo determinado.
 *  Toma una muestra del Observable fuente a intervalos periódicos de tiempo, emitiendo la emisión más reciente en dicho periodo de tiempo.
 *  sampleTime emite la emisión más reciente del Observable fuente, desde el último muestreo, a no ser que la fuente no haya emitido nada desde
 *  el último muestreo. El muestreo ocurre de forma periódica, cada period milisegundos (o la unidad de tiempo definida por el argumento opcional scheduler.) 
 *  El muestreo comienza en cuando se realice la suscripción al Observable resultante.
 *   
 * */
import { fromEvent, interval } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

// Ejemplo 1
// Emitir el valor más reciente desde el último muestreo, realizado cada 2 segundos

const number$ = interval(1000);

number$.pipe(sampleTime(2000))
// .subscribe(console.log);
// Salida: 0, 2, 4, 6, 8...

// Ejemplo 2
// Cada segundo, emitir el click más reciente
const clicks = fromEvent<MouseEvent>(document, "click");
clicks.pipe(
    sampleTime(1000), // es mas eficiente poner antes de mapear el sampletime
    map( ({x, y}) => ({ x,y }) )    
    )
.subscribe((x) => console.log(x));


