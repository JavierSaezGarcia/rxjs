/**
 * Explicación de operador como un "accesorio que se acopla a la manguera de agua de un jardin con el fin de tener diferentes flujos de agua"
 * El concepto de operador es un operador nos permite a nosotros como conectarle una pieza al flujo de información
 * y esa pieza hace algo en particular.
 * Puede ser que nos filtre el agua.
 * Puede ser que bloqueé totalmente el agua.
 * Puede ser que salga el agua en algún tipo de chorro especial para regar rosas y no destruirlas.
 */

// Primer operador MAP
/**
 *  --- OPERADOR MAP ---
 */
import { fromEvent, range } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

// range(1,5).subscribe( val => console.log( val * 10 ))

// range(1,5).pipe()
//     .subscribe( val => console.log( val * 10 ))

// range(1,5).pipe(
//     // el map va a tener un tipo number de entrada (range()) y otro tipo number de salida return val * 10
//     map<number, number>( val => {
//        return val * 10
//     })
// )
// .subscribe( console.log )

// El poner al fromEvent el tipo KeyboardEvent (que aparece en el console.log ) hace que ya no sea tan generico y puedas extraer todos 
// los eventos
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

// keyup$.subscribe( val => console.log('map', val.code ));
const keyupCode$ = keyup$.pipe(
    map( event  => event.code )
);
keyupCode$.subscribe( code =>  console.log('map: ', code));

//// MAPTO DEPRECATED////////////////

const keyupMapTo$ = keyup$.pipe(
    mapTo( 'Tecla presionada' )
);

keyupMapTo$.subscribe( code =>  console.log('mapTo: ', code));



