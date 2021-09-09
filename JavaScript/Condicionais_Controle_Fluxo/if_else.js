let temperature = 39
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature){
    console.log('Esta com febre alta')
} else if (mediumTemperature) {
    console.log('Estado febril')
} else {
    console.log('Não está com febre')
}