/**
 *  --- distinctUntilKeyChanged ---
 *  Retorna un Observable que emite los elementos del Observable fuente cuya propiedad especificada sea distinta a la del elemento anterior
 *   
 * */
import { from } from 'rxjs';
import { distinctUntilKeyChanged  } from 'rxjs/operators';


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
        distinctUntilKeyChanged('nombre')
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

