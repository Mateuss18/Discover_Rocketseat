/* 
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32 
*/

function transoformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')


    //Fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não exisite')
    }


    //Fluxo F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'


    //Fluxo C -> F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }


    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transoformDegree('18C'))
    console.log(transoformDegree('9F'))
    console.log(transoformDegree('20j'))
} catch (error) {
    console.log(error.message)
}