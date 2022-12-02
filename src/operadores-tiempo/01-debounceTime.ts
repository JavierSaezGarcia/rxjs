/**
 *  --- debounceTime ---
 *  Emite un valor del Observable fuente si, y solo si, pasa un periodo de tiempo determinado sin que este emita ningún valor
 *   
 * */
import { fromEvent  } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
// El debounceTime nos ayuda a que nosotros podamos contar cuántas milésimas de segundo han pasado desde la última
// emisión y si es también ésima de segundo sobrepasan el parámetro que tenemos en los paréntesis.
// Entonces emitirá a dicho valor el debounceTime nos va a ayudar a nosotros a poder restringir la cantidad de
// emisiones que nuestro sours o nuestro observamos inicial está emitiendo.
// debounceTime(1000)  Un segundo (1000 milisegundos) desde la ultima emision

// Ejemplo 1
const key$ = fromEvent<KeyboardEvent>(document, "keydown");

// key$.pipe(debounceTime(2000)).subscribe(({ code }) => console.log(code));
// Salida: KeyE la ultima letra que que pasados tres segundos sin pulsar nada haya sido pulsada

// *****************************************************************
//Ejemplo 2 
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input , 'keyup');

input$.pipe(
    debounceTime(1000), // busca el ultimo valor de hace 1 segundo
    map(event => (event.target as HTMLInputElement).value), // toma dicho valor
    distinctUntilChanged() // comprueba que no sea igual al anterior al actual, si es igual, no lo muestra
)
.subscribe( console.log )

// *******************************************************
// Ejemplo 3
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(debounceTime(1000))
  .subscribe(({ screenX, screenY }) =>
    console.log(
      `Tu último click fue en la posición x: ${screenX}, y: ${screenY}`
    )
  );
// Salida: Tu último click fue en la posición x: la que sea  , y: la que sea

