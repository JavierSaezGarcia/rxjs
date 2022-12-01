/**
 *  --- REDUCE ---
 * APLICA UNA FUNCION ACUMULADORA A LAS EMISIONES PRODUCIDAS POR MI OBSERVABLE
 */
import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

// reduce ( ( acc, curr ) => acc + curr, 0);
// OJO no tendremos ni una emision hasta que no se complete el observable
// Reduce en javascript
const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number ) => {
    return acumulador +  valorActual;
}

const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total);

interval(1000).pipe(
    take(4), // TOMA 3 VALORES DEL interval pero empieza en el cero
    tap( console.log ),
    reduce( totalReducer, 1 ) // 1 inicial + 1 del interval = 2, + 2 del interval = 4 + 3 del interval = 7. SI NO SE INDICA EL VALOR INICIAL ES CERO
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
})