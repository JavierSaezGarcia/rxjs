/**
 *  --- DISTINCT ---
 *  Retorna un Observable que emite todos los elementos del Observable fuente que sean distintos a los elementos anteriores
 *  
 *   
 * */
import { of, from } from 'rxjs';
import { distinct  } from 'rxjs/operators';

const numeros$ = of(1,1,3,3,5,4,5,3,2,8,4,5,6,5,3,4,5,7,5,2,7);

numeros$.pipe(
    distinct()
).subscribe(console.log)


// otro
const language$ = of(
    { name: "Java", type: "Orientado a objetos" },
    { name: "Ruby", type: "Multiparadigma" },
    { name: "Ruby", type: "Multiparadigma" },
    { name: "Haskell", type: "Funcional" },
    { name: "Haskell", type: "Funcional" },
    { name: "Java", type: "Orientado a objetos" },
    { name: "Ruby", type: "Multiparadigma" }
  );
  
  language$.pipe(distinct(({ name }) => name)).subscribe(console.log);
  /* Salida: 
  { name: "Java", type: "Orientado a objetos" }, 
  { name: "Ruby", type: "Multiparadigma" }, 
  { name: "Haskell", type: "Funcional" }
  */

  /// otra 

  interface Personaje {
    
    nombre: string;
  }
  
  const personajes: Personaje[] = [
    { nombre: "Javier" },
    { nombre: "Bartolo" },
    { nombre: "Miguel" },
    { nombre: "Bartolo" },
    { nombre: "Javier" },
  ];

from(personajes)  
    .pipe(
        distinct((p: Personaje) => p.nombre)
    )
    .subscribe({
        next: nombre => console.log('nombre', nombre),
        complete: () => console.log('complete')
    });
  
  // Salida:
  // { nombre: 'Javier' }
  // { nombre: 'Bartolo' }
  // { nombre: 'Miguel' }