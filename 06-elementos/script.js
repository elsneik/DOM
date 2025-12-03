/*

Evento

accion que ocurre en el navegador o en un elemento del DOM
puede ser iniciado por el usuario o por el navegador. los eventos pueden ser navegador mediante JS.

 Manejar eventos con JS

 1.target (elemenyo o blanco)

 Es el elemento del DOM en el que ha ocurrido el evento.

 es el elemento del DOM en el que ha ocurrido el evento. Este se encuentra dentro del objeto (event) y se accede mediante la propiedad event.target

 2.event listener (escuchador del evento)
  
 es el oido que esta atento a que ocurra un evento en un elemento en especifico usamos el metodo addEventListener para escuchar los eventos

  3.trigger (disparador o desencadenante)

  Es el desencadenante que provoca que un evento ocurra . es la accion que realiza el usuario o el sistema para activar el evento.


  hacer clic
  mover raton
  tipear teclas


  4. event handler (manejador de evento)

  Es una funcion que se va a ejecutar cada vez que ocurre el evento
  con js le decimos que va a ejecutar el manejador.

  mostrar un mensaje 
  un color
  agregar un elemento
  lanzar una alerta

  sintaxis:
  targer.eventListener (trigger , event HandLer);
  Targer - elemento donde ocurre el evento
  Listener - escucha y detecta el evento
  Trigger -accion que ocurre en el evento.
  Handler - la funcion que se ejecuta al ocrrir el evento

*/

// seleccionamos un elemento

const button = document.getElementById("button")


button.addEventListener("click", mostrasMensaje);


function mostrasMensaje(){
    alert("ya vamonos porfavor")
}