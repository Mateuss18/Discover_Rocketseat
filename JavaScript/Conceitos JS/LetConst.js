//LET E CONST É LOCAL

let y = 2

{
    y = 1
    console.log('> existe y dentro do bloco? ', y)
    
}
//Isso acontece por que o let procura a variavel no bloco acima até encontra-lá

console.log('> existe y depois do bloco? ', y)






const z = 3

{
    console.log('> existe z dentro do bloco? ', z)
}

//CONST NÃO PODE SE ALTERAR
console.log('> existe z depois do bloco? ', z)