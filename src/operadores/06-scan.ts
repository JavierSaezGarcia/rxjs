/**
 *  --- SCAN ---
 * Aplica una función acumuladora a los valores del Observable fuente y retorna cada resultado inmediato
 */
import { from, fromEvent, range } from 'rxjs';
import { scan, reduce, map, mapTo  } from 'rxjs/operators';


// scan ( ( acc, curr ) => acc + curr, 0);
const numbers = [1,2,3,4,5];
const totalAcumulador = ( acc ,curr) => acc + curr;

// reduce
from( numbers ).pipe(
    reduce( totalAcumulador, 0)
).subscribe( console.log ); // emite solo un valor acumulado del array( suma de todos sus valores ) osea el valor final =  15

//Scan
from( numbers).pipe(
    scan( totalAcumulador,0 )
).subscribe( console.log ); // emite varios valores acumulados del array uno a uno 1, 3, 6, 10, 15

// Redux
interface Usuario {
    id?:string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'ban', autenticado: false, token: null},
    {id: 'ban', autenticado: true, token: '123'},
    {id: 'ban', autenticado: true, token: 'ABC123'},
];

const state$ = from( user ).pipe(
    scan<Usuario, Usuario>((acc: Usuario, curr: Usuario ) => {
        return {...acc, ...curr}
    },{ edad: 33 })
);

const id$ = state$.pipe(
   map(state => state.id)
)
id$.subscribe( console.log )

// otros ejemplos de scan

const clicks = fromEvent(document, "click");
const ones = clicks.pipe(mapTo(1));
const seed = 0;
const count = ones.pipe(scan((acc, one) => acc + one, seed));
count.subscribe((x) => console.log(x));

////////////////////// otro


const letter$ = from(["R", "x", "J", "S", " ", "m", "o", "l", "a"]);

letter$.pipe(scan((acc, val) => acc + val)).subscribe(console.log);

///// otro
const number$ = range(1, 10);

number$.pipe(scan((acc, val) => acc + val, 10)).subscribe(console.log);