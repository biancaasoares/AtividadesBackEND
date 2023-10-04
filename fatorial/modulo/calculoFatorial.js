const calculoFatorial = function (digitarValor) {
    let valor = digitarValor
    let contador = 1
    let resultado = valor

    if (valor == '' || isNaN(valor))
        console.log('ERRO: O valor deve ser válido (número)')


    else if (valor <= 1)
        console.log('ERRO: É preciso que o valor seja maior que 1')
    else {
        while (contador < valor) {
            resultado = resultado * (valor - contador)
            contador++
        }
    }

    return resultado
}


module.exports = {
    calculoFatorial
}