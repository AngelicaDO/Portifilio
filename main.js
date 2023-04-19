const meuNome = "Angelica Dias";
const element = document.querySelector("#angelica");
let i = 0;
setInterval(function () {
  if (i < meuNome.length) {
    element.innerHTML += meuNome.charAt(i);
    i++;
  }
}, 100);
