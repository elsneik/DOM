/* 

objeto event

El objeto evento (e) es la representacion de un suceso que ocurre en el navegador, como un click, pulsar una tecla o el movimiento del mouse. Nos propirciona información sobre las propiedades y métodos para manipularlo.

para acceder al objeto event (e) se pasa argumento de la funcion manejadora (handler)

sintaxis:

funcion handler(e) {
//código que se ejecuta
console.log(e)
}

Algunas propiedades del objeto evento:

type      👉 devolver el tipo de evento
target    👉 devolver el elemento donde ocurre el evento
timeStamp 👉 devuelve la marca de tiempo en milisegundos la carga de la pagina.
code      👉 devuelve el código de la tecla presionada
key       👉 devuelve el valor de l tecla presionada
clientX   👉 devuelve la posicion horizontal del puntero del mouse en relcion a la ventana del navegador
clientY   👉 devuelve la posicion vertical del puntero del mouse en relcion a la ventana del navegador
*/
//referencia
const picame = document.getElementById("picame");

//Evento
picame.addEventListener("click", mostrarObjetoEvento)

//Funcion declarada
function mostrarObjetoEvento(event){
  // código que se ejecuta
  console.log(event)
  //para acceder a propiedades con .
  console.log(event.type)
  console.log(event.target)
  console.log(event.timeStamp)
  console.log(event.innerText)
}

//Evento de teclas
document.addEventListener("keydown", function(e){
  //Código que se ejecuta cuando el usuario presione una tecla.
  console.log(e)
  console.log(e.type)
  console.log(e.code)
  console.log(e.key)

})


//evento de mouse 
document.addEventListener(`mousemove`, (e) => {
//codigo que se ejecuta
//
   // console.log(e.clientX);
    //console.log(e.clientY);
    
})