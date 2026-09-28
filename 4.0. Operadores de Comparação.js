/*

Operadores de Comparação

==   -> Igual // Compara o valor, mas não o tipo
===  -> TOTALMENTE igual // Compara o VALOR e o TIPO

!=   -> Diferente // Ele compara o valor, mas não o tipo
!==  -> TOTALMENTE Diferente // Compara o VALOR e o TIPO

*/

const primeiroNumero = 30
const segundoNumero = 40

/*
const segundoNumero =  30   ==  True pq são iguais o tipo e valor
const segundoNumero = "30"  ==  True pq são iguais o valor
const segundoNumero = "30"  === False pq são diferente o tipo
const segundoNumero =  30   === True pq são iguais o tipo e valor
*/

/**
const segundoNumero =  30   !=  False pq são iguais o tipo e valor
const segundoNumero = "30"  !=  False pq são iguais o valor
const segundoNumero = "30"  !== True pq são diferente o tipo
const segundoNumero =  30   !== False pq são iguais o tipo e valor
*/


if(primeiroNumero == segundoNumero){
    console.log("Eles são iguais")
} else {
    console.log("Não são iguais")
}