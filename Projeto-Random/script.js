const primeiroNumero = document.querySelector(".primeiroNumero")
const segundoNumero = document.querySelector(".segundoNumero")
const botaoSortear = document.querySelector(".botaoSortear")
const numeroSorteado = document.querySelector(".numeroSorteado")
const escolhaSorteio = document.querySelector(".escolhaSorteio")

function sortearNumero() {
    const min = Math.floor(Number(primeiroNumero.value))
    const max = Math.floor (Number(segundoNumero.value))
    const menor = Math.min(min, max)
    const maior = Math.max(min, max)
    const intervalo = maior - menor + 1

    const resultado = Math.floor(Math.random() * intervalo) + menor

    numeroSorteado.innerText = resultado

    escolhaSorteio.innerText = `Entre ${menor} e ${maior}`
}

botaoSortear.addEventListener("click", sortearNumero)