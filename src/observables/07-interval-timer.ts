import { interval, timer } from "rxjs";

/**
 *  --- INTERVAL Y TIMER ---
 *  El interval y el timer son observables asincronos por naturaleza
 */
const observer = {
    next: (valor: any) => console.log('next: ', valor),
    error: null,
    complete: () => console.log('complete')
}
// Interval(1000) el valor es en milisegundos por tanto emitira valores desde 0 hasta infinito cada segundo
//const intervals$ = interval(1000) // como no hay nadie subscrito no hace nada
// pero si nos subscribimos...
// intervals$.subscribe( observer );


console.log('Inicio interval');
console.log('Fin interval');
// como podemos observar ejecuta LOS LOGS inicio y fin y despues se ejecuta el interval ANTERIOR porque es ASINCRONO
// pero no ejecuta el complete porque no tiene finalización o condicion que le diga un numero determinado de ejecuciones

// Timer es que despues de 2 milisegundos emitira el primer valor
const timer$ = timer(2000)
timer$.subscribe( observer )


console.log('Inicio timer');
console.log('Fin timer');
// Tambien observamos que ejecuta los console logs y 
// despues espera 2 segundos y emite el primer valor que es cero seguido del complete porque finalizó

///////////////////  FUNCIONES ESPECIALES DEL TIMER  //////////////////
console.log('fUNCIONES ESPECIALES TIMER');
const timer1$ = timer(0)
//timer1$.subscribe( observer )

const timer2$ = timer(2000, 1000) 
// ESTO ES COMO UN INTERVAL QUE INICIA A LOS 2 SEGUNDOS (2000) 
// Y DESPUES INICIA LA SECUENCIA CADA SEGUNDO (1000) QUE SERIA EL SEGUNDO PARAMETRO
// timer2$.subscribe( observer )

const hoyEn5 = new Date(); // fecha  ahora

hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 )  // le añade 5 segundos antes de ejecutarse

const timerDate$ = timer( hoyEn5 )  // esto hara que tenga que esperar 5 segundo antes de mostrar la emision del observer
timerDate$.subscribe( observer )

