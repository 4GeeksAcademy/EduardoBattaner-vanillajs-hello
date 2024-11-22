/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suite = ["♦", "♥", "♠", "♣"];
const valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
const valor = document.getElementById("row2");
const iconUp = document.getElementById("row1");
const iconDown = document.getElementById("row3");
const carta = document.getElementById("card");

function cartaAleatoria() {
  //write your code here

  let randomValor = Math.floor(Math.random() * valores.length);
  let randomPalo = Math.floor(Math.random() * suite.length);
  document.querySelector("#row2").innerHTML = valores[randomValor];
  document.querySelector("#row1").innerHTML = suite[randomPalo];
  document.querySelector("#row3").innerHTML = suite[randomPalo];
  if (randomPalo === 2 || randomPalo === 3) {
    iconUp.style.color = "red";
    valor.style.color = "red";
    iconDown.style.color = "red";
  } else {
    document.querySelector("#row1").style.color = "black";
    document.querySelector("#row2").style.color = "black";
    document.querySelector("#row3").style.color = "black";
  }
}
window.onload = cartaAleatoria();
carta.addEventListener("click", cartaAleatoria);
setTimeout(cartaAleatoria(), 1100);

setInterval(() => {
  cartaAleatoria();
}, 10000);

const boton = document.getElementById("enviar");
function cambioSize() {
  let inputAncho = document.getElementById("inputancho").value;
  let inputAlto = document.getElementById("inputalto").value;
  if (
    inputAncho != 0 &&
    inputAlto != 0 &&
    inputAlto != "" &&
    inputAncho != ""
  ) {
    document.getElementById("card").style.height = inputAlto + "px";
    document.getElementById("card").style.width = inputAncho + "px";
  }
}
boton.addEventListener("click", cambioSize);
