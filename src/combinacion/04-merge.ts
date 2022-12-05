/**
 *  --- merge  ---
 *  Crea un Observable de salida que emite concurrentemente los valores de todos los Observables de entrada.
 *  Une varios Observables en uno solo.
 * 
 * */

 import { concat, fromEvent, merge, timer, of } from "rxjs";
 import { map, tap } from "rxjs/operators";

// Primer ejemplo ////////////////////////////////////////////////////
const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent(document, 'click');

merge( 
    keyup$.pipe(map((ev) => console.log(ev))), 
    click$.pipe(map((ev) => console.log(ev)))
)
.subscribe( console.log );



 // Segundo ejemplo con merge y concat paara comparar ////////////////////////

 const first$ = timer(3000).pipe(map(value => value + " Primero"));
 
 const second$ = timer(1000).pipe(map(value => value +" Segundo"));
 
 const third$ = timer(2000).pipe(map(value => value +" Tercero"));
 
 merge(first$, second$, third$).subscribe(console.log);
 // Salida: (1s) Segundo (1s) Tercero (1s) Primero
 
 concat(first$, second$, third$).subscribe(console.log);
 // Salida: (3s) Primero (1s) Segundo (2s) Tercero


 // Tercer ejemplo //////////////////////////////////////////////////////
 const fruit$ = of("Cereza", "Fresa", "Arándano");

fruit$
  .pipe(
    tap((fruit) => console.log(`Antes: ${fruit}`)),
    map((fruit) => fruit.toUpperCase()),
    tap((fruit) => console.log(`Después: ${fruit}`))
  )
  .subscribe();