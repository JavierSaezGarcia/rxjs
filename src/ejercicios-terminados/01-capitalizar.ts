/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import { from, of } from "rxjs";
import { map } from 'rxjs/operators'

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{

    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];  
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());  
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    // for( let nombre of nombres ) {
    //   console.log( capitalizar(nombre) )
    // }

    // 1ª forma con 'from' transformo un arreglo de nombres en un observable
    from(nombres).pipe(
        // map( nombre => capitalizar(nombre) )   o seria lo mismo
        map( capitalizar )
    )
    .subscribe( console.log )
    // con el spread expandimos y propagamos el array 
    //const array = [ 1, 2, 3 ];
    // const result = [ ...array, 4, 5, 6 ];
    // result: [ 1, 2, 3, 4, 5, 6 ]
    of(...nombres).pipe(
        map( capitalizar )    )
    .subscribe( console.log )
  
  
  
  
})();
  