import { Observable, Observer, Subject, Subscription } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('next: ', valor),
  error: myerror => console.warn("error: ", myerror),
  complete: () => console.info('completado, ojo si me ves es porque he usado complete() de la interfaz y he ejecutado el setTimeout a los 4 segundos')
}

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval( 
      () => subs.next( Math.random() ), 1000
    );

    return () => {
      clearInterval( intervalID );
      console.log('Intervalo destruido y si no me ves es porque aun estoy ejecutando el setInterval por detras');
    }
});

/**
 * SUBJECT:
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */

// Subject es un tipo especial de Observable
const subject$ = new Subject();
// EN EL OBSERVABLE SUBJECT$ SIEMPRE LAS SUBSCRIPCIONES SON LAS MISMAS
const subscription = intervalo$.subscribe( subject$ )

// const subs1 = intervalo$.subscribe( rnd => console.log('subs1: ', rnd) )
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2: ', rnd) )

const subs1 = subject$.subscribe( observer )
const subs2 = subject$.subscribe( observer )

setTimeout(() => {

  // Muestro en 10
  subject$.next(10);
  // Completo la subscripcion
  subject$.complete();
  // Pero como el setInterval aun seguiria funcionando me desubscribo
  subscription.unsubscribe()
}, 4000);