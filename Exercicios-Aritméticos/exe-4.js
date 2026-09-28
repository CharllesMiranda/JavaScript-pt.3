/*
Exercício 4 — Situação real

Você trabalhou como motoboy e fez:

    8 entregas
    Cada entrega rendeu R$ 15
    Gastou R$ 20 com combustível
    Depois recebeu mais R$ 30

Crie as variáveis necessárias e calcule:

    a) Quanto ganhou nas 8 entregas?
    b) Quanto sobrou depois do combustível?
    c) Quanto ficou no total depois dos R$ 30 extras?

    Use +, - e *.
*/

const entregas = 8
const valorEntrega = 15
const combustivel = 20
const bonus = 30

// a) Quanto ganhou nas 8 entregas?

const ganhos = entregas * valorEntrega
console.log(`Ganhou R$${ganhos} `)

// b) Quanto sobrou depois do combustível?

const ganhosComDesconto = ganhos - combustivel
console.log(`Sobrou R$ ${ganhosComDesconto}`)

// c) Quanto ficou no total depois dos R$ 30 extras?

const ganhosMaisBonus = ganhosComDesconto + bonus
console.log(`Total com Bonus R$${ganhosMaisBonus}`)