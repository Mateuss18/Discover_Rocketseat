/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo */


const caixaFamiliar = {
    receitas: [100, 900, 1000, 889],
    despesas: [953, 100, 50]
}

function soma(array){
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function Saldo(){
    const totalReceitas = soma(caixaFamiliar.receitas)
    const totalDespesas = soma(caixaFamiliar.despesas)

    let saldo = totalReceitas - totalDespesas
    let saldoOk = saldo >= 0
    let saldoText = "negativo"


    if(saldoOk){
        saldoText = "postivo"
    }

    console.log(`Seu saldo é de R$${saldo} e ele está ${saldoText}`)
}

Saldo()