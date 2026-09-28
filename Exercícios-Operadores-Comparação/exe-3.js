/*
Exercício 3 — Situação real

Crie:
    let idade = 17

Agora faça comparações para verificar:
    Se a pessoa tem 18 anos ou mais
    Se a pessoa tem menos de 18 anos
    Se a pessoa tem exatamente 18 anos

Mostre cada resultado no console.

Desafio: não use if/else ainda. Quero que você treine somente os operadores de comparação.
*/

let idade = 17

// Se a pessoa tem 18 anos ou mais

if(idade >= 18){
    console.log("Tem 18 Anos ou Mais")
}else {
    console.log("Tem Menos de 18 Anos")
}

//Se a pessoa tem menos de 18 anos

if(idade < 18) {
    console.log("Tem Menos de 18 Anos")
}else {
    console.log("Tem 18 Anos ou Mais")
}

//Se a pessoa tem exatamente 18 anos

if(idade === 18){
    console.log("Tem Exatamente 18 Anos")
}else {
    console.log("Não tem 18 Anos")
}