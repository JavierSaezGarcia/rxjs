import { of, range, asyncScheduler, observeOn} from "rxjs";

/**
 *  --- RANGE ---
 * secuencia en base a un rango de números
 * la secuencia es sincrona
 */
const src$ = of(1,2,3,4,5,6);

src$.subscribe( console.log );

console.log('Inicio range');
const rango$ = range(1,50);
rango$.subscribe( console.log)
console.log('Fin range');

// recordamos que son emisiones porque observamos que si cambiamos el rango
console.log('Inicio range');
const rango2$ = range(-5,10); // El primer parametro es el inicio y el segundo son las veces que se incrementa
rango2$.subscribe( console.log );
console.log('Fin range');


console.log('Inicio range');
const rango3$ = range(5, 2); // El primer parametro es el inicio y el segundo son las veces que se emite de forma ascendente
rango3$.subscribe( console.log );
console.log('Fin range');

console.log('Inicio range con un unico valor');
const rango4$ = range(5); 
// El rango de inicio por defecto es cero y por tanto
// al poner un unico valor rxjs entiende que es el numero de emisiones a partir de cero
rango4$.subscribe( console.log );
console.log('Fin range con un unico valor');

// AHORA CON ASYNCSCHEDULER (ASINCRONO)
console.log('Inicio range ASINCRONO');
const rango5$ = range(1, 5).pipe(observeOn(asyncScheduler)); // para usar asyncScheduler con range hay que usar un pipe(con un observerON)
rango5$.subscribe( console.log );
console.log('Fin range ASINCRONO');




