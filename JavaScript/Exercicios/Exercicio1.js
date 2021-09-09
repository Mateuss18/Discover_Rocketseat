// Transformar notas escolares

let nota = 59
let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69

if (notaA){
    console.log('A')
} else if (notaB){
    console.log('B')
} else if (notaC){
    console.log('C')
} else if (notaD){
    console.log('D')
}else{
    console.log('F')
}