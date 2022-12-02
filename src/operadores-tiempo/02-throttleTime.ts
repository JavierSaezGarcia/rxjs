/**
 *  --- throttleTime ---
 *  Emite un valor del Observable fuente e ignora las emisiones siguientes durante un periodo de tiempo determinado. Después, repite el proceso
 *   
 * */
import { from, fromEvent, interval, zip, asyncScheduler } from 'rxjs';
import { throttleTime, map, distinctUntilChanged} from 'rxjs/operators';
/* 
throttleTime emite los valores del Observable fuente mientras su temporizador interno está deshabilitado, 
y los ignora mientras su temporizador está habilitado. Inicialmente, el temporizador está deshablitado. 
En cuanto se recibe el primer valor de la fuente, este se emite en el Observable resultante y se habilita e temporizador. 
Tras duration milisegundos (o la unidad temporal determinada internamente por el planificador opcional) se deshabilita el temporizador 
y se repite el proceso para el siguiente valor de la fuente. Opcionalmente, recibe un SchedulerLike para gestionar los temporizadores. 
ES LO OPUESTO A DEBOUNCETIME()
*/

// Ejemplo 1
const key$ = fromEvent<KeyboardEvent>(document, "keydown");

key$.pipe(
    throttleTime(5000),
    )
    // .subscribe(({ code }) => console.log(code));
// Salida: KeyX (2s) KeyO...





// Ejemplo 2
// El Observable fruit$ emite una fruta cada segundo
const fruit$ = zip(
    from(["Fresa", "Cereza", "Arándano", "Mora", "Frambuesa", "Grosella"]),
    interval(1000)
  ).pipe(map(([fruit]) => fruit));
  
fruit$.pipe(throttleTime(2000))
// .subscribe(console.log);
  // Salida: Fresa, Mora
///////////////////////////////////////////////



  // Ejemplo 3
  const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(throttleTime(3000))
//   .subscribe(({ screenX, screenY }) =>
//     console.log(
//       `Tu último click fue en la posición x: ${screenX}, y: ${screenY}`
//     )
//   );



// EJEMPLO 4 
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input , 'keyup');

input$.pipe(
    throttleTime(1000,asyncScheduler, {
        leading: false, 
        trailing: true
    }), // busca el ultimo valor de hace 1 segundo
    map(event => (event.target as HTMLInputElement).value), // toma dicho valor
    distinctUntilChanged() // comprueba que no sea igual al anterior al actual, si es igual, no lo muestra
)
.subscribe( console.log )
