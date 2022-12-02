/**
 *  --- distinctUntilChanged ---
 *  Retorna un Observable que emite todos los elementos emitidos por el Observable fuente que sean distintos al 
 *  VALOR ANTERIOR Y SOLO AL VALOR ANTERIOR ¡¡¡OJO!!!
 *  
 *   
 * */
import { of, from } from 'rxjs';
import { distinctUntilChanged  } from 'rxjs/operators';

const numeros$ = of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log)
// 1, 2, 1, 2, 3, 4


/////////////////

const fruit$ = of("Fresa", "Cereza", "Cereza", "Arándano", "Arándano", "Fresa");

fruit$.pipe(distinctUntilChanged()).subscribe(console.log);
// Salida: Fresa, Cereza, Arándano, Fresa



////////////////////// 
interface Personaje {
    
    nombre: string;
  }
  
  const personajes: Personaje[] = [
    { nombre: "Javier" },
    { nombre: "Bartolo" },
    { nombre: "Miguel" },
    { nombre: "Bartolo" },
    { nombre: "Javier" },
    { nombre: "Javier" },
    { nombre: "Miguel" },
    { nombre: "Miguel" },
    { nombre: "Miguel" },
    { nombre: "Bartolo" },
    { nombre: "Bartolo" }
  ];

from(personajes)  
    .pipe(
        distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
    )
    .subscribe({
        next: nombre => console.log('nombre', nombre),
        complete: () => console.log('complete')
    });
  
  // Salida:
  // { nombre: 'Javier' }
  // { nombre: 'Bartolo' }
  // { nombre: 'Miguel' }  
  // { nombre: 'Bartolo' } 
  // { nombre: 'Javier' }
  // { nombre: 'Miguel' }  
// { nombre: 'Bartolo' } 

