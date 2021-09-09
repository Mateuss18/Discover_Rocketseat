function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome invalido ou inextente'
    }
}

try {
    sayMyName()
} catch(e){
    console.log(e)
}