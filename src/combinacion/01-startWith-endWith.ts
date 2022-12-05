/**
 *  --- startWith y endWith ---
 *  startWith : Emite los elementos que se especifiquen como argumentos antes de empezar a emitir las emisiones del Observable fuente.
 *  Primero emite sus argumentos en orden, y después las emisiones de la fuente.
 * 
 *  endWith: Devuelve un observable que emitirá todos los valores de la fuente y, a continuación,
 *  emitirá sincrónicamente los valores proporcionados inmediatamente después de que se complete la fuente.
 * 
 * */


import { of } from 'rxjs';
import { startWith, endWith  } from 'rxjs/operators';


const numeros$ = of(1,2,3) // of es sincrono
    .pipe(
        startWith('a',0,true), // sincrono
        endWith('Fin',2000, false, 'Adios') //sincrono
    )

numeros$.subscribe( console.log )

