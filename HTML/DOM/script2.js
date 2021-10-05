const divCima = document.createElement('div');
divCima.innerText = "encima"

const divBaixo = document.createElement('div');
divBaixo.innerText = "embaixo!"

const divBefore = document.createElement('div');
divBefore.innerText = "Before"

const divAfter = document.createElement('div');
divAfter.innerText = "After"

const body = document.querySelector('body');
const script = body.querySelector('script');
const p = body.querySelector('p');

//adicionada depois do ultimo filho do body
body.append(divBaixo)

//adicionada antes do primeiro filho do body
body.prepend(divCima)

//adicionada entre o header e o script
body.insertBefore(divBefore, script)

body.insertBefore(divAfter, p.nextElementSibling)