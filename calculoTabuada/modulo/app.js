var tabuadA = require('./modulo/calcularTabuada.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o 1° valor (primeira tabuada): ', function (valorTabuada1) {

    let valorTabuada = valorTabuada1

    entradaDados.question('Digite o 2° valor (última tabuada) ', function (valorTabuadaFinal) {

        let tabuadafinal = valorTabuadaFinal

        entradaDados.question('Digite o primeiro valor a ser calculado: ', function (valor1) {

            let v1 = valor1

            entradaDados.question('Digite o último valor a ser calculado: ', function(valor2){

                let v2 = valor2

                tabuadA.calculoTabuada(valorTabuada, tabuadafinal, v1, v2)

                entradaDados.close()
            })

        })

    })

})