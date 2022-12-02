/**
 *  --- Otras peticiones ajax ---
 *  
 * */

import { ajax } from 'rxjs/ajax';



const url = 'https://httpbin.org/delay/1';
// En GET primero solicitamos la direccion, en el segundo objeto con los parametros que enviamos en los headers que queramos
// ajax.get( url, {
//     'Contect-type': 'application/text',
//     'mi-token': 'esto-lo-envio'
// });

// EN el POST el primero es la URL, el segundo el body que querenmos enviar, el tercero los headers
// ajax.post( url, {
//     id:1,
//     nombre:'Javier',
//     apellido: 'Saez'
// }, {
//     'Contect-type': 'application/json',
//     'mi-token': 'MITOKEN'
// }).subscribe( console.log )

// El PUT se genera  igual que el post
// ajax.post( url, {
//     id:1,
//     nombre:'Javier',
//     apellido: 'Saez'
// }, {
//     'Contect-type': 'application/json',
//     'mi-token': 'MITOKEN'
// }).subscribe( console.log )


// con delete seria igual que el post pero sin body
// ajax.delete( url,  {
//         'Contect-type': 'application/json',
//         'mi-token': 'MITOKEN'
//     }).subscribe( console.log )


// otra forma de realizar peticiones de forma mas dinamica
ajax({
    url: url, // url
    method: 'POST', // elegir el metodo pero que incluso eligiendo el DELETE que daria error con el metodo anterior en este caso no da error
    headers: {
        'mi-token':'123ADV' // elegor que cabeceras queremos enviar
    },
    body: {
        // elegir que enviamos en el cuerpo del post
        id: 1,
        nombre: 'Javier'
    }

})
.subscribe( console.log )