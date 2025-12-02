/*
obtener un elemento de referencia.este sera el nodo de html donde vmos a crear el nuevo elemento.
*/


const peliculas = document.getElementById("peliculas");

/*
Para crear un nuebo ekemento usamos createElement()

sintaxis:


*/

const nuevaPeli= document.createElement("li");

peliculas.append(nuevaPeli);

nuevaPeli.innerText = "terminator";

console.log(peliculas)

nuevaPeli.classList.add("pelicula" , "fondo-dos");