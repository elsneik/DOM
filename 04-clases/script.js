/*
Acceder al primer elemento de la lista.
*/

const botanas = document .getElementsByTagName("li");

console.log(botanas[0]);


/*
Propiedad classList 

Devuelve un DOM token list o listado de Clases en el DOM 
La lista de clases de un elemento html.

sintaxis:

   elemento.classList

*/

console.log( botanas[0].classList);// DOM Token List

console.log(botanas[0].classList[0]);// botana

/*
Podemos agregar clases usando el metodo add()

Sintaxis:

   elemento.classList.add("nombre-clase");


*/



botanas[2].classList.add("picante");
console.log( botanas[2].classList);

/*
  Podemos verificar si existe una clase dentro de un elemento con el metodo contains()
     sintaxis:
       
     Elemento.classList.contains("nombre-clase");

    -devuelve true si existe la clase
     -devielve false si no existe la clase

*/


console.log ( botanas[1].classList.contains("botana");//true

console.log ( botanas[1].classList.contains("picante");//false



/*
Podemos eliminar una clase usando el metodo remove()

sintaxis: elemento.classList.remove("class-name");

*/

botanas[3].classList.remove("botana");
botanas[2].classList.add("picante");
console.log( botanas[2].classList);