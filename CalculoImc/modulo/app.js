
var readline = require('readline')
var calculoIMC = require('./modulo/imc')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe a sua altura em metros: ', function(alturaUsuario){

    let altura = alturaUsuario

    entradaDeDados.question('Informe a peso: ', function(pesoUsuario){

        let peso = pesoUsuario

        let imc = calculoIMC.calculoIMC(altura, peso)
        let grauPeso
        
        if (imc){
            grauPeso = calculoIMC.verificarIMC(imc)
            console.log(`IMC: ${String(imc.toFixed(2).replace('.', ','))} - ${grauPeso}`)
        }
                
        entradaDeDados.close()
        
    })
    
})