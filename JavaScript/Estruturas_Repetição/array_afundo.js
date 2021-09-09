//1) ARRAY COM OBJETO

let myArray = new Array('a',  'c', 'b')
console.log(myArray)


//2) CONTANDO ELEMENTOS DE UM ARRAY

let words = ['r', 'o', 'p', 'q']
console.log(words.length)


//3) TRANSFORMAR UMA PALAVRA EM UMA CADEIA DE CARACTERES DE UM ARRAY

let word = 'mateus'
console.log(Array.from(word))


//4) let leangueges = ['js', 'c', 'dart', 'python', 'cobol']

// [a] adicionar um item no fim 
    leangueges.push('php')
// [b] adicionar no começo
    leangueges.unshift('java')
// [c] remover do fim
    leangueges.pop()
// [d] pegar somente alguns elementos
    console.log(leangueges.slice(1, 3))
// [e] remover 1 ou mais itens em qualquer posição do array
    leangueges.splice(1, 2)
// [f] encontrar a posição de um elemnto   
    let index = leangueges.indexOf('c')