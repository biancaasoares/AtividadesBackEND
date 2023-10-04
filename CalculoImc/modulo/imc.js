
const imc = (alturaUsuario, pesoUsuario) => {

    let altura = String(pesoUsuario).replace(',', '.')
    let peso = String(pesoUsuario).replace(',', '.')
    let imc

    if(peso == '' || altura == '')
    console.log('ERRO: É obrigatório a entrada de todos os valores')
    else if(isNaN(peso) || isNaN(altura))
    console.log('ERRO: É obrigatóro informar números')
    else{

        peso = Number(peso)
        altura = Number(altura)

        imc = peso / Math.pow(altura, 2)    
    }

    if(imc != undefined)
        return imc
    else
        return false
        
}

const verificarIMC = (valorIMC) => {

    let imc = valorIMC

    let grauPeso

    if(imc < 18.5)
        grauPeso = 'Abaixo do peso'
    else if(imc <= 24.9)
        grauPeso = 'Peso Normal'
    else if(imc <= 29.9)
        grauPeso = ' Acima do Peso '
    else if(imc <= 34.9)
        grauPeso = ' Obesidade nível I'
    else if(imc <= 39.9)
        grauPeso = 'Obesidade nível II'
    else if(imc > 40)
        grauPeso = 'Obesidade nível III'

    return grauPeso

}

module.exports = {
    imc,
    verificarIMC
}