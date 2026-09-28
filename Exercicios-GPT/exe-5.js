/*
Exercício 5 — Desafio com PI

Crie uma variável:
    const raio = 5

Calcule a área de um círculo usando:
    área = π × raio²

Você vai precisar usar:
    Math.PI
    Math.pow()

Mostre o resultado no console.
*/

const raio = 5

const pi = Math.PI
const potenciaRaio = Math.pow(raio, 2)

const area = pi * potenciaRaio

console.log(area)

/*
Poderia simplificar

const raio = 5

const area = Math.PI * Math.pow(raio, 2)

console.log(area)
*/