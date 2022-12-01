/**
 *  --- OPERADOR DE UTILIDAD: TAP ---
 */
import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numeros$ = range(1,5);

numeros$.pipe(
    // tap se comporta como un observer y podemos mandar elementos sueltos
    tap( x => console.log(`Antes: ${ x }  ${ typeof(x)} `)),
    map( val => (val * 10).toString()),
    tap( x => console.log(`Después: ${ x }  ${ typeof(x)} `)),
    tap({
        next: valor => console.log('mas despues', valor),
        complete: () => console.log('Se termino todo')
    })

).subscribe(val => console.log(`subs: ${ val }  ${ typeof(val)}`));


