/**
 *  --- EJERCICIO BARRA DE PROGRESO ---
 */
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');

texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique tortor eros. Curabitur tristique libero quis nulla vulputate vestibulum. Duis placerat ultrices diam, at posuere justo dignissim at. Duis venenatis maximus sapien, ac vehicula elit bibendum sed. Phasellus a ligula nec ipsum ullamcorper laoreet. Cras faucibus tellus ac sapien cursus blandit. Sed vel aliquam sapien. Nam accumsan sem id semper venenatis. Morbi volutpat libero non nulla cursus ornare. Morbi at euismod est. Fusce efficitur, elit a convallis pharetra, ipsum eros luctus arcu, sit amet congue quam velit eget nibh. Vivamus aliquam facilisis semper. Sed egestas dui sapien, viverra tincidunt mauris auctor sed. Morbi egestas porta nisl ut consequat. Nam malesuada pharetra sem et ultrices.
<br><br>
Mauris laoreet lacus id justo mollis, in convallis enim bibendum. Vestibulum vehicula ipsum ut dignissim suscipit. Integer nec congue enim, et viverra libero. Fusce quam nibh, condimentum et scelerisque nec, rutrum ut ex. Sed sed venenatis augue. Suspendisse potenti. Praesent lobortis ante nec tortor fermentum, sit amet maximus tortor suscipit. Vestibulum a ultrices metus. Nam at luctus neque, nec scelerisque ipsum. Cras varius accumsan erat vel feugiat. Etiam vitae nulla ac nunc vulputate tincidunt.
<br><br>
Phasellus convallis cursus est, id viverra ante volutpat sit amet. Aliquam sollicitudin felis ex, non aliquet libero venenatis et. Nam lobortis eget dolor et elementum. Pellentesque neque ligula, efficitur lacinia mi vitae, sollicitudin dapibus magna. Donec sed sem a urna faucibus sollicitudin. Aenean elementum sit amet sapien et lobortis. Maecenas et iaculis nulla. Fusce non nunc accumsan, pretium mauris sit amet, venenatis ante. Vestibulum quam dolor, suscipit viverra facilisis sit amet, eleifend a purus. Suspendisse quam nisi, pulvinar a ornare quis, malesuada sed ligula. Nulla facilisi. Aliquam quis fermentum elit. Suspendisse luctus, nisi eget egestas vulputate, nulla dui auctor enim, ut fermentum eros eros in mi. Phasellus gravida est sed est rutrum efficitur ac a dui. Phasellus a dolor vitae tortor blandit posuere. In sit amet sapien ullamcorper, mollis justo vitae, imperdiet purus.
<br><br>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur, quam at mollis feugiat, leo ligula commodo nibh, id dignissim magna est volutpat mi. Proin ullamcorper sapien non nisl volutpat venenatis. Nullam quis scelerisque enim, ut facilisis arcu. Aliquam nibh magna, commodo nec ex ut, dignissim consequat turpis. Vestibulum tristique non urna vel accumsan. Proin ultrices orci nec lectus rutrum varius. Suspendisse a nunc libero. Mauris pellentesque felis id sapien fringilla convallis. Praesent dictum metus tortor, vitae tincidunt tortor bibendum vel.
<br><br>
Aliquam turpis nunc, tempor vitae mauris ut, fermentum pellentesque sapien. Donec faucibus ex a auctor dictum. Mauris venenatis tristique tellus, sit amet fermentum nunc sagittis vitae. Proin porta volutpat diam, a pretium arcu. Nunc posuere orci ac ante elementum dictum. In ultrices sollicitudin augue, ac dictum diam facilisis sed. Curabitur ante nibh, malesuada ac cursus vitae, varius eu dolor. Sed condimentum sit amet dui ac imperdiet. Vestibulum tristique leo ac nisl viverra, porttitor suscipit neque sollicitudin. Morbi maximus, sem in varius dignissim, odio arcu volutpat justo, finibus mattis lectus eros et est. Integer tristique odio vitae euismod maximus. Sed vitae erat tellus.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique tortor eros. Curabitur tristique libero quis nulla vulputate vestibulum. Duis placerat ultrices diam, at posuere justo dignissim at. Duis venenatis maximus sapien, ac vehicula elit bibendum sed. Phasellus a ligula nec ipsum ullamcorper laoreet. Cras faucibus tellus ac sapien cursus blandit. Sed vel aliquam sapien. Nam accumsan sem id semper venenatis. Morbi volutpat libero non nulla cursus ornare. Morbi at euismod est. Fusce efficitur, elit a convallis pharetra, ipsum eros luctus arcu, sit amet congue quam velit eget nibh. Vivamus aliquam facilisis semper. Sed egestas dui sapien, viverra tincidunt mauris auctor sed. Morbi egestas porta nisl ut consequat. Nam malesuada pharetra sem et ultrices.
<br><br>
Mauris laoreet lacus id justo mollis, in convallis enim bibendum. Vestibulum vehicula ipsum ut dignissim suscipit. Integer nec congue enim, et viverra libero. Fusce quam nibh, condimentum et scelerisque nec, rutrum ut ex. Sed sed venenatis augue. Suspendisse potenti. Praesent lobortis ante nec tortor fermentum, sit amet maximus tortor suscipit. Vestibulum a ultrices metus. Nam at luctus neque, nec scelerisque ipsum. Cras varius accumsan erat vel feugiat. Etiam vitae nulla ac nunc vulputate tincidunt.
<br><br>
Phasellus convallis cursus est, id viverra ante volutpat sit amet. Aliquam sollicitudin felis ex, non aliquet libero venenatis et. Nam lobortis eget dolor et elementum. Pellentesque neque ligula, efficitur lacinia mi vitae, sollicitudin dapibus magna. Donec sed sem a urna faucibus sollicitudin. Aenean elementum sit amet sapien et lobortis. Maecenas et iaculis nulla. Fusce non nunc accumsan, pretium mauris sit amet, venenatis ante. Vestibulum quam dolor, suscipit viverra facilisis sit amet, eleifend a purus. Suspendisse quam nisi, pulvinar a ornare quis, malesuada sed ligula. Nulla facilisi. Aliquam quis fermentum elit. Suspendisse luctus, nisi eget egestas vulputate, nulla dui auctor enim, ut fermentum eros eros in mi. Phasellus gravida est sed est rutrum efficitur ac a dui. Phasellus a dolor vitae tortor blandit posuere. In sit amet sapien ullamcorper, mollis justo vitae, imperdiet purus.
<br><br>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur, quam at mollis feugiat, leo ligula commodo nibh, id dignissim magna est volutpat mi. Proin ullamcorper sapien non nisl volutpat venenatis. Nullam quis scelerisque enim, ut facilisis arcu. Aliquam nibh magna, commodo nec ex ut, dignissim consequat turpis. Vestibulum tristique non urna vel accumsan. Proin ultrices orci nec lectus rutrum varius. Suspendisse a nunc libero. Mauris pellentesque felis id sapien fringilla convallis. Praesent dictum metus tortor, vitae tincidunt tortor bibendum vel.
<br><br>
Aliquam turpis nunc, tempor vitae mauris ut, fermentum pellentesque sapien. Donec faucibus ex a auctor dictum. Mauris venenatis tristique tellus, sit amet fermentum nunc sagittis vitae. Proin porta volutpat diam, a pretium arcu. Nunc posuere orci ac ante elementum dictum. In ultrices sollicitudin augue, ac dictum diam facilisis sed. Curabitur ante nibh, malesuada ac cursus vitae, varius eu dolor. Sed condimentum sit amet dui ac imperdiet. Vestibulum tristique leo ac nisl viverra, porttitor suscipit neque sollicitudin. Morbi maximus, sem in varius dignissim, odio arcu volutpat justo, finibus mattis lectus eros et est. Integer tristique odio vitae euismod maximus. Sed vitae erat tellus.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique tortor eros. Curabitur tristique libero quis nulla vulputate vestibulum. Duis placerat ultrices diam, at posuere justo dignissim at. Duis venenatis maximus sapien, ac vehicula elit bibendum sed. Phasellus a ligula nec ipsum ullamcorper laoreet. Cras faucibus tellus ac sapien cursus blandit. Sed vel aliquam sapien. Nam accumsan sem id semper venenatis. Morbi volutpat libero non nulla cursus ornare. Morbi at euismod est. Fusce efficitur, elit a convallis pharetra, ipsum eros luctus arcu, sit amet congue quam velit eget nibh. Vivamus aliquam facilisis semper. Sed egestas dui sapien, viverra tincidunt mauris auctor sed. Morbi egestas porta nisl ut consequat. Nam malesuada pharetra sem et ultrices.
<br><br>
Mauris laoreet lacus id justo mollis, in convallis enim bibendum. Vestibulum vehicula ipsum ut dignissim suscipit. Integer nec congue enim, et viverra libero. Fusce quam nibh, condimentum et scelerisque nec, rutrum ut ex. Sed sed venenatis augue. Suspendisse potenti. Praesent lobortis ante nec tortor fermentum, sit amet maximus tortor suscipit. Vestibulum a ultrices metus. Nam at luctus neque, nec scelerisque ipsum. Cras varius accumsan erat vel feugiat. Etiam vitae nulla ac nunc vulputate tincidunt.
<br><br>
Phasellus convallis cursus est, id viverra ante volutpat sit amet. Aliquam sollicitudin felis ex, non aliquet libero venenatis et. Nam lobortis eget dolor et elementum. Pellentesque neque ligula, efficitur lacinia mi vitae, sollicitudin dapibus magna. Donec sed sem a urna faucibus sollicitudin. Aenean elementum sit amet sapien et lobortis. Maecenas et iaculis nulla. Fusce non nunc accumsan, pretium mauris sit amet, venenatis ante. Vestibulum quam dolor, suscipit viverra facilisis sit amet, eleifend a purus. Suspendisse quam nisi, pulvinar a ornare quis, malesuada sed ligula. Nulla facilisi. Aliquam quis fermentum elit. Suspendisse luctus, nisi eget egestas vulputate, nulla dui auctor enim, ut fermentum eros eros in mi. Phasellus gravida est sed est rutrum efficitur ac a dui. Phasellus a dolor vitae tortor blandit posuere. In sit amet sapien ullamcorper, mollis justo vitae, imperdiet purus.
<br><br>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur, quam at mollis feugiat, leo ligula commodo nibh, id dignissim magna est volutpat mi. Proin ullamcorper sapien non nisl volutpat venenatis. Nullam quis scelerisque enim, ut facilisis arcu. Aliquam nibh magna, commodo nec ex ut, dignissim consequat turpis. Vestibulum tristique non urna vel accumsan. Proin ultrices orci nec lectus rutrum varius. Suspendisse a nunc libero. Mauris pellentesque felis id sapien fringilla convallis. Praesent dictum metus tortor, vitae tincidunt tortor bibendum vel.
<br><br>
Aliquam turpis nunc, tempor vitae mauris ut, fermentum pellentesque sapien. Donec faucibus ex a auctor dictum. Mauris venenatis tristique tellus, sit amet fermentum nunc sagittis vitae. Proin porta volutpat diam, a pretium arcu. Nunc posuere orci ac ante elementum dictum. In ultrices sollicitudin augue, ac dictum diam facilisis sed. Curabitur ante nibh, malesuada ac cursus vitae, varius eu dolor. Sed condimentum sit amet dui ac imperdiet. Vestibulum tristique leo ac nisl viverra, porttitor suscipit neque sollicitudin. Morbi maximus, sem in varius dignissim, odio arcu volutpat justo, finibus mattis lectus eros et est. Integer tristique odio vitae euismod maximus. Sed vitae erat tellus.
`;

const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div');

progressBar.setAttribute('class','progress-bar');

body.append(progressBar);

// Quiero una funcion que me haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    const { 
     scrollTop,
     scrollHeight,
     clientHeight
    } = event.target.documentElement;
    console.log(scrollTop, scrollHeight, clientHeight);
    return ( scrollTop / ( scrollHeight - clientHeight ))*100
}

// Primer paso seria subscribirme al scroll de mi HTML
// Streams
const scroll$ = fromEvent( document , 'scroll');

// scroll$.subscribe( console.log )

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`
})


