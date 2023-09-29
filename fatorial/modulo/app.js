var fatorial = require ('./modulo/calculoFatorial.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor: ', function(digitarValor){
    let valor = digitarValor

    console.log('Fatorial de ' + valor + ': ' + fatorial.calcularFatorial(valor))

    entradaDados.close()
})