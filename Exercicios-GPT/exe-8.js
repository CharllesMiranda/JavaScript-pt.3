/*
Exercício 8 — Pessoas em grupos

Você tem 47 pessoas e quer dividir em grupos de 5.

Use:

Math.floor()

para descobrir quantos grupos completos podem ser formados.

Depois tente descobrir quantas pessoas sobram.
*/

const pessoas = 47
const divisaoDeGrupo = pessoas / 5
const sobraDePessoas = pessoas % 5

const quantidadeDeGrupos = Math.floor(divisaoDeGrupo)
console.log(quantidadeDeGrupos)
console.log(sobraDePessoas)