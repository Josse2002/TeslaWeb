//MOSTRANDO Y OCULTANDO EL MENU
let botonAbrir = document.getElementById('menu-abrir');
let menu = document.getElementById('menu');
let botonCerrar = document.getElementById('menu-cerrar');

//SI SE DA CLIC EN EL BOTON ABRIR
botonAbrir.addEventListener("click", function(){
    menu.style.display = "flex";
    menu.style.animationName = "mostrarMenu";
    menu.style.animationDuration = ".5s";
    menu.style.left = "0px"
  
}, false);

//SI SE DA CLIC EN EL BOTON CERRAR
botonCerrar.addEventListener("click", function(){
    menu.style.animationName = "cerrarMenu";
    menu.style.animationDuration = ".5s";
    menu.style.left = "-1000px"
}, false);

window.addEventListener("resize", function(){
  if (window.innerWidth > 683) {
    menu.style.display = "none"; 
  }
}, false);
