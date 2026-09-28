/*
Desafio final 🔥

Crie um programa para calcular a área de um círculo, mas depois:
    Calcule a área.
    Arredonde o resultado para baixo com Math.floor().
    Arredonde o resultado para cima com Math.ceil().
    Mostre os três resultados:

    Área original:
    Área arredondada para baixo:
    Área arredondada para cima:
*/

const raio = 50
const area = Math.PI * Math.pow(raio, 2)
const resultadoBaixo = Math.floor(area)
const resultadoCima = Math.ceil(area)

console.log(`Área original: ${area}`)
console.log(`Área arredondada para cima: ${resultadoCima}`)
console.log(`Área arredondada para baixo: ${resultadoBaixo}`)

