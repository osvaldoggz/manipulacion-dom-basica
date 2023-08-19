//Creamos variables que representen a los elementos del HTML
const h1 = document.querySelector('h1'/*Nombre de la etiqueta a la que nos queremos referir*/);
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito'/*El . al inicio es porque pertenece a una clase*/);
const pid = document.getElementById('pid'/*El # al inicio es porque pertenece a un id*/);
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde'); Agrega y quita elemento dependiendo de una acción que se deba realizar
//h1.classList.contains('verde'); Devuelve true o false dependiendo de si encuentra el elemento
input.value="456";

const img = document.createElement('img');
img.setAttribute('src', 'https://www.conmishijos.com/uploads/audios/patitofeo.jpg');
console.log(img);
pid.innerHTML="";
pid.append(img);