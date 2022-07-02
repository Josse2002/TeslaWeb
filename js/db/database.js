import {saveForm} from "./firebase.js";


window.addEventListener("DOMContentLoaded", function () {

});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {

  e.preventDefault();

  const textform = document.getElementById("name");
  const mail = document.getElementById("email");
  const message = document.getElementById("message");
  saveForm(textform.value, mail.value, message.value);
  
  form.reset();

  var exitoso = document.getElementById("exitoso");

  exitoso.style.display = "flex";

  const myTimeout = setTimeout(myGreeting, 4000);

  function myGreeting() {
    exitoso.style.display = "none";
  }

function myStopFunction() {
  clearTimeout(myTimeout);
}


})