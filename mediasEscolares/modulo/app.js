var media = require('./modulo/medias')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Nome do aluno: ', function (nomeAluno) {

    let aluno = nomeAluno

    entradaDados.question('Gênero do aluno (F/M): ', function (sexoAluno) {

        let sexo= sexoAluno

        entradaDados.question('Curso: ', function (nomeCurso) {

            let curso = nomeCurso

            entradaDados.question('Disciplina: ', function (nomeMateria) {

                let materia = nomeMateria

                entradaDados.question('Professor: ', function (nomeProfessor) {

                    let professor = nomeProfessor

                    entradaDados.question('Gênero do professor (F/M): ', function (sexoProfessor) {

                        let sexoProf = sexoProfessor

                        console.log()

                        entradaDados.question('Nota 1: ', function (n1) {

                            let nota1 = n1


                            entradaDados.question('Nota 2: ', function (n2) {

                                let nota2 = n2


                                entradaDados.question('Nota 3: ', function (n3) {

                                    let nota3 = n3


                                    entradaDados.question('Nota 4: ', function (n4) {

                                        let nota4 = n4


                                            let mediaFinal = media.calcularMedia(nota1, nota2, nota3, nota4)

                                            if(mediaFinal != undefined){
                                                let situacao = media.mostrarSituacao(mediaFinal)
                                                console.log('')
                                                media.mostrarRelatorio(aluno, sexo, curso, materia, professor, sexoProf, mediaFinal)
                                                if(situacao =='para exame'){
                                                    entradaDados.question('Nota do aluno no exame: ', function(notaExame){
    
                                                        let exame = notaExame
                                                        let mediaExame = media.calcularExame(mediaFinal, exame)
                                                        media.mostrarSituacaoFinal(mediaExame)
    
                                                    })
                                                }else{
                                                    console.log('')
                                                }
                                            }

                                            

                                        })


                                    })

                                })
                            })

                        })

                    })
                })

            })
        })
    })

