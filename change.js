/*En la página adjunta, realiza una función que cambie de colores el menú 
(Inicio, Hoteles, Nuestras tarifas, ¿Dónde estamos? y Nuestra empresa) cada 
vez que se pase por encima de ellos, se abandone el elemento o se pulse
*/

let menu = document.querySelectorAll(".efectos");

menu.forEach(function(item) {
  item.addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue";
    this.style.color = "black";
  });

  item.addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "";
  });

  item.addEventListener("click", function() {
    this.style.backgroundColor = "green";
    this.style.color = "black";
  });
});



/*Realiza una función que cambie la imagen de cabecera por una que tú 
elijas cuando se pase por encima de “Esta empresa es el relax” y que cargue la 
foto original cuando se abandone este texto. La imagen tendrá que ocupar el 
mismo espacio que ocupa la imagen original y no podrá estar deformada. HAY 
que utilizar querySelectorAll.*/


const textoRelax = document.querySelector("#texto-relax");
const imgCabecera = document.querySelector(".imgcabecera");

textoRelax.addEventListener("mouseover", () => {
  imgCabecera.src = "images/sol.png";
});

textoRelax.addEventListener("mouseout", () => {
  imgCabecera.src = "images/relax.jpg";
});



/*Realiza una función que a los 30 segundos pregunte si te gusta la página
y lance mensajes adecuados en el caso de que le guste o no le guste. En el caso 
de que le guste continuará en la página y en el caso de que no le guste irá a la 
página del instituto*/

setInterval(function () {
  if (confirm("¿Te gusta esta página?")) {
  } else {
    window.location.href = "https://fpiespablopicasso.es/";
  }
}, 30000);



/* aqui se hace lo mismo de la imagen, solo que en este caso, es una URL dese CSS.
*/

const cambioCentral = document.querySelector("#cambio-imagen");
const fondo = document.querySelector(".fondo");

cambioCentral.addEventListener("mouseover", () => {
  fondo.style.backgroundImage = "url('images/sol.png')";
});

cambioCentral.addEventListener("mouseout", () => {
  fondo.style.backgroundImage = "url('images/fondo.jpg')";
});



/* LO MISMO PERO CON TEXTO*/


const textoSalud = document.querySelector("#cambio-imagen");

textoSalud.addEventListener("mouseover", () => {
  textoSalud.innerHTML = "Nunca es tarde para empezar a cuidarse";
});

textoSalud.addEventListener("mouseout", () => {
  textoSalud.innerHTML = "El secreto <br /> para tener una buena salud <br /> es que la mente repose";
});


/* cambiar el color de la cabecera*/


const colorCabecera = document.querySelector(".cabecera");

colorCabecera.addEventListener("mouseover", () => {
  colorCabecera.style.backgroundColor = "blue";
});

colorCabecera.addEventListener("mouseout", () => {
  colorCabecera.style.backgroundColor = "brown";
});


/*cambiar de color en la barra de navegacion */

const colorBarra = document.querySelector(".navegacion");

colorBarra.addEventListener("mouseover", () => {
  colorBarra.style.backgroundColor = "blue";
});

colorBarra.addEventListener("mouseout", () => {
  colorBarra.style.backgroundColor = "brown";
});


/* Cambiar el texto de la cabecera*/

const textoCabecera = document.querySelector("#texto-relax");

textoCabecera.addEventListener("mouseover", () => {
  textoCabecera.innerHTML = "Se siente bien estar relax";
});

textoCabecera.addEventListener("mouseout", () => {
  textoCabecera.innerHTML = "Esta empresa es el relax";
});