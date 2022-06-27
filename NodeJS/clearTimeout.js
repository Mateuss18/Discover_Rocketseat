const timeOut = 3000
const finished = () => console.log("Terminou")

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)
console.log("Cade o timer?")