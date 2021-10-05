//Eventos via HTML
function umClique() {
    console.log("Clicou")
}

function doisCliques() {
    console.log("Clicou duas vezes")
}

function passeAqui() {
    console.log("Passou o mouse")
}

const input = document.querySelector('input')

//onkeydown -> Quando é pressionado ele é ativado
//onkeyup -> so é ativado quando é soltado o botão da tecla

input.onkeypress = function(){
    console.log("Rodando")
} 

//EVENTOS VIA JAVASCRIPT

const h2 = document.querySelector('h2')

h2.addEventListener('click', clique)

function clique() {
    console.log("Clicado")
}
//Versão simplificada
h2.addEventListener('click', function outroClique(){
    console.log('Outro clique')
})

//EVENT ARGUMENT 
const textarea = document.querySelector('textarea')

textarea.onkeydown = function(event){
    console.log(event)
}