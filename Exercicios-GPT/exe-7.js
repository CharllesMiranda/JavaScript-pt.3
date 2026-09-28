/*
Exercício 7 — Desafio das caixas 📦

Você precisa guardar 53 produtos em caixas.

Cada caixa suporta 10 produtos.

Use Math.ceil() para descobrir quantas caixas serão necessárias.

💡 Pense: se sobrarem 3 produtos, você ainda precisará de uma caixa inteira.
*/

const produtos = 53
const caixas = produtos / 10

const resultado = Math.ceil(caixas)
console.log(resultado)