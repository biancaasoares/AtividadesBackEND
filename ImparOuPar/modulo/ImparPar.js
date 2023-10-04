const imparPar = function(numeroInicial, numeroFinal, escolhaUsuario){

    let valorInicial = Number(numeroInicial)
    let valorFinal = Number(numeroFinal)
    let escolha = Number(escolhaUsuario)

    if (valorInicial == '' || valorFinal == '')
    console.log('ERRO: É preciso a entrada de TODOS os valores')

    else if(isNaN(valorInicial) || isNaN(valorFinal))
        console.log('ERRO: Os valores precisa ser números.')

    else if(valorInicial > 500 || valorInicial < 1)
        console.log('ERRO: O valor inicial inserido deve ser um número de 0 a 500.')

    else if (valorFinal > 1000 || valorFinal < 10)
        console.log('ERRO: O valor final  deve ser um número de 10 á 1000.')

    else if (valorFinal < valorInicial)
        console.log('ERRO: O valor final NÃO pode ser menor do que o inicial.')

    else if (valorFinal == valorInicial)
        console.log('ERRO: Os valores não podem ser iguais')
    else if(escolha != 1 && escolha != 2 && escolha != 3 )
    console.log('ERRO: O valor não corresponde à nenhuma das opções ')
    else{
        
        let contPar = 0
        let contImpar = 0

        if(escolha ==1 || escolha ==3){
            console.log('Números pares')
            for(;valorInicial <= valorFinal; valorInicial++){
                if(valorInicial%2==0){
                    console.log(valorInicial)
                    contPar++
                }
            }
            console.log('Estes são os números ímpares:  ' +contPar)
        }

        if(escolha==2 || escolha==3){        
        valorInicial = Number(numeroInicial)
        console.log()
        console.log('Números ímpares')
        for(;valorInicial <= valorFinal;valorInicial++){
            if(valorInicial%2!=0){
                console.log(valorInicial)
                contImpar++
            }
        }
        console.log('Estes são os números ímpares: ' +contImpar)
    }

    }
} 

module.exports ={
    imparPar
}