/**
 * --- UNSUBSCRIBE , ADD ---
 */


import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('next: ', valor),
  error: myerror => console.warn("error: ", myerror),
  complete: () => console.info('completado, ojo si me ves es porque he usado complete() de la interfaz y he ejecutado el setTimeout a los 4 segundos')
}

const intervalos$ = new Observable<number>( misubscripcion => {
  // Creamos un contador declarando una variable let contador
  let count = 0;
  const intervalo = setInterval( () => {
      // lo incrementamos en uno cada segundo
      count++;
      // y llamamos al next
      misubscripcion.next( count );
      // // Si contador llega a 10 se completa la subcripcion
      // if(count === 10){
      //   misubscricion.complete()
      //   console.info("Completado");
      // }
  }, 1000);
  setTimeout( () => {
    misubscripcion.complete();
  }, 4000);
  // cuando se completa la subscripcion complete de la interfaz
  // continua con el return limpiando el interval con clearInterval()
  return () => {
    clearInterval(intervalo);
    console.log('Intervalo destruido y me ejecuto despues de completar la subscripcion')
  }
})

const subs1 = intervalos$.subscribe( observer );
const subs2 = intervalos$.subscribe( observer );
const subs3 = intervalos$.subscribe( observer );

// concatenamos adds para solo hacer un unsubscribe que los unsubscribe a todos
subs1.add( subs2 );
subs2.add( subs3 );
     

setTimeout( () => {
  // con un unsubscribe es sufu¡iciente porque estan concatenados
  subs1.unsubscribe() 
  // subs2.unsubscribe()
  // subs3.unsubscribe()

  
}, 6000) // a los 6 segundos hago un unsubscribe





