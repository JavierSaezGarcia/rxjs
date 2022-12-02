/**
 *  --- TAKE ---
 *  LIMITA LA SALIDA DE VALORES SEGUN EL NUMERO QUE TENGA ENTRE PARENTESIS
 * 
 * */
import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numeros$ = of(1,2,3,4,5,6,7,8,9)
    .pipe( tap(t1 => console.log('tap1', t1))) 
    // aunque hemos puesto el tap() para que cuente la enumeracion 
    // vemos que prevalece el take en todos los taps esten o no en el mismo pipe

numeros$.pipe(
    tap( t2 => console.log('tap2', t2)),
    take(3)
).subscribe({
    next: value => console.log('next', value),
    complete: () => console.log('Complete')      
});