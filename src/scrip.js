class Observador{
    constructor(){
        this.subscriptores =[];
    }
    suscribir(suscriptor){
        this.subscriptores.push(suscriptor);
    }
    desuscribir(subscritor){
        this.subscriptores= this.subscriptores.filter(s => s !== subscritor);
    }
    notificar(evento){
        this.subscriptores.forEach(suscriptor => console.log(evento));
    }
}
class subscritor{
   constructor(nombre){
       this.nombre= nombre;
       console.log("creado el subscriptor : ",this.nombre);
   }
   mensaje(evento){
       console.log(`el subscriptor ${this.nombre} a sido invitado al evento ${evento}`);
   }
}
var mensaje = document.getElementById('mensaje');
var boton = document.getElementById('button');
var notificar = document.getElementById('notificar');
var notificar1 = document.getElementById('notificar2');
var notificar1 = document.getElementById('notificar3');
var notificar1 = document.getElementById('notificar4');
boton.addEventListener("click", function(){
const observador = new Observador();
const mensajeEnviado = new subscritor(mensaje.value);

observador.suscribir(mensajeEnviado);
console.log(observador.subscriptores);
observador.notificar('mensaje enviado');
alert('mensaje enviado');
notificar.style.background = 'blue';
notificar2.style.background = 'blue';
notificar3.style.background = 'blue';
notificar4.style.background = 'blue';
})

