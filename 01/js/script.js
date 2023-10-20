// 1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.

let number1 = Number(prompt(`Digite um número`))
let number2 = Number(prompt(`Digite um outro número`))


if (number1 > number2){
    alert(`O maior número é ${number1}`)

}
else if (number1 < number2){
    alert(`O maior número é ${number2}`)
}
else if (number1 == number2){
    alert (` Os números são iguais`)
}
