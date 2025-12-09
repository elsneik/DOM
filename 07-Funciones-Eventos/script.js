/* 

Funcones Eventos

La funcion en un evento es el heandler. Es lo que se ejecuta cuando ocurre el evento.

  1. Evento con funcion declarada
    Está funcion se escribe por fuera del evento y se pasa como argumento del listener.

    sintexis:
    target.eventListener(trigger, eventHandler);
    funtion.eventHandler(){
      //Código que se ejecuta
    }
*/

// Referencias
const declarada=document.getElementById("declarada");

// Evento con funcion declarada
declarada.addEventListener('click' , funcionDeclarada);
function funcionDeclarada(){
  console.log("hiciste click")
}
/*
2. evento con funcion anonima

La fncion se escribe dentro del evento y no tiene un nombre asignado.

Sintaxis:

 target.add.

*/

// referencia

const anonima = document.getElementById(`anonima`);

// Evento con funciòn anonima

anonima.addEventListener(`click`, function() {
    console.log(`hiciste click en el boton con funcion anonima`)
})

/* 
3 . evento con funcion flecha 
*/


//Referencia

const flecha = document.getElementById(`flecha`);

// Evento con funcion flecha

flecha.addEventListener(`click`,() =>{
    console.log (`Hiciste click en el boton con una funcion flecha`);
});