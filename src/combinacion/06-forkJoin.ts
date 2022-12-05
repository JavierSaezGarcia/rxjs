/**
 *  --- forkJoin- Lab ---
 *  Acepta un Array de Observables o un diccionario de Observables, y retorna otro Observable que emite o bien un array de valores 
 *  en el mismo orden que el array proporcionado, o un diccionario de valores con la misma forma que el diccionario proporcionado.
 *  
 *  forkJoin: espera a que todos los Observables se completen, y combina sus últimas emisiones.
 * 
 * */

 import { forkJoin, from, of, interval } from 'rxjs';
 import { delay, take } from "rxjs/operators";


 // Primer ejemplo //////////////////////////////////////
 const language$ = forkJoin([
    of("Java", "Ruby", "Haskell"),
    from(["Orientado a objetos", "Multiparadigma", "Funcional"]),
  ]);
  
  // Combinar la última emisión de dos Observables distintos
  language$
    //.subscribe(console.log);
  // Salida: ["Haskell", "Funcional"]

  // SEgundo ejemplo
  const numeros$ = of(1,2,3,4); // 1..2..3..4
  const intervalo$ = interval(1000).pipe(take(3)); // 0..1..2
  const letra$ = of('a','b','c').pipe(delay(3500)); // a..b..c

forkJoin({
    numeros$,
    intervalo$,
    letra$
})
//.subscribe( console.log )

    // salida 4..2..'c' en este orden 

// Otra forma de hacerlo enviando objeto
forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letra$
 })
 .subscribe( resp => 
    console.log(resp.num,resp.int, resp.let)
)