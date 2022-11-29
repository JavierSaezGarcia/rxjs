import { Observable, Observer } from 'rxjs';
// const obs$ = Observable.create(); forma antigua

/////////////////////////////////
/// otra forma es crear un Observer que no es mas que una interfaz que nos obliga a establecer lo que se necesita para quye sea un observer valido
///////////////////////////////

const observador: Observer<any> = {
  next: valor => console.log('Siguiente [next]', valor),
  error: myerror => console.warn("Mi error[observer]", myerror),
  complete: () => console.info('Completado [observer]')
}

// este observable emitira un objeto y subs que son subscripciones y son como gente que esta pendiente de las emisiones de mi Observable
// el simbolo $ dolar es para indicar que es una constante de un objeto observable y es una convención usar el dolar junto al nombre
// Tambien es buena practica poner que tipo de informacion se va a emitir, en este caso strings
const obs$ = new Observable<string>( subs => {
  // subscriociones que se van a emitir
  subs.next('Hola');
  subs.next('Mundo');
  subs.next('Como');
  subs.next('Estas');
  // subs.next(1) Esto como hemos tipado a string dara un error

  // forzar un error
  const a = undefined;
  // forzamos una propiedad de a que llamamos nombre pero resulta que a es undefined y por tanto no tiene propiedades
  //a.nombre = 'Javier';


  // terminamos la subcripcion
  subs.complete();

  // los siguientes no se verán porque se ha terminado la subscripcion
  subs.next('No me ');
  subs.next('Leo');

});

// obs$.subscribe( resp => console.log(resp));

// desde ECS6 no hace falta poner resp dos veces y se puede omitir y sería lo mismo
obs$.subscribe( console.log );

// PARA QUE UN OBSERVABLE SE EJECUTE DEBE TENER AL MENOS UNA SUBSCRIPCION AUNQUE PUEDEN SER VARIAS

// obs$.subscribe({
  
//   // primero se ejecutaria el callback llamado 'next' en el cual recibimos el valor y no devuelve nada ademas de ser que es opcional, 
//   // despues sae ejecutaria el segundo argumento que tambien es opcional y corresponderia al error 
//   // y el tercero el complete
//   // En las nuevas versiones de rxjs hay que anteponer las propiedades (next:, error:, y complete: ), segun sea cada una a las variables valor, error y ()
//   next: mivalor => console.log('Next: ', mivalor), 
//   error: mierror => console.warn('Error: ', mierror), 
//   complete: () => console.log('COMPLETE')
  
// });



// obs$.subscribe( observador );

// obs$.subscribe()
