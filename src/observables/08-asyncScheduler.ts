import { asyncScheduler } from "rxjs";

/**
 *  --- ASYNCSCHEDULER ---
 *  
 */

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');

// asyncScheduler.schedule(saludar, 3000); 
// primero se pone la funcion que quiero que ejecute (sin parentesis para que no se ejecute en ese momento)
// segundo es el tiempo de espera hasta que se ejecute la funcion anterior


const saludar2 = (nombre: string) => console.log(`Hola ${ nombre }`);

// para pasarle el valor de nombre solo se puede hacer ocupando la posicion tercera que esta destinada al state
// asyncScheduler.schedule(saludar2, 3000, 'Javier');


// pero esta posicion solo admite un argumento no mas de uno. por tanto si 'const saludar2 = (nombre, apellido) => console.log(`Hola ${ nombre, apellido }`);'
// no funcionaria
const saludar3 = (nombre: string, apellido: string) => console.log(`Hola ${ nombre } ${ apellido}`);
// esto dara error
// asyncScheduler.schedule(saludar3, 3000, 'Javier','Saez');

const subs = asyncScheduler.schedule( function(state) { // esta funcion no puede hacerse como una funcion de flecha o lambda
    console.log('state', state);

    this.schedule( state + 1, 1000 ); // esto incrementa cada segundo el state en uno

}, 3000, 0); // el primer valor es el tiempo de espera (3seg) y el segundo lo que muestro inicialmente en este caso el 0

// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000);
// que ha ocurrido????
// primero espera 3 seg a ejecutar el asyncScheduler y despues muestra el contenido pero el setTimeout se pone en marcha al inicio
// por tanto cuenta el timepo de espera mas los 3 segundos restantes, por tanto solo muestra 3 valores hasta el unsubscribe se destruye el subscribe

// ahora lo vamos a hacer lo mismo anterior con el setTimeout pero con asyncscheduler
asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );